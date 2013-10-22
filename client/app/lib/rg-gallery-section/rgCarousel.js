angular.module('rg.gallery.section')

  .directive('rgcarousel', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
      },

      template: 
        '<div class="rg-carousel">' +

          '<div class="rg-carousel-viewport">' + 

            /* slides */ 
            '<div ng-transclude></div>' +

            /* controls */
            '<div class="rg-carousel-controls-container">' +
              '<div class="rg-carousel-control rg-carousel-control-left">' +
                '<span class="rg-carousel-control-left-icon" ng-click="prev()"> < </span>' +
              '</div>' +

              '<div class="rg-carousel-control rg-carousel-control-right">' + 
                '<span class="rg-carousel-control-right-icon" ng-click="next()"> > </span>' +
              '</div>' +
            '</div>' +


          '</div>' + 

          

        '</div>',

      controller: 'rgCarouselCtrl'
    }

  });