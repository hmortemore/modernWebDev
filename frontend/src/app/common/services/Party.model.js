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
      'maxCapacity',
      'description'
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

  getAll() {
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

  addParty(newName, newOpenToPublic, newDate, newTime, newEntryFee, newLocation, newMaxCapacity, newDescription){
    const Party = Parse.Object.extend("Party");
    const newParty = new Party();
    //var newHost = new this.Parse.User; // Delete once auth work is done
    //newHost.setUsername("Test User"); // Delete once auth work is done
    //newHost.setPassword("test pass"); // Delete once auth work is done
    newParty.set('host', this.Parse.User.current()); // Change newHost to this.Parse.User.current() after authentication work is done
    newParty.set('name', newName);
    newParty.set('openToPublic', newOpenToPublic);
    newParty.set('time', newTime)
    newParty.set('date', newDate);
    newParty.set('entryFee', newEntryFee);
    newParty.set('location', newLocation);
    newParty.set('maxCapacity', newMaxCapacity);
    newParty.set('description', newDescription);
    newParty.save()
      .then(result => {
        return Promise.resolve(result);
      })
      .catch(error => Promise.reject(error));
  }
}

angular
  .module('common')
  .service('PartyModel', PartyModel);
