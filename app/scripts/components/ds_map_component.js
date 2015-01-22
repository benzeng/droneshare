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
    L.mapbox.accessToken = Droneshare.config.mapbox.accessToken;
    self.map = L.mapbox.map(self.get('customId'), Droneshare.config.mapbox.defaultLayer.map, {
      trackResize: true,
      center: [0, 0],
      layers: (function(self, layers){
        return layers.map(function(layer) {
          return self.createLayer(layer.map, layer.name, (layer.attribution ? layer.attribution : false))
        });
      }(self, Droneshare.config.mapbox.layers))
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
