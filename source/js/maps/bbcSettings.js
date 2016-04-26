//Project configuration file

//TODO: Add in bounding box settings?

define(['http://maps.google.com/maps/api/js', 'maps/defaultStyles'], function(GoogleMaps, defaultStyles){
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
		    	'0': {'zoom': 5, 'lat': 38.2620323, 'lng': 24.85908545625002},
		        '460': {'zoom': 6, 'lat': 38.2620323, 'lng': 24.4855503},
		        '850': {'zoom': 7, 'lat': 38.2620323, 'lng': 24.89753760468752}
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
		    	'0': {'zoom': 5, 'lat': 38.2620323, 'lng': 24.85908545625002},
		        '460': {'zoom': 6, 'lat': 38.2620323, 'lng': 24.4855503},
		        '850': {'zoom': 8, 'lat': 38.1990323, 'lng': 24.64453760468752}
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
		    	'0': {'zoom': 6, 'lat': 38.2620323, 'lng': 24.85908545625002},
		        '460': {'zoom': 8, 'lat': 38.2620323, 'lng': 24.4855503},
		        '850': {'zoom': 6, 'lat': 37.8620323, 'lng': 24.19753760468752}
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
