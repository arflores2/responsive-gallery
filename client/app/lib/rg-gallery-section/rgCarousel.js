angular.module('rg.gallery.section')

  .directive('rgcarousel', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,

      template:
        '<div class="rg-carousel">' +

          '<div class="rg-carousel-viewport">' +

            /* slides */
            '<div ng-transclude></div>' +

            /* controls */
            '<div class="rg-carousel-controls-container">' +
              '<div class="rg-carousel-control rg-carousel-control-left" ng-click="prev()" ng-class="{\'disabled\': min}" >' +
                '<span class="rg-carousel-control-left-icon" ng-click="prev()"></span>' +
              '</div>' +
              '<div class="rg-carousel-control rg-carousel-control-right" ng-click="next()" ng-class="{\'disabled\': max}">' +
                '<span class="rg-carousel-control-right-icon"></span>' +
              '</div>' +
            '</div>' +


          '</div>' +

          

        '</div>',

      controller: 'rgCarouselCtrl'
    }

  });