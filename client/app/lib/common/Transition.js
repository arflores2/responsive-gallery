angular.module('ui.common.transition', [])

  .factory('transition', function($q, $timeout, $rootScope) {
    var _el = document.createElement('trans');
    var _transitionEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'transition': 'transitionend'
    };

    var _animationEndEventNames = {
      'WebkitTransition': 'webkitAnimationEnd',
      'MozTransition': 'animationend',
      'OTransition': 'oAnimationEnd',
      'transition': 'animationend'
    };

    function findEventName(endEventNames) {
      var name;
      for(name in endEventNames) {
        if(_el.style[name] !== undefined) {
          return endEventNames[name];
        }
      }
    }

    var Transition = function(element, trigger, options) {
      options = options || {};

      var _deferred = $q.defer();
      var _endEventName = Transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

      var _tranitionEndHandler = function(event) {
        $rootScope.$apply(function() {
          element.unbind(_endEventName, _tranitionEndHandler);
          _deferred.resolve(element);
        });
      };

      if(_endEventName) {
        element.bind(_endEventName, _tranitionEndHandler);
      }

      $timeout(function() {
        if( angular.isString(trigger) ) {
          element.addClass(trigger);
        }
        else if( angular.isFunction(trigger) ) {
          trigger(element);
        }
        else if( angular.isObject(trigger) ) {
          element.css(trigger);
        }

        if( !_endEventName ) {
          _deferred.resolve(element);
        }
      });

      _deferred.promise.cancel = function() {
        if( _endEventName ) {
          element.unbind(_endEventName, transitionEndEventName);
        }
        _deferred.reject('Transition cancelled');
      };

      return _deferred.promise;
    }

    Transition.transitionEndEventName = findEventName(_transitionEndEventNames);
    Transition.animationEndEventName = findEventName(_animationEndEventNames);
    return Transition;

  });