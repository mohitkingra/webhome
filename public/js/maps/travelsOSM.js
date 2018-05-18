var homeOSM = {
			lat: 28.614, 
			lng: 77.202
	};

 var iconStyleIndia = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/india.png'
      })
  });
  var iconStyleBhutan = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/bhutan.png'
      })
  });
   var iconStyleNepal = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/nepal.png'
      })
  });
    var iconStyleThailand = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/thailand.png'
      })
  });
     var iconStyleCambodia = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/cambodia.png'
      })
  });
      var iconStyleChina = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/china.png'
      })
  });
       var iconStyleHongKong = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/hong-kong.png'
      })
  });
        var iconStyleTibet = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/tibet.png'
      })
  });
         var iconStyleRussia = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/russia.png'
      })
  });
          var iconStyleMongolia = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/mongolia.png'
      })
  });
           var iconStyleFrance = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/france.png'
      })
  });
            var iconStyleSpain = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/spain.png'
      })
  });
             var iconStyleKenya = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/kenya.png'
      })
  });

              var iconStyleTanzania = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/tanzania.png'
      })
  });
               var iconStyleMalawi = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/malawi.png'
      })
  });


               var iconStyleMozambique = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/mozambique.png'
      })
  });

               var iconStyleKorea = new ol.style.Style({
      image: new ol.style.Icon({
      anchor:[0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src:'images/south-korea.png'
      })
  });
		
var travelsOSM = [
			["New Delhi", 28.614, 77.202],
			["Rishikesh", 30.107, 78.304],
			["Mussoorie", 30.452, 78.078],
			["Sankri", 31.078, 78.184],
			["Chandigarh", 30.721, 76.763],
      ["Shimla", 31.1082, 77.1728],
			["Chail", 30.968,77.198],
			["Agra", 27.166, 78.015],
			["Allahabad", 25.435, 81.846],
			["Lucknow", 26.846, 80.946],
			["Kolkata", 22.560, 88.341],
			["Mumbai", 18.944, 72.835],
			["Goa", 15.416, 73.830],
			["Amritsar", 31.633, 74.872],
			["Bikaner", 28.010, 73.314],
			["Jaisalmer", 26.915, 70.910],
			["Jodhpur", 26.271, 73.017],
			["Jaipur", 26.914, 75.831],
			["Kasol", 32.010, 77.316],
			["Jibhi", 31.592, 77.352],
			["Kalpa", 31.533, 78.250],
			["Nako", 31.881, 78.627],
			["Tabo", 32.093, 78.385],
			["Shimla", 31.107, 77.174],
			["Kaza", 32.225, 78.071],
			["Manali", 32.245, 77.190],
			["Dharamshala", 32.216, 76.319],
      ["McLeodganj", 32.2334, 76.3241],
      ["DharamKot", 32.2455, 76.3261],
      ["Leh", 34.1641, 77.5827],
      ["Jammu", 32.718, 74.8588],
      ["Srinagar", 34.076, 74.8251],
      ["Kargil", 34.5585, 76.1262],
      ["Dras", 34.4291, 75.7507],
      ["Pangong Tso Lake", 33.7221, 78.9505],
      ["Tanot", 27.795, 70.3534],
      ["Pune", 18.5213, 73.8528],
			["Gangtok", 27.316, 88.610],
			["Darjeeling", 27.036, 88.262],
			["Bangalore", 12.953, 77.595],
			["Kodaikanal", 10.238, 77.493],
			["Gokarna", 14.544, 74.318],
			["Hampi", 15.333, 76.459],
			["Pondicherry", 11.930, 79.828],
			["Kochi", 9.944, 76.265],
			["Varkala", 8.737, 76.706],
			["Allepey", 9.499, 76.331],
			["Rameswaram", 9.287, 79.312],
			["KanyaKumari", 8.078, 77.548],
			["Thimphu", 27.479, 89.625],
			["Paro", 27.431, 89.407],
			["Punakha", 27.581, 89.859],
			["San Sebastian", 43.323, -1.984],
			["Pamplona", 42.817, -1.646],
			["Barcelona", 41.383, 2.173],
			["Paris", 48.858, 2.355],
			["Suwon", 37.265, 127.029],
			["Seoul", 37.560, 126.982],
			["Boryeong", 36.328, 126.623],
			["Krabi", 8.059, 98.916],
			["Koh Samui", 9.529, 99.982],
			["Koh Phangan", 9.669, 100.072],
			["Koh Phi Phi", 7.746, 98.778],
			["Nairobi", -1.319, 36.838],
			["Naivasha", -0.717, 36.431],
			["Baringo", 0.654, 36.056],
			["Maralal", 1.003, 36.701],
			["Loiyangalini", 2.760, 36.719],
			["Arusha", -3.365, 36.690],
			["Moshi", -3.355, 37.341],
			["Tanga", -5.069, 39.099],
			["Pangani", -5.428, 38.973],
			["Zanzibar", -6.159, 39.372],
			["Dar E Salaam", -6.874, 39.211],
			["Mzuzu", -11.462, 34.016],
			["Blantyre", -15.784, 34.990],
			["Maputo", -25.958, 32.566],
			["Tofo", -23.856, 35.548],
			["Kathmandu", 27.708, 85.291],
      ["Lukla", 27.6888, 86.7305],
      ["Namche Bazaar", 27.8042, 86.7095],
      ["Tingboche", 27.836, 86.7642],
      ["Dingboche", 27.8936, 86.8314],
      ["Lubuche", 27.94815, 86.81045],
      ["Kalapathar", 27.9955, 86.8286],
			["Mt. Everest Base Camp", 28.002, 86.857],
      ["Shenzhen", 22.548, 114.046], 
			["Dapeng", 22.596, 114.467],
			["Yangshuo", 24.778, 110.496],
			["Shanghai", 31.223, 121.486],
			["Lijiang", 26.855, 100.239],
			["Shangri-La", 27.830, 99.699], 
			["Chengdu", 30.679, 104.066],
			["Beijing", 39.904, 116.386],
			["Nanjing", 32.047, 118.792],
			["Yangzhou", 32.386, 119.436],
			["HongKong", 22.285, 114.167],
			["Lhasa", 29.648, 91.131],
			["Mt. Qomolangma Base Camp, Tibet, China", 28.141, 86.851],
			["Shigatse", 29.275, 88.873],
			["St. Petersburg", 59.941, 30.327],
			["Moscow", 55.753, 37.619],
			["Yekaterinburg", 56.837, 60.606],
			["Novosibirsk", 55.018, 82.957],
			["Irkutsk", 52.316, 104.253],
			["Listvyanka", 51.857, 104.861],
			["Olkhon Island", 53.120, 107.377],
			["UlanBataar", 47.983, 106.897],
			["Kharkhorin", 47.197, 102.817],
			["Phnom Penh", 11.579, 104.923],
			["Siem Reap", 13.361, 103.849],
			["Battambang", 13.103, 103.193],
			["Kampot", 10.620, 104.175]
	];

var locationsM = [[travelsOSM[100][2], travelsOSM[100][1]], [travelsOSM[101][2], travelsOSM[101][1]], [travelsOSM[102][2], travelsOSM[102][1]], [travelsOSM[103][2], travelsOSM[103][1]], [travelsOSM[104][2], travelsOSM[104][1]], [travelsOSM[107][2], travelsOSM[107][1]], [travelsOSM[93][2], travelsOSM[93][1]], [travelsOSM[86][2], travelsOSM[86][1]]];
var locationsT = [[113.264, 23.095], [108.9439, 34.2663], [103.8304, 36.048], [101.7719, 36.6177], [94.9109, 36.3959], [travelsOSM[97][2], travelsOSM[97][1]], [travelsOSM[99][2], travelsOSM[99][1]], [travelsOSM[98][2], travelsOSM[98][1]]];
var locationsE = [[travelsOSM[79][2], travelsOSM[79][1]], [travelsOSM[80][2], travelsOSM[80][1]], [travelsOSM[81][2], travelsOSM[81][1]], [travelsOSM[82][2], travelsOSM[82][1]], [travelsOSM[83][2], travelsOSM[83][1]], [travelsOSM[84][2], travelsOSM[84][1]], [travelsOSM[85][2], travelsOSM[85][1]]];
//var locationsA = [[travelsOSM[67][2], travelsOSM[67][1]], [travelsOSM[66][2], travelsOSM[66][1]], [travelsOSM[65][2], travelsOSM[65][1]], [travelsOSM[64][2], travelsOSM[64][1]], [travelsOSM[63][2], travelsOSM[63][1]], [travelsOSM[68][2], travelsOSM[68][1]], [travelsOSM[69][2], travelsOSM[69][1]], [travelsOSM[70][2], travelsOSM[70][1]], [travelsOSM[71][2], travelsOSM[71][1]], [travelsOSM[73][2], travelsOSM[73][1]], [travelsOSM[74][2], travelsOSM[74][1]], [travelsOSM[75][2], travelsOSM[75][1]], [travelsOSM[76][2], travelsOSM[76][1]], [travelsOSM[77][2], travelsOSM[77][1]]];
var locationsH = [[travelsOSM[18][2], travelsOSM[18][1]], [travelsOSM[19][2], travelsOSM[19][1]], [travelsOSM[20][2], travelsOSM[20][1]], [travelsOSM[21][2], travelsOSM[21][1]], [travelsOSM[22][2], travelsOSM[22][1]], [travelsOSM[24][2], travelsOSM[24][1]], [travelsOSM[25][2], travelsOSM[25][1]]];
var locationsL = [[travelsOSM[0][2], travelsOSM[0][1]], [travelsOSM[30][2], travelsOSM[30][1]], [travelsOSM[31][2], travelsOSM[31][1]], [travelsOSM[32][2], travelsOSM[32][1]], [travelsOSM[33][2], travelsOSM[33][1]], [travelsOSM[29][2], travelsOSM[29][1]], [travelsOSM[34][2], travelsOSM[34][1]], [travelsOSM[25][2], travelsOSM[25][1]], [travelsOSM[0][2], travelsOSM[0][1]]];
var locationsR = [[travelsOSM[0][2], travelsOSM[0][1]], [travelsOSM[14][2], travelsOSM[14][1]], [travelsOSM[15][2], travelsOSM[15][1]], [travelsOSM[35][2], travelsOSM[35][1]], [travelsOSM[15][2], travelsOSM[15][1]], [travelsOSM[16][2], travelsOSM[16][1]], [travelsOSM[17][2], travelsOSM[17][1]], [travelsOSM[0][2], travelsOSM[0][1]]];

