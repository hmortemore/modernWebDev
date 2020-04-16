function PartyService($http){
  return {
    getParties: function () {
      return $http.get('../json/database.json');
    }
  };
}

angular
  .module('view-parties')
  .service('PartyService', PartyService);