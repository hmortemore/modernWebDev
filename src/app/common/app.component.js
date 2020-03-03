var app = {
  templateUrl: './app.html',
  controller: 'AppController'
};

angular
  .module('common')
  .component('app', app)
  .config(function ($stateProvider, $locationProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        data: {
          requiredAuth: true
        },
        component: 'app'
      });
    $locationProvider.hashPrefix('');
  });
