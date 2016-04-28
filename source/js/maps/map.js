define(["http://maps.google.com/maps/api/js?v=3.22", "maps/defaultStyles", "maps/textLabelTypes", "maps/markerTypes", "maps/bbcSettings", "maps/markers", "maps/BBCMap", "maps/BBCLabelOverlay", "maps/BBCCircleOverlay", "maps/geojson"],
    function (GoogleMaps, defaultStyles, textLabelTypes, markerTypes, bbcSettings, markers, BBCMap, BBCLabelOverlay, BBCCircleOverlay, toll) {
        return function () {

        var textLabels = [
            {
                "lat": 39.5416447,
                "lng": 21.7700136,
                "text": "Greece",
                "labelType": "country",
                "direction": "rtl"
            },{
                "lat": 39.2917193,
                "lng": 27.676603,
                "text": "Turkey",
                "labelType": "country"
            },{
                "lat": 39.3173691,
                "lng": 26.6920916,
                "text": "Ayvalik",
                "labelType": "placeName"
            }
        ];

        var map1 = new BBCMap(
                {
                    "elementId": "newsspec_14121-map-canvas--one",
                    "mapSettings": bbcSettings.one,
                    "circleOverlays": [
                        {
                            "dataset": toll.features,
                            "valueProperty": "toll"
                        }
                    ],
                    "textLabels": textLabels,
                    "kmlLayers": [
                        "https://dl.dropboxusercontent.com/u/7667577/maritime2.kml"
                    ],
                    "markers": markers,
                    "tileUrlBase": "BBCTerrain/"
                }
            );

        var map2 = new BBCMap(
                {
                    "elementId": "newsspec_14121-map-canvas--two",
                    "mapSettings": bbcSettings.two,
                    "circleOverlays": [
                        {
                            "dataset": toll.features,
                            "valueProperty": "toll"
                        }
                    ],
                    "textLabels": textLabels,
                    "kmlLayers": [
                        "https://dl.dropboxusercontent.com/u/7667577/maritime2.kml"
                    ],
                    "markers": markers,
                    "tileUrlBase": "BBCTerrain/"
                }
            );

        var map3 = new BBCMap(
                {
                    "elementId": "newsspec_14121-map-canvas--three",
                    "mapSettings": bbcSettings.three,
                    "circleOverlays": [
                        {
                            "dataset": toll.features,
                            "valueProperty": "toll"
                        }
                    ],
                    "textLabels": textLabels,
                    "kmlLayers": [
                        "https://dl.dropboxusercontent.com/u/7667577/maritime2.kml"
                    ],
                    "markers": markers,
                    "tileUrlBase": "BBCTerrain/"
                }
            );



            function logSettings(el) {
                for(var i = 0; i < Object.keys(bbcSettings).length; i++) {
                    var p = document.createElement("p");
                    p.innerText = Object.keys(bbcSettings)[i] + ": " + bbcSettings[Object.keys(bbcSettings)[i]];
                    el.appendChild(p);
                }
            }

            function initialize() {
                //logSettings(document.getElementById("mapSettings"));
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

