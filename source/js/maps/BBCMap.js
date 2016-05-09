define(['jquery', 'maps/BBCLabelOverlay', 'maps/BBCCircleOverlay', 'maps/BBCImageOverlay', 'maps/markerTypes', 'maps/textLabelTypes'], function($, BBCLabelOverlay, BBCCircleOverlay, BBCImageOverlay, markerTypes, textLabelTypes) {

    var BBCMap = function (config) {
        this.map = null;
        this.textDirection = config.textDirection;
        this.mapElementId = config.elementId; //String (map element id)
        this.mapSettings = config.mapSettings;
        this.circleOverlays = config.circleOverlays; //Array of objects
        this.imageOverlays = config.imageOverlays;
        this.textLabels = config.textLabels; //Array of objects
        this.kmlLayers = config.kmlLayers; //Array of KML file URLs
        this.markers = config.markers;
        this.zoomLevels = [];
        this.renderedCircleOverlays = [];
        this.tileUrlBase = config.tileUrlBase; //relative path, including last '/'
        this.mapOptions = {
            zoom: this.mapSettings.startingZoom,
            center: new google.maps.LatLng(this.mapSettings.startingLat, this.mapSettings.startingLng),
            scaleControl: this.mapSettings.showScale,
            mapTypeId: this.mapSettings.mapType,
            disableDefaultUI: true,
            draggable: (this.mapSettings.draggable) ? this.mapSettings.draggable : false,
            zoomControl: (this.mapSettings.zoomable) ? (this.mapSettings.showCustomZoomControl) ? false : true : false,
            disableDoubleClickZoom: (this.mapSettings.zoomable) ? this.mapSettings.disableDoubleClickZoom : true,
            styles: this.mapSettings.mapStyle.styles,
            scrollwheel: (this.mapSettings.zoomable) ? (this.mapSettings.scrollwheel) ? this.mapSettings.scrollwheel : false : false
        };

        if (this.mapSettings.responsiveZoomLevels && Object.keys(this.mapSettings.responsiveZoomLevels).length > 0) {
            this.zoomLevels = Object.keys(this.mapSettings.responsiveZoomLevels);
            this.zoomLevels.sort(function(a,b){
                return parseInt(a, 10) - parseInt(b, 10);
            });
        }
    };

    BBCMap.prototype.initialize = function() {
        //Create map instance
        this.map = new google.maps.Map(document.getElementById(this.mapElementId), this.mapOptions);
        this.resizeAndRecenter();

        //Add tiles to the map
        this.addTileLayer(this.tileUrlBase);

        //Add KML Layers to the map
        this.addKMLLayers(this.kmlLayers);

        //Add KML Layers to the map
        // this.addCircleLayers(this.circleOverlays);

        this.addImageOverlays(this.imageOverlays);

        //Add text labels to the map
        this.addTextLabels(this.textLabels);

        //Add marker icons
        this.addMarkers(this.markers);

        //Add custom controls
        this.addCustomControls();

        //Setup event handlers
        this.setupListeners();

        $('.bbc-news-vj-wrapper').addClass('bbc-news-vj-wrapper--map-enabled');
    };

    BBCMap.prototype.resizeAndRecenter = function() {
        var viewportWidth = document.getElementById(this.mapElementId).offsetWidth;
        var newZoom = this.getZoomLevel(viewportWidth);
        this.map.setCenter(this.getCenter(viewportWidth));
        this.map.setZoom(newZoom);
        this.setZoomClass(newZoom);
    };

    BBCMap.prototype.getZoomLevel = function(viewportWidth) {
        var chosenZoom;
        var responsiveZoomLevels = this.mapSettings.responsiveZoomLevels;

        if (responsiveZoomLevels && this.zoomLevels.length > 0) {

            for(var i=0; i<this.zoomLevels.length; i++) {
                if(parseInt(this.zoomLevels[i], 10) < viewportWidth) {
                    chosenZoom = responsiveZoomLevels[this.zoomLevels[i]]['zoom'];
                } else {
                    chosenZoom = (i>0)?responsiveZoomLevels[this.zoomLevels[i - 1]]['zoom']:responsiveZoomLevels[this.zoomLevels[0]]['zoom'];
                    break;
                }
            }

            return parseInt(chosenZoom, 10);
        } else {
            return this.mapSettings.startingZoom;
        }
    };

    BBCMap.prototype.getCenter = function(viewportWidth) {
        var chosenLocation;
        var responsiveZoomLevels = this.mapSettings.responsiveZoomLevels;

        if (responsiveZoomLevels && this.zoomLevels.length > 0) {

            for(var i=0; i<this.zoomLevels.length; i++) {
                if(parseInt(this.zoomLevels[i], 10) < viewportWidth) {
                    chosenLocation = new google.maps.LatLng(responsiveZoomLevels[this.zoomLevels[i]]['lat'], responsiveZoomLevels[this.zoomLevels[i]]['lng']);
                    // console.log(responsiveZoomLevels[this.zoomLevels[i]]['lat']);
                    // console.log(chosenLocation);
                } else {
                    chosenLocation = (i>0)?new google.maps.LatLng(responsiveZoomLevels[this.zoomLevels[i-1]]['lat'], responsiveZoomLevels[this.zoomLevels[i-1]]['lng']):new google.maps.LatLng(responsiveZoomLevels[this.zoomLevels[0]]['lat'], responsiveZoomLevels[this.zoomLevels[0]]['lng']);
                    break;
                }
            }

            return chosenLocation;
        } else {
            return new google.maps.LatLng(this.mapSettings.startingLat, this.mapSettings.startingLng);
        }
    };

    BBCMap.prototype.addKMLLayers = function(layers) {
        for(var i = 0; i < layers.length; i++) {
            var kmlLayer = new google.maps.KmlLayer({
                url: layers[i],
                preserveViewport: true,
                suppressInfoWindows: true
            });

            kmlLayer.setMap(this.map);
        }
    };

    BBCMap.prototype.addCircleLayers = function(layers) {
        for(var i = 0; i < layers.length; i++) {
            var circleOverlay = new BBCCircleOverlay(this.map, layers[i].dataset, layers[i].valueProperty);
            this.renderedCircleOverlays.push(circleOverlay);
        }
    };

    BBCMap.prototype.addImageOverlays = function(overlays) {
        for(var i = 0; i < overlays.length; i++) {
            var imageOverlay = new BBCImageOverlay(overlays[i].bounds, overlays[i].image, this.map);
        }
    };

    BBCMap.prototype.addTextLabels = function(layers) {
        for(var i = 0; i < layers.length; i++) {
            var location = new google.maps.LatLng(layers[i].lat, layers[i].lng);
            var overlay = new BBCLabelOverlay(this.map, location, textLabelTypes[layers[i].labelType], layers[i].text, layers[i].direction, layers[i].zoomLevels);
        }
    };

    BBCMap.prototype.addMarkers = function(markers){
        // console.log(markers);
        for(var i = 0; i < markers.features.length; i++) {
            var marker = new google.maps.Marker({
                map: this.map,
                position: new google.maps.LatLng(markers.features[i].geometry.coordinates[1], markers.features[i].geometry.coordinates[0]),
                icon: markerTypes[markers.features[i].properties.icon],
                title: markers.features[i].properties.title
            });
        }
    };

    BBCMap.prototype.addTileLayer = function(tileUrlBase) {
        var terrainMap = new google.maps.ImageMapType({
            getTileUrl: function(coord, zoom) {
                var normalizedCoord = BBCMap.prototype.getNormalizedCoord(coord, zoom);
                if (!normalizedCoord) {
                  return null;
                }
                var bound = Math.pow(2,zoom);
                return tileUrlBase + zoom + '/' + normalizedCoord.x + '/' + (bound-normalizedCoord.y-1) + '.png';
            },
            tileSize: new google.maps.Size(256,256),
            maxZoom: 9,
            minZoom: 5,
            name: 'terrain'
        });

        this.map.overlayMapTypes.insertAt(0, terrainMap);
    };

    BBCMap.prototype.getNormalizedCoord = function(coord, zoom) {
        var y = coord.y;
        var x = coord.x;

        // tile range in one direction range is dependent on zoom level
        // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
        var tileRange = 1 << zoom;

        // don't repeat across y-axis (vertically)
        if (y < 0 || y >= tileRange) {
            return null;
        }

        // repeat across x-axis
        if (x < 0 || x >= tileRange) {
            x = (x % tileRange + tileRange) % tileRange;
        }

        return {x: x, y: y};
    };

    BBCMap.prototype.addCustomControls = function() {
        if(this.mapSettings.showCustomZoomControl && this.mapSettings.zoomable) {
            var controlEl = document.createElement('div');
            var zoomIn = document.createElement('div');
            var zoomOut = document.createElement('div');
            var self = this;
            // var fullScreen = document.createElement('div');

            controlEl.className = 'bbcZoomControl';
            controlEl.id = 'bbcZoomControl';
            // fullScreen.className = 'bbcFullScreen';
            zoomIn.className = 'bbcZoomIn';
            zoomOut.className = 'bbcZoomOut';
            zoomIn.id = 'bbcZoomIn';
            zoomOut.id = 'bbcZoomOut';

            // fullScreen.textContent = 'Fullscreen view';
            zoomIn.textContent = '+';
            zoomOut.textContent = '-';

            // controlEl.appendChild(fullScreen);
            controlEl.appendChild(zoomIn);
            controlEl.appendChild(zoomOut);

            controlEl.index = 1;
            this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlEl);

            zoomIn.addEventListener('click', function(){self.controlZoom('in', self.map);});
            zoomOut.addEventListener('click', function(){self.controlZoom('out', self.map);});
            // fullScreen.addEventListener('click', app.toggleFullScreen);
        }
    };

    BBCMap.prototype.setupListeners = function() {
        //Window resize event
        var self = this;

        google.maps.event.addDomListener(window, 'resize', function() {
                self.resizeAndRecenter();
                // console.log('resize event');
        });

        //Tile load event
        google.maps.event.addListener(self.map, 'tilesloaded', function() {

        });

        google.maps.event.addDomListener(this.map, 'zoom_changed', function(){
            var currentZoom = self.map.getZoom();
            // console.log('zoom: ' + currentZoom);
        });

        var debounce;
        google.maps.event.addListener(this.map, 'center_changed', function(){
            if(debounce) {
                clearTimeout(debounce);
            }
            var center = self.map.getCenter();
            var centerLat = center.lat();
            var centerLng = center.lng();

            debounce = setTimeout(function(){
                // console.log(centerLat + ',' + centerLng);
            }, 500);
        });
    };

    BBCMap.prototype.setZoomClass = function(zoomLevel) {
        var mapContainer = this.map.getDiv(),
            classRegex = /\szoomLevel[0-9]{1,}/i,
            zoomLevelValue = ' zoomLevel' + zoomLevel;
        mapContainer.className = mapContainer.className.replace(classRegex, '');

        mapContainer.className += zoomLevelValue;
    };

    BBCMap.prototype.controlZoom = function(direction, map) {
        currentZoom = map.getZoom();
        var mapContainer = map.getDiv();

        if(direction === 'in') {

            if(currentZoom < this.mapSettings.maxZoom) {
                currentZoom++;
                map.setZoom(currentZoom);
                this.setZoomClass(currentZoom);
            }
        }

        if(direction === 'out') {

            if(currentZoom > this.mapSettings.minZoom) {
                currentZoom--;
                map.setZoom(currentZoom);
                this.setZoomClass(currentZoom);
            }
        }

        if(this.renderedCircleOverlays.length > 0) {
            for(var i=0; i<this.renderedCircleOverlays; i++) {
                this.renderedCircleOverlays[i].redraw();
            }
        }

        if(currentZoom === this.mapSettings.maxZoom) {
            if(mapContainer.className.indexOf(' maxZoom') === -1) {
                mapContainer.className += ' maxZoom';
            }
        }

        if(currentZoom === this.mapSettings.minZoom) {
            if(mapContainer.className.indexOf(' minZoom') === -1) {
                mapContainer.className += ' minZoom';
            }
        }

        if(currentZoom < this.mapSettings.maxZoom) {
            if(mapContainer.className.indexOf(' maxZoom') !== -1) {
                mapContainer.className = mapContainer.className.replace(' maxZoom', '');
            }
        }

        if(currentZoom > this.mapSettings.minZoom) {
            if(mapContainer.className.indexOf(' minZoom') !== -1) {
                mapContainer.className = mapContainer.className.replace(' minZoom', '');
            }
        }
    };

    return BBCMap;

});
