angular
	.module('components.auth', [
	'ui.router',
	'ngParse'
  ])
  .run(function ($transitions, $state, AuthService){
    $transitions.onStart({
      to: function(state){
        return !!(state.data && state.data.requiredAuth);
      }
    }, function(){
      //AuthService.requireAuthentication();
      return AuthService
        .requireAuthentication()
        .then(function(result){
          if (!result) return $state.target('auth.login');
         })
        .catch(function(){
          console.log('you need to authenticate');
          return $state.target('auth.login');
        });
    });
    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()){
        console.log('you are authenticated');
        return $state.target('app');
      }
    });
  });
