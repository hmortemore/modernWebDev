function PartyNewController(PartyModel, $scope) {
  var ctrl = this;

  this.openConfirmationWindow = () => {
    document.getElementsByClassName('party-submitted')[0].classList.remove('hidden');
    document.getElementsByClassName('new-party-page-mask')[0].classList.remove('hidden');
  }

  this.submitParty = () => {
    console.log($scope.name);
    console.log($scope.description);
    console.log($scope.date);
    console.log($scope.time);
    console.log($scope.location);
    console.log($scope.entryFee);
    console.log($scope.maxCapacity);
    PartyModel.addParty($scope.name, $scope.openToPublic, $scope.date, $scope.time, $scope.entryFee, $scope.location, $scope.maxCapacity, $scope.description);
    this.openConfirmationWindow();
  }
}

angular
  .module('plan-party')
  .controller('PartyNewController', PartyNewController);