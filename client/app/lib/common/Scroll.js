angular.module('ui.common.scroll', [])

.directive('scroll', function($window, $location, $anchorScroll) {

  function getWindowHalf($win) {
    return $win.innerHeight / 2;
  }

  return {
    restrict: 'A',

    link: function($scope, $element, $attrs) {
      angular.element($window).bind('scroll', function() {
        var top = $element[0].getBoundingClientRect().top;
        var bottom = top + $element.height();
        var yAxis = $window.innerHeight / 2;
        var sweetSpot = 100;

        if(((top - sweetSpot) > 0) && yAxis > top - sweetSpot) {
          console.log('changing location');
          var path = $attrs.anchorId;
          $scope.$apply(function() {
            console.log(path)
            //$location.hash(path);
//            $anchorScroll();
          })
        } 
      }); 
    }
  }

});