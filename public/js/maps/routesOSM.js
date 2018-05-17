var animating = false;

function initRoutes(locations) {

var route = new ol.geom.LineString(locations)
    .transform('EPSG:4326', 'EPSG:3857');

var routeCoords = route.getCoordinates();

var routeFeature = new ol.Feature({
  geometry: route
});

var geoMarker = new ol.Feature({
  type: 'geoMarker',
  geometry: new ol.geom.Point(routeCoords[0])
});

var startMarker = new ol.Feature({
  geometry: new ol.geom.Point(routeCoords[0])
});

var endMarker = new ol.Feature({
  geometry: new ol.geom.Point(routeCoords[routeCoords.length - 1])
});

var styles = {
  'geoMarker': new ol.style.Style({
    image: new ol.style.Circle({
      radius: 7,
      snapToPixel: false,
      fill: new ol.style.Fill({
        color: 'green'
      }),
      stroke: new ol.style.Stroke({
        color: 'white',
        width: 2
      })
    })
  })
};

var vectorLayerN = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [routeFeature, geoMarker, startMarker, endMarker]
  }),
  style: function(feature) {
    // hide geoMarker if animation is active
    if (animating && feature.get('type') === 'geoMarker') {
      return null;
    }
    return styles[feature.get('type')];
  }
});

return [geoMarker, routeCoords, styles, vectorLayerN];

}

function animateRoutes(id, center, geoMarker,routeCoords, styles, openMap) {

var now;
var startButton = document.getElementById(id);

var moveFeature = function(event) {
  var vectorContext = event.vectorContext;
  var frameState = event.frameState;

  if (animating) {

    openMap.getView().setCenter(center);
    openMap.getView().setZoom(3);

    var elapsedTime = frameState.time - now;
    var index = Math.round(1 * elapsedTime / 1000);

    if (index >= routeCoords.length) {
      stopAnimation(true);
      return;
    }

    var currentPoint = new ol.geom.Point(routeCoords[index]);
    var feature = new ol.Feature(currentPoint);
    vectorContext.drawFeature(feature, styles.geoMarker);
  }
  // tell OL3 to continue the postcompose animation
  openMap.render();
};


var startAnimation = function() {
  if (animating) {
    stopAnimation(false);
  } else {
    animating = true;
    now = new Date().getTime();
    // hide geoMarker
    geoMarker.setStyle(null);
    // just in case you pan somewhere else
    openMap.on('postcompose', moveFeature);
    openMap.render();
  }
}

var stopAnimation = function(ended) {
  animating = false;

  // if animation cancelled set the marker at the beginning
  var coord = ended ? routeCoords[routeCoords.length - 1] : routeCoords[0];
  
  (geoMarker.getGeometry())
  .setCoordinates(coord);
  //remove listener
  openMap.un('postcompose', moveFeature);
}

startButton.addEventListener('click', startAnimation, false);
}