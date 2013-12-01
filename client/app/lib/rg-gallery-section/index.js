angular.module('rg.gallery.section', ['ui.common.transition'])
  
  .controller('rgCarouselCtrl', function($scope, $timeout, $q, transition) {
    var self = this,
        slides = self.slides || [],
        currentIndex = 0,
        currentTimeout;

    self.currentSlide = null;

    function _width($el) {
      var width = parseInt($el.width(), 10),
          paddingLeft = parseInt($el.css('padding-left'), 10),
          paddingRight = parseInt($el.css('padding-right'), 10),
          marginLeft = parseInt($el.css('margin-left'), 10),
          marginRight = parseInt($el.css('margin-right'), 10),
          borderLeft = parseInt($el.css('borderLeftWidth'), 10),
          borderRight = parseInt($el.css('borderRightWidth'), 10);

      width += paddingLeft + paddingRight;
      width += marginLeft + marginRight;
      width += borderLeft + borderRight;
      return width;
    }

    self.addSlide = function(slide, $el) {
      var index = slides.length,
          slideWidth = _width($el),
          leftOffset = slide.offset || 25,
          newLeft = index*slideWidth + leftOffset;

      $scope.min = true;

      if(slides.length == 0) {
        $scope.max = true;
      }
      else {
        $scope.max = false;
      }

      $el.css({
        left: newLeft
      });

      angular.extend(slide, { _index: index, _$el: $el, _left: newLeft, _width: slideWidth });
      slides.push(slide);
    };

    self.move = function(slide, direction) {
      var $el = slide._$el,
          slideWidth = slide._width,
          oldLeft = slide._left;

      var newLeft = (direction === 'left') ? oldLeft - slideWidth : oldLeft + slideWidth;

      $el.css({
        left: newLeft
      });

      angular.extend(slide, { _left: newLeft });
    };

    $scope.next = function() {
      if(currentIndex == slides.length - 2) {
        $scope.max = true;
      }
      else if(currentIndex == slides.length - 1) {
        console.log('reached max');
        return;
      }
      currentIndex += 1;
      $scope.min = false;

      angular.forEach(slides, function(slide, index) {
        self.move(slide, 'left');
      });
    };

    $scope.prev = function() {
      if(currentIndex == 1) {
        $scope.min = true;
      }
      else if(currentIndex == 0) {
        console.log("reached min");
        return;
      }
      currentIndex -= 1;
      $scope.max = false;

      angular.forEach(slides, function(slide, index) {
        self.move(slide, 'right');
      })
    }

  });