function AppController(AuthService, $state) {
  var ctrl = this;
  ctrl.user = AuthService.getUser();
  console.log(ctrl.user);

  //console.log(AuthService);
  //if (Parse.User.current()){
  //  console.log('logged in');
  //} else {
  //  console.log('not logged in');
  //}
}

angular
  .module('common')
  .controller('AppController', AppController);
