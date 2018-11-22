var animating = false;

function initRoutes(locations) {

var route = new ol.geom.LineString(locations)
    .transform('EPSG:4326', 'EPSG:3857');

var routeCoords = route.getCoordinates();

var routeFeature = new ol.Feature({
  type: 'route',
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
  'route': new ol.style.Style({
          stroke: new ol.style.Stroke({
            width: 6, color: [225, 229, 204, 0.8]
          })
  }),
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

    //hide route if not animating
    if(!animating && feature.get('type') === 'route') {
      return null;
    }

    // hide geoMarker if animation is active
    if (animating && feature.get('type') === 'geoMarker') {
      return null;
    }

    return styles[feature.get('type')];
  },
  visible: false
});

return [geoMarker, routeCoords, styles, vectorLayerN];

}

function animateRoutes(id, center, routeData, openMap) {

var now;
var startButton = document.getElementById(id);

var moveFeature = function(event) {
  var vectorContext = event.vectorContext;
  var frameState = event.frameState;

  if (animating) {

    openMap.getView().setCenter(center);
 
    if(id === 'trans-mongolian')
      openMap.getView().setZoom(3);
    else if(id === 'tibet-railway')
      openMap.getView().setZoom(4);
    else if(id === 'everest-basecamp') 
      openMap.getView().setZoom(10);
    else if(id === 'himachal') 
      openMap.getView().setZoom(9);
    else if(id === 'leh-ladakh') 
      openMap.getView().setZoom(6);
    else if(id === 'rajasthan') 
      openMap.getView().setZoom(6);
    else if(id === 'northkenya') 
      openMap.getView().setZoom(6);
    else if(id === 'pangani') 
      openMap.getView().setZoom(6);
    else if(id === 'malawi') 
      openMap.getView().setZoom(5);
    else if(id === 'yunnan') 
      openMap.getView().setZoom(5);
    else if(id === 'cambodia') 
      openMap.getView().setZoom(6);
    else if(id === 'thegreatoceanroad') 
      openMap.getView().setZoom(7);
    
    var elapsedTime = frameState.time - now;
    var index = Math.round(1 * elapsedTime / 1000);

    if (index >= routeData[1].length) {
      stopAnimation(true);
      return;
    }

    var currentPoint = new ol.geom.Point(routeData[1][index]);
    var feature = new ol.Feature(currentPoint);
    vectorContext.drawFeature(feature, routeData[2].geoMarker);
  }
  // tell OL3 to continue the postcompose animation
  openMap.render();
};


var startAnimation = function() {
  if (animating) {
    stopAnimation(false);
  } else {
    animating = true;
    routeData[3].setVisible(true);
    now = new Date().getTime();
    // hide geoMarker
    routeData[0].setStyle(null);
    // just in case you pan somewhere else
    openMap.on('postcompose', moveFeature);
    openMap.render();
  }
}

var stopAnimation = function(ended) {
  animating = false;
  routeData[3].setVisible(false);

  // if animation cancelled set the marker at the beginning
  var coord = ended ? routeData[1][routeData[1].length - 1] : routeData[1];
  
  (routeData[0].getGeometry())
  .setCoordinates(coord);
  //remove listener
  openMap.un('postcompose', moveFeature);
}

startButton.addEventListener('click', startAnimation, false);
}
