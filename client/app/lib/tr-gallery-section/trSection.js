angular.module('tr.gallery.section')

  .directive('trsection', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        autoIncrement: '=',
        descriptionClass: '=',
        descriptionTitle: '=',
        descriptionText: '=',

        carouselClass: '=',
        slides: '='
      },

      template: 
        '<div class="tr-section">' +
          '<div class="tr-section-description {{descriptionClass}}">' +
            '<h1 class="tr-section-description-title">{{descriptionTitle}}</h1>' + 
            '<div class="tr-section-description-text">{{descriptionText}}</div>' +
          '</div>' +

          '<trcarousel>' +
            '<trslide ng-repeat="slide in slides" active="slide.active">' +
              '<img class="tr-slide-img" src="{{slide.path}}">' +
            '</trslide>' +
          '</trcarousel>' +
        '</div>'
    }

  });