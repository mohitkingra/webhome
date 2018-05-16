function initOpenMap(){

  //---------------ROUTE ANIMATION---------------//

var locations = [[59.941, 30.327], [55.753, 37.619], [56.837, 60.606], [55.018, 82.957], [52.316, 104.253], [47.983, 106.897], [39.904, 116.386], [22.548, 114.046]];

locations.map(function(l) {
  return l.reverse();
});

var route = new ol.geom.LineString(locations)
    .transform('EPSG:4326', 'EPSG:3857');

var routeCoords = route.getCoordinates();
var routeLength = routeCoords.length;

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
  geometry: new ol.geom.Point(routeCoords[routeLength - 1])
});

var styles = {
  'route': new ol.style.Style({
    stroke: new ol.style.Stroke({
      width: 6,
      color: 'lightgrey'
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

var animating = false;
var now;
var startButton = document.getElementById('trans-mongolian');

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

/////

  var aelement = document.getElementById('popbanner');
  var bannerpos0 = ol.proj.fromLonLat([75.2253, 72.00]);
  var bannerpos1 = ol.proj.fromLonLat([35.2253, 66.41]);

  var popbanner = new ol.Overlay({
    element: aelement,
    positioning: 'center-center',
    stopEvent: false,
  });

  var markers = [];
  
  var element = document.getElementById('popup');

  var popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50]
  });

    for (var i = 0; i < travelsOSM.length; i++) {
      markers.push(new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat([travelsOSM[i][2],travelsOSM[i][1]])), name: travelsOSM[i][0]}));
    
    if(i>=0 && i<49)
      markers[i].setStyle(iconStyleIndia);
	  else if(i>=49 && i<52)
      markers[i].setStyle(iconStyleBhutan);
	  else if(i>=52 && i<55)
      markers[i].setStyle(iconStyleSpain);
	  else if(i===55)
      markers[i].setStyle(iconStyleFrance);
	  else if(i>=56 && i<59)
      markers[i].setStyle(iconStyleKorea);
	  else if(i>=59 && i<63)
      markers[i].setStyle(iconStyleThailand);
	  else if(i>=63 && i<68)
      markers[i].setStyle(iconStyleKenya);
	  else if(i>=68 && i<74)
      markers[i].setStyle(iconStyleTanzania);
	  else if(i>=74 && i<76)
      markers[i].setStyle(iconStyleMalawi);
	  else if(i>=76 && i<78)
      markers[i].setStyle(iconStyleMozambique);
	  else if(i>=78 && i<86)
      markers[i].setStyle(iconStyleNepal);
	  else if(i>=86 && i<96)
      markers[i].setStyle(iconStyleChina);
	  else if(i===96)
      markers[i].setStyle(iconStyleHongKong);
	  else if(i>96 && i<100)
      markers[i].setStyle(iconStyleTibet);
	  else if(i>=100 && i<107)
      markers[i].setStyle(iconStyleRussia);
	  else if(i>=107 && i<109)
      markers[i].setStyle(iconStyleMongolia);
	  else if(i>=109 && i<=112)
      markers[i].setStyle(iconStyleCambodia);
  }

  var vectorSource = new ol.source.Vector();
  vectorSource.addFeatures(markers);

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });

  var openMap = new ol.Map({
        layers: [ 
          new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor'})
          }), vectorLayer, vectorLayerN
        ],
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: {
            collapsible: false
          }
        }),
        view: new ol.View({
          center: ol.proj.fromLonLat([35.2253, 31.7772]),
          zoom: 2,
          minZoom: 2
        }),
        interactions: ol.interaction.defaults({
          mouseWheelZoom:false
        })
  });


  openMap.addOverlay(popbanner);
  openMap.addOverlay(popup);
  
  popbanner.setPosition(bannerpos0);

  $(aelement).popover({
    'placement': 'top',
    'html': true,
    'content': "This is an interactive map of the places I have been"
  });

  $(aelement).popover('show');
  
  var displayFeatureInfo = function(pixel) {

    var feature = openMap.forEachFeatureAtPixel(pixel, function(feature, layer) {
      return feature;
    });

    if(feature){
        var coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);

        $(element).popover({
          'placement': 'top',
          'html': true,
          'content': feature.get('name')
        });

        $(element).popover('show');
      } 
      else {
        $(element).popover('destroy');
      }
  };

  openMap.getView().on('change:resolution', function(evt) {
      
    popbanner.setPosition(bannerpos1);

    $(aelement).popover({
      'placement': 'top',
      'html': true,
      'content': "This is an interactive map of the places I have been"
    });

     if(openMap.getView().getZoom()<=2)
        $(aelement).popover('show');
      else
        $(aelement).popover('destroy');

  });

  openMap.on('pointermove', function(evt) {
   
    $(element).popover('destroy');

  });

  openMap.on('click', function(evt) {
    displayFeatureInfo(evt.pixel);
  }); 
/*
openMap.getView().fit(
    vectorLayerN.getSource().getExtent(), openMap.getSize(),{
      padding: [30, 5, 5, 5]
    });
*/
var moveFeature = function(event) {
  var vectorContext = event.vectorContext;
  var frameState = event.frameState;

  if (animating) {
    var elapsedTime = frameState.time - now;
    var index = Math.round(1 * elapsedTime / 1000);

    if (index >= routeLength) {
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

function startAnimation() {
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

function stopAnimation(ended) {
  animating = false;

  // if animation cancelled set the marker at the beginning
  var coord = ended ? routeCoords[routeLength - 1] : routeCoords[0];
  
  (geoMarker.getGeometry())
  .setCoordinates(coord);
  //remove listener
  openMap.un('postcompose', moveFeature);
}

startButton.addEventListener('click', startAnimation, false);

}
