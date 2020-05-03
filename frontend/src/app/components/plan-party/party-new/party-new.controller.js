function PartyNewController(PartyModel, $scope) {
  var ctrl = this;

  this.submitParty = () => {
    console.log($scope.name);
    console.log($scope.description);
    console.log($scope.date);
    console.log($scope.time);
    console.log($scope.location);
    console.log($scope.entryFee);
    console.log($scope.maxCapacity);
    PartyModel.addParty($scope.name, $scope.openToPublic, $scope.date, $scope.entryFee, $scope.location, $scope.maxCapacity, $scope.description);
  }
}

angular
  .module('plan-party')
  .controller('PartyNewController', PartyNewController);