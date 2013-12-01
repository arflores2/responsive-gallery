angular.module('responsive-gallery')

  .controller('ResponsiveGalleryCtrl', function($scope) {
    /**
     * mobile
     */
    $scope.party = {
      autoIncrement: false,
      anchorId: 'party',
      description: {
        cls: 'rg-left-description',
        title: 'Local',
        subtitle: 'Mobile Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/partyplanner/local-1.jpg', active: true, offset: 75 },
        { label: 'keyboard', path: 'assets/img/partyplanner/local-2.jpg', offset: 75 },
        { label: 'view', path: 'assets/img/partyplanner/local-3.jpg', offset: 75 },
        { label: 'view', path: 'assets/img/partyplanner/local-4.jpg', offset: 75 },
        { label: 'view', path: 'assets/img/partyplanner/local-5.jpg', offset: 75 }
      ]
    };

    /**
     * desktop
     */
    $scope.grado = {
      autoIncrement: false,
      anchorId: 'grado',
      description: {
        cls: 'rg-right-description',
        title: 'Grado',
        subtitle: 'Website Design',
        text: ''
      },
      slides: [
        { label: 'blue', path: 'assets/img/grado/Grado1.jpg', active: true, offset: 21 },
        { label: 'green', path: 'assets/img/grado/Grado2.jpg', offset: 21 },
      ]
    };

    /**
     * design
     */
    $scope.jdeis = {
      autoIncrement: false,
      anchorId: 'jdeis',
      description: {
        cls: 'rg-left-description',
        title: 'JDEIS Encyclopedia',
        subtitle: 'User Interface Design',
        text: ''
      },
      slides: [
        { label: 'blue', path: 'assets/img/jdeis/jdeis_1.jpg', active: true, offset: 20 },
        { label: 'green', path: 'assets/img/jdeis/jdeis_2.jpg', offset: 20 },
        { label: 'purple', path: 'assets/img/jdeis/jdeis_3.jpg', offset: 20 },
        { label: 'purple', path: 'assets/img/jdeis/jdeis_4.jpg', offset: 20 }
      ]
    };
	

    /**
     * design
     */
    $scope.cloudshare = {
      autoIncrement: false,
      anchorId: 'cloudshare',
      description: {
        cls: 'rg-right-description',
        title: 'Cloudshare',
        subtitle: 'User Interface Design',
        text: ''
      },
      slides: [
        { label: 'blue', path: 'assets/img/cloudshare/CloudShare_1.jpg', active: true, offset: 20 },
        { label: 'green', path: 'assets/img/cloudshare/CloudShare_2.jpg', offset: 20 },
        { label: 'purple', path: 'assets/img/cloudshare/CloudShare_3.jpg', offset: 20 },
        { label: 'purple', path: 'assets/img/cloudshare/CloudShare_4.jpg', offset: 20 }
      ]
    };
	$scope.ZapfFrutiger = {
      autoIncrement: false,
      anchorId: 'ZapfFrutiger',
      description: {
        cls: 'rg-left-description',
        title: 'Zapf vs Frutiger',
        subtitle: 'Print Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/ZapfFrutiger/typeBook_spread_1.jpg', active: true, offset: 75 },
        { label: 'keyboard', path: 'assets/img/ZapfFrutiger/typeBook_spread_2.jpg', offset: 75 },
        { label: 'view', path: 'assets/img/ZapfFrutiger/typeBook_spread_3.jpg', offset: 75 }
      ]
    };
	$scope.typeposter = {
      autoIncrement: false,
      anchorId: 'typeposter',
      description: {
        cls: 'rg-right-description',
        title: 'Leader of the Pack',
        subtitle: 'Poster Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/typeposter/typePoster_1.jpg', active: true, offset: 75 }
      ]
    };
	$scope.calendar = {
      autoIncrement: false,
      anchorId: 'calendar',
      description: {
        cls: 'rg-left-description',
        title: 'Calendar',
        subtitle: 'Print Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/calendar/calendar_1.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/calendar/calendar_2.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/calendar/calendar_3.jpg', active: true, offset: 75 }
      ]
    };
	$scope.docnet = {
      autoIncrement: false,
      anchorId: 'docnet',
      description: {
        cls: 'rg-right-description',
        title: 'Docnet Training',
        subtitle: 'Interactive Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/docnet/docnet_1.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/docnet/docnet_2.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/docnet/docnet_3.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/docnet/docnet_4.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/docnet/docnet_5.jpg', active: true, offset: 75 }
      ]
    };
	$scope.sevenevents = {
      autoIncrement: false,
      anchorId: 'sevenevents',
      description: {
        cls: 'rg-left-description',
        title: 'Seven Events',
        subtitle: 'Print Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/sevenevents/sevenevents_1.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/sevenevents/sevenevents_2.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/sevenevents/sevenevents_3.jpg', active: true, offset: 75 }
      ]
    };
	$scope.brianne = {
      autoIncrement: false,
      anchorId: 'brianne',
      description: {
        cls: 'rg-right-description',
        title: 'Political Website',
        subtitle: 'Web Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/brianne/brianne_1.jpg', active: true, offset: 75 },
		{ label: 'input', path: 'assets/img/brianne/brianne_2.jpg', active: true, offset: 75 }
      ]
    };
	$scope.flutePoster = {
      autoIncrement: false,
      anchorId: 'flutePoster',
      description: {
        cls: 'rg-right-description',
        title: 'Holiday Concert',
        subtitle: 'Poster Design',
        text: ''
      },
      slides: [
        { label: 'input', path: 'assets/img/flutePoster/flutePoster_1.png', active: true, offset: 75 }
      ]
    };


  });