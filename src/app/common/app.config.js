function config(ParseProvider) {
  ParseProvider.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
  ParseProvider.initialize(
    'AyWLr0AiMxNfZruxviI9VEAsZdSGfljMr0IH9U0a',
    'uvQiQObblu7k1l09nuhMSKOtNYQK7IsANEw3vxhW'
  );
}

angular
  .module('common')
  .config(config);
