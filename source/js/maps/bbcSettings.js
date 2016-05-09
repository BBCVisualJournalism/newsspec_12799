//Project configuration file

//TODO: Add in bounding box settings?

define(['http://maps.google.com/maps/api/js?v=3.22&client=gme-britishbroadcasting&channel=mtk-v3-schoolreport-2014', 'maps/defaultStyles'], function(GoogleMaps, defaultStyles){
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
			    '0': {'zoom': 5, 'lat': 31.791356985191978, 'lng': 20.969925299999982},
			    '459': {'zoom': 5, 'lat': 31.791356985191978, 'lng': 20.969925299999982},
			    '869': {'zoom': 6, 'lat': 34.856768277535345, 'lng': 20.360184089062482}
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
			    '0': {'zoom': 5, 'lat': 25.985350071339123, 'lng': 11.851272956249982},
			    '319': {'zoom': 6, 'lat': 34.67626688029352, 'lng': 14.630813971874982},
			    '459': {'zoom': 6, 'lat': 32.86818800058924, 'lng': 14.136429206249982},
			    '849': {'zoom': 7, 'lat': 35.40485295553955, 'lng': 14.356155768749982}
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
	            '0': {'zoom': 6, 'lat': 35.87805343435776, 'lng': 26.77070655000002},
	            '459': {'zoom': 6, 'lat': 34.71239873022545, 'lng': 25.50679053437499},
	            '869': {'zoom': 7, 'lat': 38.04605437637106, 'lng': 25.71601905000002}
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
