define(['http://maps.google.com/maps/api/js?v=3.22'], function(GoogleMaps){
    markerTypes = {
        'grave': {
            url: '../common/img/gravestone.svg',
            size: new google.maps.Size(16,17),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(8, 8.5)
        }
    };

    return markerTypes;
});