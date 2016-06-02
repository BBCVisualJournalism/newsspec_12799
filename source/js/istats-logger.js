define(['wrapper', 'jquery', 'utils'], function (wrapper, $, utils) {
    var sectionElements = {
        'section-hero': {
            element: $('#section--hero'),
            reached: false
        },
        'section-one': {
            element: $('#section--one'),
            reached: false
        },
        'drone-video': {
            element: $('#bbc-news-vj-video--drone'),
            reached: false
        },
        'section-two': {
            element: $('#section--two'),
            reached: false
        },
        'graveyard-map--one': {
            element: $('#graveyard-map--one'),
            reached: false
        },
        'graveyard-map--two': {
            element: $('#graveyard-map--two'),
            reached: false
        },
        'graveyard-map--three': {
            element: $('#graveyard-map--three'),
            reached: false
        },
        'section-three': {
            element: $('#section--three'),
            reached: false
        },
        'case-study-image': {
            element: $('#case-study__image'),
            reached: false
        },
        'lesbos-video': {
            element: $('#bbc-news-vj-video--lesbos'),
            reached: false
        },
        'section-four': {
            element: $('#section--four'),
            reached: false
        },
        // 'lesbos-map-image': {
        //     element: $('#lesbos-map__image'),
        //     reached: false
        // },
        'section-five': {
            element: $('#section--five'),
            reached: false
        },
        'section-method': {
            element: $('#section--method'),
            reached: false
        },
        'section-footer': {
            element: $('#section--footer'),
            reached: false
        }
    };

    var handleScroll = function () {
        for (var key in sectionElements) {
            if (utils.isElementInViewport(sectionElements[key].element)) {
                if (!sectionElements[key].reached) {
                    sectionElements[key].reached = true;
                    var istatsInfo = {
                        actionName: 'newsspec-interaction',
                        actionType: '' + key + '-reached',
                        viewLabel: true
                    };
                    // console.log(istatsInfo);
                    wrapper.callIstats(istatsInfo);
                }
            }
        }
    };

    var setShareToolsLogging = function () {
        $('.share__tool').on('click', function () {
            var parent = $(this).parents('.bbc-news-vj-sharetools');
            var shareToolsIndex = parent.attr('id').split('--')[1];
            var istatsInfo = {
                actionName: 'newsspec-interaction',
                actionType: 'user-shared',
                viewLabel: shareToolsIndex
            };
            // console.log(istatsInfo);
            wrapper.callIstats(istatsInfo);
        });
    };

    var init = function () {
        wrapper.onRawScroll(handleScroll);
        setShareToolsLogging();
    };

    return {
        init: init
    };
});