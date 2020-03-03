function PartiesListController(PartyService) {
  var ctrl = this;
  ctrl.parties = [
    {
      "id": 1,
      "name": "Computer Science Faculty Party",
      "description": "Fun times with students and all ND computer science faculty", 
      "time": "11:00 PM",  
      "date": "2/10/2020", 
      "address": "123 Main St."
    },
    {
        "id": 2, 
        "name": "Must be 5 chars",
        "description": "12345", 
        "time": "9:00 PM", 
        "date": "2/10/2020", 
        "address": "123 Main St."
    },
    {
        "id": 3, 
        "name": "Shrek Party",
        "description": "Shrek", 
        "time": "9:00 PM", 
        "date": "2/10/2020", 
        "address": "123 Main St."
    },
    {
        "id": 4, 
        "name": "Jenkins' Lit B-Day Bash",
        "description": "Help ya boi Fr. Jenkins celebrate his B-Day in style", 
        "time": "3:00 PM", 
        "date": "2/10/2020", 
        "address": "123 Main St." 
    }
  ]
  /* ctrl.parties = PartyService.getParties().then(function (result) {
    console.log('works');
    console.log(result.data);
    ctrl.parties = result.data
  })
  .catch(function (data, status) {
      console.log(data);
  }); */
}

angular
  .module('view-parties')
  .controller('PartiesListController', PartiesListController);