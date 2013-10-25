angular.module('rg.gallery.section')

  .directive('rgsection', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        autoIncrement: '=',

        anchorId: '@',

        descriptionClass: '=',
        descriptionTitle: '=',
        descriptionSubtitle: '=',
        descriptionText: '=',

        carouselClass: '=',
        slides: '='
      },

      template: 
        '<div id="{{anchorId}}" class="rg-section">' +
          '<div class="rg-section-description {{descriptionClass}}">' +
            '<h1 class="rg-section-description-title">{{descriptionTitle}}</h1>' + 
            '<span class="rg-section-description-subtitle">{{descriptionSubtitle}}</span>' + 
            '<div class="rg-section-description-text">{{descriptionText}}</div>' +
          '</div>' +

          '<rgcarousel>' +
            '<rgslide ng-repeat="slide in slides" active="slide.active" offset="slide.offset">' +
              '<img class="rg-slide-img" src="{{slide.path}}">' +
            '</rgslide>' +
          '</rgcarousel>' +
        '</div>'
    }

  });