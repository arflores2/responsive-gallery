angular.module('responsive-gallery')

  .controller('ResponsiveGalleryCtrl', function($scope) {
    /**
     * mobile
     */
    $scope.mobile = {
      autoIncrement: false,
      anchorId: 'mobile',
      description: {
        cls: 'rg-left-description',
        title: 'Mobile',
        subtitle: 'Mobile Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros erat, egestas sed blandit vel, pretium ac mauris. Curabitur lobortis venenatis purus, nec congue libero mollis at. Pellentesque quis adipiscing diam, in porttitor velit. Quisque in sollicitudin augue, adipiscing faucibus tellus. Sed lobortis tincidunt ligula porttitor condimentum. Aliquam blandit ligula orci, a blandit mauris laoreet id. Maecenas gravida venenatis mauris, at commodo mi volutpat et. Donec a turpis molestie, faucibus tellus sed, malesuada quam.'
      },
      slides: [
        { label: 'input', path: 'assets/img/mobile/iphone-input.png', active: true, offset: 75 },
        { label: 'keyboard', path: 'assets/img/mobile/iphone-keyboard.png', offset: 75 },
        { label: 'view', path: 'assets/img/mobile/iphone-view.png', offset: 75 }
      ]
    };

    /**
     * desktop
     */
    $scope.desktop = {
      autoIncrement: false,
      anchorId: 'desktop',
      description: {
        cls: 'rg-right-description',
        title: 'Desktop',
        subtitle: 'Desktop Design',
        text: 'Curabitur et ipsum sit amet est sodales bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dapibus nunc quis mi rhoncus congue. Nullam sed arcu sit amet augue laoreet pulvinar. Pellentesque euismod euismod faucibus. Morbi lorem elit, gravida nec feugiat sit amet, molestie sit amet lectus. Suspendisse egestas diam nec sem accumsan, sed cursus risus ultrices. Vestibulum a ipsum vitae sapien consectetur dictum id eu nisl. Nullam luctus velit sit amet diam blandit, ut adipiscing mi tincidunt. Ut risus elit, semper non varius vitae, tempus eget nisl.'
      },
      slides: [
        { label: 'blue', path: 'assets/img/desktop/imac-blue.png', active: true, offset: 21 },
        { label: 'green', path: 'assets/img/desktop/imac-green.png', offset: 21 },
        { label: 'purple', path: 'assets/img/desktop/imac-purple.png', offset: 21 }
      ]
    };

    /**
     * design
     */
    $scope.design = {
      autoIncrement: false,
      anchorId: 'design',
      description: {
        cls: 'rg-left-description',
        title: 'Design',
        subtitle: 'Design Design',
        text: 'Curabitur et ipsum sit amet est sodales bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dapibus nunc quis mi rhoncus congue. Nullam sed arcu sit amet augue laoreet pulvinar. Pellentesque euismod euismod faucibus. Morbi lorem elit, gravida nec feugiat sit amet, molestie sit amet lectus. Suspendisse egestas diam nec sem accumsan, sed cursus risus ultrices. Vestibulum a ipsum vitae sapien consectetur dictum id eu nisl.'
      },
      slides: [
        { label: 'blue', path: 'assets/img/desktop/imac-blue.png', active: true, offset: 20 },
        { label: 'green', path: 'assets/img/desktop/imac-green.png', offset: 20 },
        { label: 'purple', path: 'assets/img/desktop/imac-purple.png', offset: 20 }
      ]
    }
  });