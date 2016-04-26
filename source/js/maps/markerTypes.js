define(['http://maps.google.com/maps/api/js'], function(GoogleMaps){
    markerTypes = {
        'grave': {
            url: 'icons/gravestone.svg',
            size: new google.maps.Size(16,17),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(8, 8.5)
        }
    };

    return markerTypes;
});