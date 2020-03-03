var partiesList = {
  templateUrl: './parties-list.html',
  controller: 'PartiesListController',  
};

angular
  .module('view-parties')
  .component('partiesList', partiesList)
  .config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('parties-list', {
        url: '/parties-list',
        component: 'partiesList',
        parent: 'app'
      });
  });