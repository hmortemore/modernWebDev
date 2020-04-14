class PartyModel {
  constructor(Parse) {
    this.Parse = Parse;
    this.UserModel = Parse.User; //UserModel;
    this.data = {};
    this.collection = [];
    this.name = 'Party';
    this.fields = [
      'host',
      'name',
      'openToPublic',
      'date',
      'entryFee',
      'location',
      'maxCapacity'
    ];
  }

  New(obj) {
    if (angular.isUndefined(obj)) {
      const parseObject = new this.Parse.Object(this.name)
      this.Parse.defineAttributes(parseObject, this.fields);
      parseObject.host = new this.Parse.Object(this.UserModel.name)
      this.Parse.defineAttributes(parseObject.host, this.UserModel.fields);
      return parseObject;
    } else {
      this.Parse.defineAttributes(obj, this.fields);
      this.Parse.defineAttributes(obj.host, this.UserModel.fields);
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

  getAll(){
    let Party = Parse.Object.extend("Party");
    return new this.Parse.Query(this.New())
      .find()
      .then(result => {
        console.log(result);
        this.data = result;
        return Promise.resolve(result);
      })
      .catch(error => Promise.reject(error));
  }

}

angular
  .module('common')
  .service('PartyModel', PartyModel);
