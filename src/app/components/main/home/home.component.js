var home = {
  templateUrl: './home.html',
  controller: 'HomeController'
};

angular
  .module('components.main')
  .component('home', home)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('main', {
        url: '/',
        component: 'home'
      });
    $urlRouterProvider.otherwise('/');
  });