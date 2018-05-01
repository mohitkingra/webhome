function initGoogleMap(){

		var markers = [];	
		var infowindow;

		var directionsDisplay;
		var directionsService; 

		var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 2,
				center: homeaGOOG,
				mapTypeId: google.maps.MapTypeId.ROADMAP

			});
			
			var layerAdventure = new google.maps.FusionTablesLayer({
				query: {
					select: 'geometry',
					from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
					where: "ISO_2DIGIT IN ('IN', 'BT', 'NP', 'CN', 'KE', 'TZ', 'MW', 'MZ', 'MN', 'RU', 'TH', 'KH', 'FR', 'ES', 'KR')"
				},
				styles: [{
					where: "ISO_2DIGIT IN ('IN', 'BT', 'NP', 'TH', 'KH')",
					polygonOptions: {
						fillColor: '#008000',
						fillOpacity: 0.3
					}
				}, {
					where: "ISO_2DIGIT IN ('FR', 'ES')",
					polygonOptions: {
						fillColor: '#FFFF00',
						fillOpacity: 0.5
					}
				}, {
					where: "ISO_2DIGIT IN ('CN', 'KR')",
					polygonOptions: {
						fillColor: '#0000FF',
						fillOpacity: 0.3
					}
				}, {
					where: "ISO_2DIGIT IN ('KE', 'TZ', 'MW', 'MZ')",
					polygonOptions: {
						fillColor: '#FFA500',
						fillOpacity: 0.5
					}
				}, {
					where: "ISO_2DIGIT IN ('MN', 'RU')",
					polygonOptions: {
						fillColor: '#FFC0CB',
						fillOpacity: 0.6
					}
				}],
				map: map
			});

			drop();
	
			infowindow = new google.maps.InfoWindow();

		/*
			directionsDisplay = new google.maps.DirectionsRenderer;
			directionsService = new google.maps.DirectionsService;

			directionsDisplay.setMap(map);
	
			map.addListener('zoom_changed', function() {
				var zoom = map.getZoom();
				if(zoom>=5) {
						
					var waypts = [
						{location: {lat: 27.806, lng: 86.704}, stopover:true},
						{location: {lat: 27.835, lng: 86.761}, stopover:true},
						{location: {lat: 27.891, lng: 86.827}, stopover:true},
						{location: {lat: 27.959, lng: 86.781}, stopover:true},
						{location: {lat: 28.002, lng: 86.850}, stopover:true}
					];
				
					directionsService.route({
						origin: {lat: 27.6875413, lng: 86.729 },
						destination: {lat: 27.983, lng: 86.807},
						waypoints: waypts,
						optimizeWaypoints: true,
						travelMode: 'WALKING'
					}, function(response, status) {
						if (status === 'OK') {
							directionsDisplay.setDirections(response);
						} else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT){
							wait = true;
							setTimeout("wait = true", 2000);
							//alert('Directions request failed due to ' + status);
						}
					});
				}	
			});
		*/
		
		function drop() {
			clearMarkers();
			for (var i = 0; i < travelsGOOG.length; i++) {
				addMarkerWithTimeout(travelsGOOG[i], i * 200);
			}
		}

		function addMarkerWithTimeout(position, timeout) {
			window.setTimeout(function() {
				markers.push(new google.maps.Marker({
					title: position[0],
					position: {lat: position[1], lng: position[2]},
					map: map,
					icon: position[3],
					animation: google.maps.Animation.DROP
				}));
				markers[markers.length-1].addListener('click', showMarkerInfo);
			}, timeout);
		}	
	
		function clearMarkers() {
			for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(null);
			}
			markers = [];
		}
		
		function showMarkerInfo() {
			if(this.title === 'Olkhon Island')
				infowindow.setContent('<h4>Olkhon Island</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/yntjbjjund4ykwd9ye8k.jpg"></img>');
			else if(this.title === 'St. Petersburg')
				infowindow.setContent('<h4>St. Petersburg</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/po0axlhqvpac6cwip2ci.jpg"></img>');
			else if(this.title === 'Dapeng')
				infowindow.setContent('<h4>Dapeng</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/njxialo9f99z8sr1r3ta.jpg"></img>');
			else if(this.title === 'Kampot')
				infowindow.setContent('<h4>Kampot</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/e3mjignuqwg5v6bx7htc.jpg"></img>');					
			else if(this.title === 'UlanBataar')
				infowindow.setContent('<h4>UlanBataar</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/kwvyt5ezw89q1nhujhso.jpg"></img>');					
			else if(this.title === 'Kharkhorin')
				infowindow.setContent('<h4>Ugii Lake</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/k8av9bbvqlcoccm17zif.jpg"></img>');					
			else if(this.title === 'Moscow')
				infowindow.setContent('<h4>Moscow</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/a1p15brjqmvbceiagk4l.jpg"></img>');					
			else if(this.title === 'Novosibirsk')
				infowindow.setContent('<h4>Novosibirsk</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/o1atzwd5bspwictota1q.jpg"></img>');					
			else if(this.title === 'Shenzhen')
				infowindow.setContent('<h4>Shenzhen</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/haibueq8aea7vrnfw7yu.jpg"></img>');					
			else if(this.title === 'HongKong')
				infowindow.setContent('<h4>HongKong</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/dffvehwbjjc6cv9altft.jpg"></img>');					
			else if(this.title === 'Listvyanka')
				infowindow.setContent('<h4>Lake Baikal</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/toanhyfjfnzy5lrnxnyh.jpg"></img>');				
			else if(this.title === 'New Delhi')
				infowindow.setContent('<h4>New Delhi</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/wragjhofh3io53yglcl3.jpg"></img>');
			else if(this.title === 'Chail')
				infowindow.setContent('<h4>Chail</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/jrupupiuhy9flluq5til.jpg"></img>');
			else if(this.title === 'Pangani')
				infowindow.setContent('<h4>Pangani</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/npxvisaljk8owtdy8tjs.jpg"></img>');
			else if(this.title === 'Loiyangalini')
				infowindow.setContent('<h4>Lake Turkana</h4><img class="img-rounded" src="http://res.cloudinary.com/keystone-demo/image/upload/c_limit,h_300,w_300/evjae0yzo1ru7wdk0wlo.jpg"></img>');
			else
				infowindow.setContent(this.title);
			
			infowindow.open(map, this);	
		}
	}
