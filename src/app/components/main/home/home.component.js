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
        redirectTo: 'main.home',
        url: '/main',
        template: '<div ui-view></div>'
      })
      .state('main.home', {
        url: '/home',
        component: 'home'
      });
    $urlRouterProvider.otherwise('/main/home');
  });