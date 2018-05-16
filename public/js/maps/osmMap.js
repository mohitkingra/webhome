function initOpenMap(){

  var routeDataM = initRoutes(locationsM);

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
          }), vectorLayer, routeDataM[3]/*, routeDataT[3], routeDataY[3], routeDataE[3], routeDataA[3], routeDataH[3], routeDataL[3], routeDataR[3]*/
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


  var centerM = new ol.proj.fromLonLat([45.95, 45.39]);

  animateRoutes('trans-mongolian', centerM, routeDataM[0], routeDataM[1], routeDataM[2], openMap);

}
