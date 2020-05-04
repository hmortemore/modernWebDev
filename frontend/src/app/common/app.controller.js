function AppController(AuthService, $state) {
  var ctrl = this;
  ctrl.user = AuthService.getUser();
  console.log(ctrl.user.username);
  ctrl.logout = function(){
    console.log('logging out now');
    AuthService.logout().then(function(){
      $state.go('auth.login');
    });
  };
}

angular
  .module('common')
  .controller('AppController', AppController);
