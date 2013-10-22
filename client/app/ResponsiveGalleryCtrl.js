angular.module('responsive-gallery')

  .controller('ResponsiveGalleryCtrl', function($scope) {
    $scope.mobile = {
      autoIncrement: false,
      description: {
        cls: 'rg-left-description',
        title: 'Mobile',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros erat, egestas sed blandit vel, pretium ac mauris. Curabitur lobortis venenatis purus, nec congue libero mollis at. Pellentesque quis adipiscing diam, in porttitor velit. Quisque in sollicitudin augue, adipiscing faucibus tellus. Sed lobortis tincidunt ligula porttitor condimentum. Aliquam blandit ligula orci, a blandit mauris laoreet id. Maecenas gravida venenatis mauris, at commodo mi volutpat et. Donec a turpis molestie, faucibus tellus sed, malesuada quam. Donec est dui, accumsan aliquam auctor ut, tincidunt eget orci. Donec ut ante semper, iaculis nunc non, dignissim justo. Nulla vel nulla dolor.'
      },
      slides: [
        { label: 'input', path: 'assets/img/mobile/iphone-input.png', active: true, offset: 75 },
        { label: 'keyboard', path: 'assets/img/mobile/iphone-keyboard.png', offset: 75 },
        { label: 'view', path: 'assets/img/mobile/iphone-view.png', offset: 75 }
      ]
    };

    $scope.desktop = {
      autoIncrement: false,
      description: {
        cls: 'rg-right-description',
        title: 'Desktop',
        text: 'Curabitur et ipsum sit amet est sodales bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin dapibus nunc quis mi rhoncus congue. Nullam sed arcu sit amet augue laoreet pulvinar. Pellentesque euismod euismod faucibus. Morbi lorem elit, gravida nec feugiat sit amet, molestie sit amet lectus. Suspendisse egestas diam nec sem accumsan, sed cursus risus ultrices. Vestibulum a ipsum vitae sapien consectetur dictum id eu nisl. Nullam luctus velit sit amet diam blandit, ut adipiscing mi tincidunt. Ut risus elit, semper non varius vitae, tempus eget nisl. Curabitur ac diam nulla. Praesent vel posuere urna, eu semper dolor. Aliquam erat volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent feugiat dolor id enim varius viverra vel sed augue. Nulla sed odio pellentesque diam elementum consequat.'
      },
      slides: [
        { label: 'blue', path: 'assets/img/desktop/imac-blue.png', active: true },
        { label: 'green', path: 'assets/img/desktop/imac-green.png' },
        { label: 'purple', path: 'assets/img/desktop/imac-purple.png' }
      ]
    };

  });