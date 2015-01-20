Droneshare.DsMapComponent = Ember.Component.extend({
  customId: 'map-component',
  markers: [],
  missions: [],
  map: {},

  didInsertElement: function() {
    var self = this;
    $(window).bind('resize', function(event) {
      self.resizeMapHandler();
    });
    self.resizeMapHandler();
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2V2aW4zZHIiLCJhIjoiS1ROb2prbyJ9._ogWCCC5oVi9wqlJNduQQw';
    self.map = L.mapbox.map(self.get('customId'), 'kevin3dr.hokdl9ko', {
      trackResize: true,
      center: [0, 0],
      layers: [
        self.createLayer("kevin3dr.io0162i9", "Satellite", false),
        self.createLayer("mslee.h1kk2o6r", "Restricted Zones", '<a href="http://openstreetmap.org">NPS</a>, <a href="https://explore.data.gov/National-Security-and-Veterans-Affairs/Military-Installations-Ranges-and-Training-Areas/wcc7-57p3">US Military Data</a>')
      ]
    }).setView([0, 0], 2);
    self.get('missions').forEach(function(item) {
      self.markers.push(self.createMarker(item));
    });
  },
  createLayer: function(key, attribution) {
    if (attribution == false) {
      attribution = '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>';
    }
    return L.tileLayer('https://a.tiles.mapbox.com/v3/' + key + '/{z}/{x}/{y}.png', {
      attribution: attribution,
      detectRetina: true
    });
  },
  resizeMapHandler: function() {
    $('#map-component').css({
      height: parseInt(window.innerHeight, 10) + "px"
    });
  },
  createMarker: function(data) {
    var markerPopup = "<div class='clearfix map-info-popup'><a href='/user/" + data.get('userName') + "'>" + data.get('userName') + "</a><br><a href='/mission/" + data.get('id') + "'>" + data.get('summaryText') + "</a><br></div>";
    var coordinates = L.latLng(data.get('latitude'), data.get('longitude'));
    var iconAvatar = this.getAvatarUrl(data);
    var options = {
      focus: false,
      draggable: false,
      icon: L.icon({
        iconUrl: iconAvatar + ".png",
        iconRetinaUrl: iconAvatar + "@x2.png",
        iconSize: [36, 51],
        iconAnchor: [18, 25.5],
        popupAnchor: [0, -18]
      })
    };
    return L.marker(coordinates, options).bindPopup(markerPopup).addTo(this.map);
  },
  getAvatarUrl: function(data) {
    if (data.isLive === true) {
      return '/images/marker-active';
    }
    return '/images/marker';
  }
});
