define(['http://maps.google.com/maps/api/js?v=3.22&client=gme-britishbroadcasting&channel=mtk-v3-schoolreport-2014'], function(GoogleMaps){

    /** @constructor */
    function BBCLabelOverlay(map, position, markerType, text, direction, zoomLevels) {

        // Initialize all properties.
        this.map_ = map;
        this.markerType_ = markerType;
        this.position_ = position;
        this.text_ = text;
        this.direction_ = direction || 'ltr';

        if(typeof(zoomLevels) !== 'undefined') {
            this.minZoom_ = (typeof(zoomLevels.min) !== 'undefined') ? zoomLevels.min : null;
            this.maxZoom_ = (typeof(zoomLevels.max) !== 'undefined') ? zoomLevels.max : null;
        } else {
            this.minZoom_ = null;
            this.maxZoom_ = null;
        }

        // Define a property to hold the label's paragraph. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.para_ = null;

        // Explicitly call setMap on this overlay.
        this.setMap(map);
    }

    BBCLabelOverlay.prototype = new google.maps.OverlayView();

    BBCLabelOverlay.prototype.onAdd = function() {

        var para = document.createElement('p');
        para.style.position = 'absolute';
        para.textContent = this.text_;
        para.className = this.markerType_.className;

        if(this.minZoom_ !== null) {
            // para.className += ' minz' + this.minZoom_;
            for(var i=1; i < 20; i++) {
                if(i < this.minZoom_) {
                    para.className += ' hideZ' + i;
                } else {
                    break;
                }
            }
        }

        if(this.maxZoom_ !== null) {
            // para.className += ' maxz' + this.maxZoom_;
            for(var q=20; q > 0; q--) {
                if(q > this.maxZoom_) {
                    para.className += ' hideZ' + q;
                } else {
                    break;
                }
            }
        }

        if(this.direction_ !== 'ltr') {
            para.style.direction = 'rtl';
        }

        this.para_ = para;

        // Add the element to the 'floatPane' pane.
        var panes = this.getPanes();
        panes.floatPane.appendChild(para);

    };

    BBCLabelOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    };

    BBCLabelOverlay.prototype.draw = function() {

        // We need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        // Retrieve LatLng and convert to pixel coords
        var xy = overlayProjection.fromLatLngToDivPixel(this.position_);

        // Resize the image's div to fit the indicated dimensions.
        var para = this.para_;
        para.style.left = xy.x + 'px';
        para.style.top = xy.y + 'px';

    };

    return BBCLabelOverlay;
});
