function AuthService(Parse) {
  var authData = null;
  
  this.register = function (user) {
    var newUser = new Parse.User();
    newUser.set("username", user.username);
    //newUser.set("email", user.email);
    newUser.set("password", user.password);
    return newUser
      .signUp()
      .then(function (response) {
        authData = response;
        return authData;
      });
  };

  this.login = function(user) {
    return Parse.User
      .logIn(user.username, user.password)
      .then(function (response) {
        authData = response;
        return authData;
      });
  };

  this.logout = function(){
    return Parse.User
      .logOut()
      .then(function(){
        authData = null;
        return authData;
      });
  };

  this.requireAuthentication = function(){
    return Parse.User
      .currentAsync()
      .then(function(user){
        authData = user;
        return authData;
    });
  };

  this.isAuthenticated = function(){
    return !!authData;
  };

  this.getUser = function(){
    if (authData){
      return authData;
    }
  };
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
