# Responsive Gallery #
 
One Page Demo Gallery in Angular

### Application Stack ######

- [Node.js](http://www.nodejs.org)

- [Express](http://www.expressjs.com/)

- [Jade](http://jade-lang.com/)

- [Angular 1.1.1](http://angularjs.org/)

- [jQuery 1.10.2](jquery.com)

### Static Files ######

There is a static `index.html` file in the `client` directory to run the app on a seperate web server or it can be viewed in a browser.

### Node Dependencies ######

    cd server
    npm install

### Launch ######

    # in server/
    node server.js

### Changing Content #####

You can add/remove/edit slides in `client/app/ResponsiveGalleryCtrl.js`. Notice `$scope.mobile`
corresponds to the mobile section while `$scope.desktop` corresponds to the desktop section.

You can add another section by copying the `<rgsection></rgsection>`. The attribute values
correspond the to $scope.{name} JSON.