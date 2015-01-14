Droneshare.DsMapComponent = Ember.Component.extend({
  tagName: 'div',
  attributeBindings: ['customId:id'],
  customId: 'map-component',
  initialSource: [],

  didInsertElement: function() {
    var resizeMapHandler = function() {
      $('#map-component').css({
        height: parseInt(window.innerHeight, 10) + "px"
      });
    };
    $(window).bind('resize', function(event) {
      resizeMapHandler();
    });
    resizeMapHandler()
    L.mapbox.accessToken = 'pk.eyJ1IjoibXJwb2xsbyIsImEiOiJtUG0tRk9BIn0.AqAiefUV9fFYRo-w0jFR1Q';
    L.mapbox.map('map-component', 'mrpollo.kfbnjbl0');
    //threedr_default: mbox("kevin3dr.hokdl9ko", "Topographic")
    //threedr_satview: mbox("kevin3dr.io0162i9", "Satellite")
    //airspace_warning: mbox("mslee.h1kk2o6r", "Restricted Zones", '<a href="http://openstreetmap.org">NPS</a>, <a href="https://explore.data.gov/National-Security-and-Veterans-Affairs/Military-Installations-Ranges-and-Training-Areas/wcc7-57p3">US Military Data</a>')
  }
});
