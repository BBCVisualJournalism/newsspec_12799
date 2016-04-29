define(['http://maps.google.com/maps/api/js?v=3.22', 'maps/defaultStyles', 'maps/textLabelTypes', 'maps/markerTypes', 'maps/bbcSettings', 'maps/markers', 'maps/BBCMap', 'maps/BBCLabelOverlay', 'maps/BBCCircleOverlay', 'maps/geojson', 'vocabs'],
    function (GoogleMaps, defaultStyles, textLabelTypes, markerTypes, bbcSettings, markers, BBCMap, BBCLabelOverlay, BBCCircleOverlay, toll, vocabs) {
        return function () {

        var textLabels_map1 = [
            {
                'lat': 39.2703184,
                'lng': 16.6304494,
                'text': vocabs.map1_label_1,
                'labelType': 'country'
            },{
                'lat': 35.9305775,
                'lng': 14.4411156,
                'text': vocabs.map1_label_2,
                'labelType': 'country'
            },{
                'lat': 31.71465,
                'lng': 13.2981406,
                'text': vocabs.map1_label_3,
                'labelType': 'country'
            },{
                'lat': 31.0198896,
                'lng': 26.488,
                'text': vocabs.map1_label_4,
                'labelType': 'country'
            },{
                'lat': 38.5770502,
                'lng': 21.7531886,
                'text': vocabs.map1_label_5,
                'labelType': 'country'
            },{
                'lat': 38.5770502,
                'lng': 29.06603,
                'text': vocabs.map1_label_5,
                'labelType': 'country'
            },{
                'lat': 39.1388697,
                'lng': 26.064447,
                'text': vocabs.map1_label_6,
                'labelType': 'regionRight',
                'zoomLevels': {
                    'min': 6,
                    'max': 6
                }
            },{
                'lat': 34.6828503,
                'lng': 21.5967522,
                'text': 'Mediterranean Sea',
                'labelType': 'sea'
            }
        ];

        var textLabels_map2 = [
            {
                'lat': 39.2703184,
                'lng': 16.6304494,
                'text': vocabs.map2_label_1,
                'labelType': 'country'
            },{
                'lat': 36.1505775,
                'lng': 14.4411156,
                'text': vocabs.map2_label_2,
                'labelType': 'country',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            },{
                'lat': 31.71465,
                'lng': 13.2981406,
                'text': vocabs.map2_label_3,
                'labelType': 'country'
            },{
                'lat': 39.5963567,
                'lng': 13.6524025,
                'text': vocabs.map2_label_4,
                'labelType': 'sea',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            },{
                'lat': 38.1146729,
                'lng': 13.3796029,
                'text': vocabs.map2_label_5,
                'labelType': 'placeNameOnSeaAboveRight',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            },{
                'lat': 37.4930895,
                'lng': 15.0876456,
                'text': vocabs.map2_label_6,
                'labelType': 'placeNameOnSea',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            },{
                'lat': 35.5164619,
                'lng': 12.5686083,
                'text': vocabs.map2_label_7,
                'labelType': 'placeNameOnSea',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            },{
                'lat': 32.2903408,
                'lng': 15.1727254,
                'text': vocabs.map2_label_8,
                'labelType': 'placeNameOnSea',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            }
        ];

        var textLabels_map3 = [
            {
                'lat': 38.5770502,
                'lng': 21.7531886,
                'text': vocabs.map3_label_1,
                'labelType': 'country'
            },{
                'lat': 38.5770502,
                'lng': 29.26603,
                'text': vocabs.map3_label_2,
                'labelType': 'country'
            },{
                'lat': 36.2,
                'lng': 25.1967522,
                'text': vocabs.map3_label_3,
                'labelType': 'sea',
                'zoomLevels': {
                    'min': 6,
                    'max': 8
                }
            },{
                'lat': 34.2828503,
                'lng': 22.3967522,
                'text': vocabs.map3_label_4,
                'labelType': 'sea',
                'zoomLevels': {
                    'min': 5,
                    'max': 6
                }
            },{
                'lat': 37.9908997,
                'lng': 23.70332,
                'text': vocabs.map3_label_5,
                'labelType': 'placeNameBelowRight',
                'zoomLevels': {
                    'min': 5,
                    'max': 7
                }
            },{
                'lat': 39.1388697,
                'lng': 26.064447,
                'text': vocabs.map3_label_6,
                'labelType': 'regionRight',
                'zoomLevels': {
                    'min': 6,
                    'max': 8
                }
            }
        ];

        var map1 = new BBCMap(
                {
                    'elementId': 'newsspec_14121-map-canvas--one',
                    'mapSettings': bbcSettings.one,
                    'circleOverlays': [
                        {
                            'dataset': toll.features,
                            'valueProperty': 'toll'
                        }
                    ],
                    'textLabels': textLabels_map1,
                    'kmlLayers': [
                        'https://dl.dropboxusercontent.com/u/7667577/maritime2.kml'
                    ],
                    'markers': markers,
                    'tileUrlBase': '/news/special/2016/newsspec_12799/content/full-width/common/img/bbcterrain/'
                }
            );

        var map2 = new BBCMap(
                {
                    'elementId': 'newsspec_14121-map-canvas--two',
                    'mapSettings': bbcSettings.two,
                    'circleOverlays': [
                        {
                            'dataset': toll.features,
                            'valueProperty': 'toll'
                        }
                    ],
                    'textLabels': textLabels_map2,
                    'kmlLayers': [
                        'https://dl.dropboxusercontent.com/u/7667577/maritime2.kml'
                    ],
                    'markers': markers,
                    'tileUrlBase': '/news/special/2016/newsspec_12799/content/full-width/common/img/bbcterrain/'
                }
            );

        var map3 = new BBCMap(
                {
                    'elementId': 'newsspec_14121-map-canvas--three',
                    'mapSettings': bbcSettings.three,
                    'circleOverlays': [
                        {
                            'dataset': toll.features,
                            'valueProperty': 'toll'
                        }
                    ],
                    'textLabels': textLabels_map3,
                    'kmlLayers': [
                        'https://dl.dropboxusercontent.com/u/7667577/maritime2.kml'
                    ],
                    'markers': markers,
                    'tileUrlBase': '/news/special/2016/newsspec_12799/content/full-width/common/img/bbcterrain/'
                }
            );



            function logSettings(el) {
                for(var i = 0; i < Object.keys(bbcSettings).length; i++) {
                    var p = document.createElement('p');
                    p.innerText = Object.keys(bbcSettings)[i] + ': ' + bbcSettings[Object.keys(bbcSettings)[i]];
                    el.appendChild(p);
                }
            }

            function initialize() {
                //logSettings(document.getElementById('mapSettings'));
                map1.initialize();
                map2.initialize();
                map3.initialize();
            }

            initialize();
        };
    }
);


//Marker parameters - TODO: read JSON obj of markers and render
// lat, long, type, zoom level visibility, label text, alignment

