var places = require('places.js');
var placesAutocomplete = places({
  appId: 'pl4TRIIAJFA1',
  apiKey: '959339ddd5da57ac40f40d81051bb8b5',
  container: document.querySelector('#address-input')
});

// const options = {
//   appId: 'pl4TRIIAJFA1',
//   apiKey: '959339ddd5da57ac40f40d81051bb8b5',
//   container: '#my-input-DOM-selector',
//   // ...
// };
// places(options);