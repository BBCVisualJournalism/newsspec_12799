define(['http://maps.google.com/maps/api/js?v=3.22&client=gme-britishbroadcasting&channel=mtk-v3-schoolreport-2014', 'maps/defaultStyles', 'maps/textLabelTypes', 'maps/markerTypes', 'maps/bbcSettings', 'maps/markers', 'maps/BBCMap', 'maps/BBCLabelOverlay', 'maps/BBCCircleOverlay', 'maps/BBCImageOverlay', 'maps/geojson', 'vocabs'],
    function (GoogleMaps, defaultStyles, textLabelTypes, markerTypes, bbcSettings, markers, BBCMap, BBCLabelOverlay, BBCCircleOverlay, BBCImageOverlay, toll, vocabs) {
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
                'lng': 22.1531886,
                'text': vocabs.map1_label_5,
                'labelType': 'country'
            },{
                'lat': 38.5770502,
                'lng': 29.06603,
                'text': vocabs.map1_label_6,
                'labelType': 'country'
            },{
                'lat': 39.1388697,
                'lng': 26.064447,
                'text': vocabs.map1_label_7,
                'labelType': 'regionRight',
                'zoomLevels': {
                    'min': 6,
                    'max': 6
                }
            },{
                'lat': 34.8828503,
                'lng': 20.5967522,
                'text': vocabs.map1_label_8,
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
                'lng': 14.7211156,
                'text': vocabs.map2_label_2,
                'labelType': 'country',
                'zoomLevels': {
                    'min': 6,
                    'max': 7
                }
            },{
                'lat': 32.31465,
                'lng': 13.2981406,
                'text': vocabs.map2_label_3,
                'labelType': 'country'
            },{
                'lat': 37.0963567,
                'lng': 17.0524025,
                'text': vocabs.map2_label_4,
                'labelType': 'sea',
                'zoomLevels': {
                    'min': 7,
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

        var pageIsRtl = $('.bbc-news-vj-wrapper').hasClass('bbc-news-vj-direction--rtl');
        if (pageIsRtl) {
            for (var i=0; i<textLabels_map1.length; i++){
                textLabels_map1[i].direction = 'rtl';
            }
            for (i=0; i<textLabels_map2.length; i++){
                textLabels_map2[i].direction = 'rtl';
            }
            for (i=0; i<textLabels_map3.length; i++){
                textLabels_map3[i].direction = 'rtl';
            }
        }

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
                    'imageOverlays': [
                        {
                            'bounds': new google.maps.LatLngBounds(
                                new google.maps.LatLng(25.7597533, 2.0647545),
                                new google.maps.LatLng(47.5702063, 41.037531)
                            ),
                            'image': '/news/special/2016/newsspec_12799/content/full-width/common/img/maps/map1circles.png'
                        }
                    ],
                    'textLabels': textLabels_map1,
                    'kmlLayers': [
                        'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12799/content/full-width/common/img/maritime_borders.kml'
                    ],
                    'markers': markers,
                    'tileUrlBase': '/news/special/2016/newsspec_12799/content/full-width/common/img/bbchillshade/'
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
                    'imageOverlays': [
                        {
                            'bounds': new google.maps.LatLngBounds(
                                new google.maps.LatLng(26.3372008, 8.8775371), //sw
                                new google.maps.LatLng(42.4339993, 36.6433935) //ne
                            ),
                            'image': '/news/special/2016/newsspec_12799/content/full-width/common/img/maps/zoomcircles.png'
                        }
                    ],
                    'textLabels': textLabels_map2,
                    'kmlLayers': [
                        'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12799/content/full-width/common/img/maritime_borders.kml'
                    ],
                    'markers': markers,
                    'tileUrlBase': '/news/special/2016/newsspec_12799/content/full-width/common/img/bbchillshade/'
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
                    'imageOverlays': [
                        {
                            'bounds': new google.maps.LatLngBounds(
                                new google.maps.LatLng(26.3372008, 8.8775371), //sw
                                new google.maps.LatLng(42.4339993, 36.6433935) //ne
                            ),
                            'image': '/news/special/2016/newsspec_12799/content/full-width/common/img/maps/zoomcircles.png'
                        }
                    ],
                    'textLabels': textLabels_map3,
                    'kmlLayers': [
                        'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12799/content/full-width/common/img/maritime_borders.kml'
                    ],
                    'markers': markers,
                    'tileUrlBase': '/news/special/2016/newsspec_12799/content/full-width/common/img/bbchillshade/'
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

