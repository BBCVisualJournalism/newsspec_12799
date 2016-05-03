//Project configuration file

//TODO: Add in bounding box settings?

define(['http://maps.google.com/maps/api/js?v=3.22', 'maps/defaultStyles'], function(GoogleMaps, defaultStyles){
	var bbcSettings = {
		one: {
		    //Map style:
		    // one of those defined in global styles
		    mapStyle: defaultStyles.bespokeClean,
		    //Map type:
		    // ROADMAP, SATELLITE, HYBRID, TERRAIN
		    mapType: google.maps.MapTypeId.ROADMAP,
		    //TODO: Define px breakpoints (mob first) that map changes zoom level and re-centers:
			responsiveZoomLevels: {
			    '0': {'zoom': 4, 'lat': 38.2620323, 'lng': 24.85908545625002},
			    '460': {'zoom': 5, 'lat': 38.33101008360811, 'lng': 21.45332373750002},
			    '870': {'zoom': 6, 'lat': 37.56865534132693, 'lng': 20.360184089062482}
			},
		    //Minimum zoom level:
		    minZoom: 5,
		    //Maximum zoom level:
		    maxZoom: 9,
		    //Initial zoom level:
		    startingZoom: 6,
		    //Initial lat and long:
		    startingLat: 38.2620323,
		    startingLng: 24.4855503,
		    //Display scale on map:
		    showScale: true,
		    //Enable/disable zooming of any kind:
		    zoomable: false,
		    disableDoubleClickZoom: true,
		    showCustomZoomControl: true,
		    //Enable/disable panning:
		    draggable: false,
		    //Enable/disable scroll interaction:
		    scrollwheel: false
	    },
		two: {
		    //Map style:
		    // one of those defined in global styles
		    mapStyle: defaultStyles.bespokeClean,
		    //Map type:
		    // ROADMAP, SATELLITE, HYBRID, TERRAIN
		    mapType: google.maps.MapTypeId.ROADMAP,
		    //TODO: Define px breakpoints (mob first) that map changes zoom level and re-centers:
		    responsiveZoomLevels: {
			    '0': {'zoom': 5, 'lat': 35.485405155332266, 'lng': 14.861526862500023},
			    '319': {'zoom': 6, 'lat': 35.485405155332266, 'lng': 14.553909675000023},
			    '460': {'zoom': 6, 'lat': 36.569346732773106, 'lng': 14.630813971875023},
			    '850': {'zoom': 7, 'lat': 36.10916312113808, 'lng': 14.559402839062482}
			},
		    //Minimum zoom level:
		    minZoom: 5,
		    //Maximum zoom level:
		    maxZoom: 9,
		    //Initial zoom level:
		    startingZoom: 6,
		    //Initial lat and long:
		    startingLat: 38.2620323,
		    startingLng: 24.4855503,
		    //Display scale on map:
		    showScale: true,
		    //Enable/disable zooming of any kind:
		    zoomable: false,
		    disableDoubleClickZoom: true,
		    showCustomZoomControl: true,
		    //Enable/disable panning:
		    draggable: false,
		    //Enable/disable scroll interaction:
		    scrollwheel: false
	    },
		three: {
		    //Map style:
		    // one of those defined in global styles
		    mapStyle: defaultStyles.bespokeClean,
		    //Map type:
		    // ROADMAP, SATELLITE, HYBRID, TERRAIN
		    mapType: google.maps.MapTypeId.ROADMAP,
		    //TODO: Define px breakpoints (mob first) that map changes zoom level and re-centers:
		    responsiveZoomLevels: {
		    	'0': {'zoom': 5, 'lat': 38.2620323, 'lng': 24.85908545625002},
			    '460': {'zoom': 6, 'lat': 38.2275188226067, 'lng': 24.62788428437499},
			    '870': {'zoom': 7, 'lat': 38.2620323, 'lng': 25.17768897187502}
		    },
		    //Minimum zoom level:
		    minZoom: 5,
		    //Maximum zoom level:
		    maxZoom: 9,
		    //Initial zoom level:
		    startingZoom: 6,
		    //Initial lat and long:
		    startingLat: 38.2620323,
		    startingLng: 24.4855503,
		    //Display scale on map:
		    showScale: true,
		    //Enable/disable zooming of any kind:
		    zoomable: false,
		    disableDoubleClickZoom: true,
		    showCustomZoomControl: true,
		    //Enable/disable panning:
		    draggable: false,
		    //Enable/disable scroll interaction:
		    scrollwheel: false
	    }
	};
    return bbcSettings;
});
