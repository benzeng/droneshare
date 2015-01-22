var Droneshare = window.Droneshare = Ember.Application.create();
Droneshare.config = {
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

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
