var home = {
  templateUrl: './home.html',
  controller: 'HomeController'
};

angular
  .module('components.home')
  .component('home', home)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
    $urlRouterProvider.otherwise('/');
  });