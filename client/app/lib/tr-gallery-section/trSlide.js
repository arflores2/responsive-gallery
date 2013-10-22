angular.module('tr.gallery.section')

  .directive('trslide', function($parse) {
    return {
      restrict: 'E',
      replace: true,
      transclude: true, 
      scope: {},

      require: '^trcarousel',

      template: 
        '<div class="tr-carousel-slide"></div>',

      link: function($scope, $element, $attrs, trCarouselCtrl) {
        trCarouselCtrl.addSlide($scope, $element);
      }
    }

  });