class AttendeeModel {
  constructor(Parse) {
    this.Parse = Parse;
    this.UserModel = UserModel;
    this.PartyModel = PartyModel;
    this.data = {};
    this.collection = [];
    this.name = 'Party';
    this.fields = [
      'user',
      'party'
    ];
  }

  New(obj) {
    if (angular.isUndefined(obj)) {
      const parseObject = new this.Parse.Object(this.name)
      this.Parse.defineAttributes(parseObject, this.fields);
      parseObject.user = new this.Parse.Object(this.UserModel.name)
      this.Parse.defineAttributes(parseObject.user, this.UserModel.fields);
      parseObject.party = new this.Parse.Object(this.PartyModel.name)
      this.Parse.defineAttributes(parseObject.party, this.PartyModel.fields);
      return parseObject;
    } else {
      this.Parse.defineAttributes(obj, this.fields);
      this.Parse.defineAttributes(obj.user, this.UserModel.fields);
      this.Parse.defineAttributes(obj.party, this.PartyModel.fields);
      return obj;
    }
}

  getById(id) {
    return new this.Parse.Query(this.New())
      .get(id)
      .then(result => {
          this.Parse.defineAttributes(result, this.fields);
          this.data = result;
          return Promise.resolve(result);
      })
      .catch(error => Promise.reject(error));
  }

}

angular
    .module('common')
    .service('AttendeeModel', AttendeeModel);