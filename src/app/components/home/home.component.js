var home = {
  templateUrl: './home.html',
  controller: 'HomeController',  
};

angular
  .module('home')
  .component('home', home)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home',
        parent: 'app'
      });
    $urlRouterProvider.otherwise('/app/');
  });