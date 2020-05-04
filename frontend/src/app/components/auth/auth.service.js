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
      })
  };

  this.login = function(user) {
    return Parse.User
      .logIn(user.username, user.password)
      .then(function (response) {
        authData = response;
        return authData;
      })
  };
  
}

angular
  .module('components.auth')
  .service('AuthService', AuthService);