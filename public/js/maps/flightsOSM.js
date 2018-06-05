var pointsPerMs = 0.1;
var animating = false;
var flightsSource;
   var style = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#EAE911',
          width: 2
        })
      });

      var addLater = function(feature, timeout) {
        window.setTimeout(function() {
          feature.set('start', new Date().getTime());
          flightsSource.addFeature(feature);
        }, timeout);
      };

function initFlights() {
      flightsSource = new ol.source.Vector({
        wrapX: false,
        loader: function() {
          for (var i = 0; i < flightsData.length; i++) {
              var flight = flightsData[i];
              var from = flight[0];
              var to = flight[1];

              // create an arc circle between the two locations
              var arcGenerator = new arc.GreatCircle(
                  {x: from[1], y: from[0]},
                  {x: to[1], y: to[0]});

              var arcLine = arcGenerator.Arc(100, {offset: 10});

              if (arcLine.geometries.length === 1) {
                var line = new ol.geom.LineString(arcLine.geometries[0].coords);
                line.transform(ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));

                var feature = new ol.Feature({
                  geometry: line,
                  finished: false
                });
                // add the feature with a delay so that the animation
                // for all features does not start at the same time
                addLater(feature, i * 50);
              }
            }
          }
        });

      var flightsLayer = new ol.layer.Vector({
        source: flightsSource,
        style: function(feature) {
          // if the animation is still active for a feature, do not
          // render the feature with the layer style

          if(!animating)
            return null;

          if (feature.get('finished')) {
            return style;
          } else {
            return null;
          }
        }
      });

    return [flightsSource, flightsLayer];
}

function animateFlights(id, flightsData, openMap) {

  var startButton = document.getElementById(id);

  var renderFlights = function(event) {

        var vectorContext = event.vectorContext;
        var frameState = event.frameState;
        vectorContext.setStyle(style);

        var features = flightsData[0].getFeatures();
        for (var i = 0; i < features.length; i++) {
          var feature = features[i];
          if (!feature.get('finished')) {
            // only draw the lines for which the animation has not finished yet
            var coords = feature.getGeometry().getCoordinates();
            var elapsedTime = frameState.time - feature.get('start');
            var elapsedPoints = elapsedTime * pointsPerMs;

            if (elapsedPoints >= coords.length) {
              feature.set('finished', true);
            }

            var maxIndex = Math.min(elapsedPoints, coords.length);
            var currentLine = new ol.geom.LineString(coords.slice(0, maxIndex));

            // directly draw the line with the vector context
            vectorContext.drawGeometry(currentLine);
          }
        }
        // tell OpenLayers to continue the animation
        openMap.render();
  };

var startAnimation = function() {

    if(animating) {
      stopAnimation();
    }
    else {
      animating = true;
      flightsData[1].setVisible(true);
      openMap.on('postcompose', renderFlights);
      openMap.render();
    }
}

var stopAnimation = function() {
  animating = false;
  flightsData[1].setVisible(false);
  openMap.un('postcompose', renderFlights);
}

  startButton.addEventListener('click', startAnimation, false);
}