var searchBar = {
    //bindings: {
    //  party: '<'
    //},
    templateUrl: './search-bar.html',
    controller: 'SearchBarController',  
};
  
angular
    .module('view-parties')
    .component('searchBar', searchBar)