define(['http://maps.google.com/maps/api/js?v=3.22&client=gme-britishbroadcasting&sensor=true&channel=mtk-v3-schoolreport-2014'], function(GoogleMaps){

    // This example creates a custom overlay called BBCCircleOverlay,
    // for adding BBC styled text labels to maps

    // Set the custom overlay object's prototype to a new instance
    // of OverlayView. In effect, this will subclass the overlay class.
    // Note that we set the prototype to an instance, rather than the
    // parent class itself, because we do not wish to modify the parent class.

    /** @constructor */
    function BBCCircleOverlay(map, circleData, propertyName) {

        // Initialize all properties.
        this.map_ = map;

        // Define a property to hold the label's paragraph. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.canvas_ = null;
        this.circleData = circleData;
        this.propertyName = propertyName || 'total';
        // console.log(this.propertyName);
        // console.log(propertyName);

        // Explicitly call setMap on this overlay.
        this.setMap(map);
    }

    BBCCircleOverlay.prototype = new google.maps.OverlayView();

    BBCCircleOverlay.prototype.onAdd = function() {

        var circleCanvas = document.createElement('canvas');
        circleCanvas.style.position = 'absolute';
        circleCanvas.style.top = -1000 + 'px';
        circleCanvas.style.left = -1000 + 'px';
        circleCanvas.width = this.map_.getDiv().offsetWidth + 2000;
        circleCanvas.height = this.map_.getDiv().offsetHeight + 2000;
        circleCanvas.className = 'circle-canvas';

        this.canvas_ = circleCanvas;

        // Add the element to the 'overlayLayer' pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(circleCanvas);

    };

    BBCCircleOverlay.prototype.onRemove = function() {
        this.canvas_.parentNode.removeChild(this.canvas_);
        this.canvas_ = null;
    };

    BBCCircleOverlay.prototype.draw = function() {

        // We need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        if(this.canvas_.getContext) {
            this.canvas_.getContext('2d').clearRect(0, 0, this.canvas_.width, this.canvas_.height);

            var ctx = this.canvas_.getContext('2d');
            ctx.fillStyle = 'rgba(246, 139, 35, .6)';
            ctx.globalCompositeOperation = 'multiply';


            for(var i=0; i < Object.keys(this.circleData).length; i++) {
                // Retrieve LatLng and convert to pixel coords
                var circlePosition = new google.maps.LatLng(this.circleData[i].geometry.coordinates[1], this.circleData[i].geometry.coordinates[0]);
                var xy = overlayProjection.fromLatLngToDivPixel(circlePosition);

                ctx.beginPath();
                var x = xy.x + 1000; // x coordinate
                var y = xy.y + 1000; // y coordinate
                var radius = Math.sqrt(this.circleData[i].properties[this.propertyName]) * (this.map_.getZoom() / 2.2); // Arc radius
                var startAngle = 0; // Starting point on circle
                var endAngle = Math.PI * 2; // End point on circle
                var anticlockwise = i%2===0 ? false : true; // clockwise or anticlockwise

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                ctx.fill();
            }
        }
    };

    BBCCircleOverlay.prototype.redraw = function() {
        this.canvas_.getContext('2d').clearRect(0, 0, this.canvas_.width, this.canvas_.height);
        this.draw();
    };

    return BBCCircleOverlay;
});
