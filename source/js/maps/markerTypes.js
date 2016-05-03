define(['http://maps.google.com/maps/api/js?v=3.22'], function(GoogleMaps){
    markerTypes = {
        'grave': {
            url: 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12799/content/full-width/common/img/gravestone-0.1.png',
            size: new google.maps.Size(17,19),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(8, 8.5)
        }
    };

    return markerTypes;
});