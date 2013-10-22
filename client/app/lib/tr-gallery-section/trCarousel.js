angular.module('tr.gallery.section')

  .directive('trcarousel', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {},

      require: 'trcarousel',

      template: 
        '<div class="tr-carousel">' +

          '<div class="tr-carousel-viewport" ng-transclude>' + 
            /* slides */ 
          '</div>' + 
          

          '<div class="tr-carousel-controls-container">' +
            '<div class="tr-carousel-control tr-carousel-control-left">' +
              '<span class="tr-carousel-control-left-icon" ng-click="prev()"> < </span>' +
            '</div>' +

            '<div class="tr-carousel-control tr-carousel-control-right">' + 
              '<span class="tr-carousel-control-right-icon" ng-click="next()"> > </span>' +
            '</div>' +
          '</div>' +

        '</div>',

      controller: 'trCarouselCtrl'
    }

  });