var Droneshare = window.Droneshare = Ember.Application.create();
Droneshare.config = {
  api: {
    namespace: 'api/v1',
    host: 'http://api.droneshare.com',
    headers: {
      "Authorization": 'DroneApi apikey="a8948c11.9e44351f6c0aa7e3e2ff6d00b14a71c5"'
    }
  },
  mapbox: {
    accessToken: 'pk.eyJ1Ijoia2V2aW4zZHIiLCJhIjoiS1ROb2prbyJ9._ogWCCC5oVi9wqlJNduQQw',
    defaultLayer: {
      map: 'kevin3dr.hokdl9ko',
      name: 'General',
      attribution: null
    },
    layers: [{
      map: 'kevin3dr.io0162i9',
      name: 'Satellite',
      attribution: null
    },
    {
      map: 'mslee.h1kk2o6r',
      name: 'Restricted Zones',
      attribution: '<a href="http://openstreetmap.org">NPS</a>, <a href="https://explore.data.gov/National-Security-and-Veterans-Affairs/Military-Installations-Ranges-and-Training-Areas/wcc7-57p3">US Military Data</a>'
    }]
  }
};

window.ENV = window.ENV || [];
window.ENV['simple-auth'] = {
  store: 'simple-auth-session-store:local-storage'
  //authorizer: 'simple-auth-authorizer:oauth2-bearer'
}

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
