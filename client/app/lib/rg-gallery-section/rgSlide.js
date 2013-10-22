angular.module('rg.gallery.section')

  .directive('rgslide', function($parse) {
    return {
      restrict: 'E',
      replace: true,
      transclude: true, 
      scope: {
        offset: '='
      },

      require: '^rgcarousel',

      template: 
        '<div class="rg-carousel-slide">' +
            '<div ng-transclude></div>' +
        '</div>',

      link: function($scope, $element, $attrs, rgCarouselCtrl) {
        rgCarouselCtrl.addSlide($scope, $element);
      }
    }

  });