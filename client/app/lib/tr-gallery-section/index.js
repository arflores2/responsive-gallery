angular.module('tr.gallery.section', ['ui.common.transition'])
  
  .controller('trCarouselCtrl', function($scope, $timeout, $q, transition) {
    var self = this,
        slides = self.slides || [],
        currentIndex = 0,
        currentTimeout;

    self.currentSlide = null;

    self.addSlide = function(slide, $el) {
      var index = slides.length;
      slides.push(slide); 
      var newLeft = index*100;
      $el.css({
        left: newLeft + '%'
      });

      angular.extend(slide, { _index: index, _$el: $el, _left: newLeft });
    };

    self.move = function(slide, direction) {
      var $el = slide._$el;

      var oldLeft = slide._left;
      var newLeft = (direction === 'left') ? oldLeft - 100 : oldLeft + 100;

      $el.css({
        left: newLeft + '%'
      });

      angular.extend(slide, { _left: newLeft });
    };

    $scope.next = function() {
      if(currentIndex == slides.length - 1) {
        console.log('reached max');
        return;
      }
      currentIndex += 1;

      angular.forEach(slides, function(slide, index) {
        self.move(slide, 'left');
      });
    };

    $scope.prev = function() {
      if(currentIndex == 0) {
        console.log('reached min');
        return;
      }
      currentIndex -= 1;

      angular.forEach(slides, function(slide, index) {
        self.move(slide, 'right');
      })
    }

  });