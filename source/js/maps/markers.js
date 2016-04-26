define(function() {
    var markers = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [25,40]
                },
                'properties': {
                    'title': 'Test',
                    'icon': 'grave'
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [22,39]
                },
                'properties': {
                    'title': 'Test',
                    'icon': 'grave'
                }
            },
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [23,41]
                },
                'properties': {
                    'title': 'Test',
                    'icon': 'grave'
                }
            }
        ]
    };

    return markers;
});