define(['http://maps.google.com/maps/api/js?v=3.22', 'maps/map', 'wrapper', 'jquery', 'ShareTools', 'ShareToolsTemplate', 'istatsLogger', 'video', 'pubsub', 'vocabs', 'progressiveEnhancement'],
    function (GoogleMaps, map, wrapper, $, ShareTools, ShareTemplate, istatsLogger, VideoPlayer, pubsub, vocabs, progressiveEnhancement) {

    // console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var version = '0.1.1';

    ///* --------------------------------- video stuff ---------------------------- */
    function initVideo() {
        var videoSelectors = [
            '#bbc-news-vj-video--drone',
            '#bbc-news-vj-video--lesbos'
        ];

        var videoPids = [
            vocabs.video_1_id,
            vocabs.video_2_id
        ];

        var videoHoldingImgs = [
            'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12799/content/full-width/common/img/drone_video_poster_1040.jpg' + '?v=' + version,
            'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12799/content/full-width/common/img/arrival_image_1040.jpg' + '?v=' + version
        ];

        //                  videoContainerSelector, vpid, holdingImage, autoplay, embedURL, ctaEnabled, controlsEnabled
        var videoPlayers = [
            new VideoPlayer(videoSelectors[0], videoPids[0], videoHoldingImgs[0], true, '', true, true),
            new VideoPlayer(videoSelectors[1], videoPids[1], videoHoldingImgs[1], false, '', true, true)
        ];

        function pauseVideo(index) {
            var videosToPause = videoPlayers.slice(0); // clone the videos array
            videosToPause.splice(index, 1);
            for (var i = 0; i < videosToPause.length; i++) {
                videosToPause[i].pause();
            }
        }

        function setAutopauseEvent(videoIndex) {
            $.on('video-playing-' + videoSelectors[videoIndex], function () {
                pauseVideo(videoIndex);
            });
        }

        for (var i = 0; i < videoSelectors.length; i++) {
            setAutopauseEvent(i);
        }
    }

//*------------------------------- share stuff ------------------------------- */
    function initShareTools() {
        var shareTitle   = vocabs.share_title;
        var shareMessage = vocabs.share_message;
        if (shareTitle   === ''){ shareTitle = 'Share this Page'; }
        if (shareMessage === ''){ shareMessage = vocabs.isite_meta_description; }
        var config = {
                holderEl: '.share__holder',
                label: shareTitle,
                shareUrl: wrapper.url().hostUrl,
                messages: {
                    twitter: shareMessage,
                    facebook: {
                        title:       shareTitle,
                        description: shareMessage,
                        image:       'http://www.stage.bbc.co.uk/news/special/2016/newsspec_13606/content/iframe/common/img/promo.jpg' // optional
                    },
                    email: {
                        subject: shareTitle,
                        message: shareMessage
                    },
                    app: {
                        shareEndpoint: 'bbcnewsapp://visualjournalism/share',
                        popup: false,
                        properties: {
                            title: shareTitle,
                            text: shareMessage
                        }
                    }
                },
                template: ShareTemplate
            };
        if (wrapper.wrapper === 'app') {
            // we often want to deliver a different share view to the app
            config.template = '\
                <div class="share ns__share ns__share-dropdown ns__share--app">\
                    <a class="share__button share__png_icon share__tool--network" data-network="app" href="#"></a>\
                </div>';
        }
        var shareObject = new ShareTools(config);
    }


//*------------------------------- map stuff ------------------------------- */

    function initMaps() {
        var $map1 = $('#graveyard-map--one__container');
        map();
    }

//*------------------------------- init ------------------------------- */
    function init(){
        progressiveEnhancement.init();
        initVideo();
        initShareTools();
        initMaps();
        istatsLogger.init();
        wrapper.markPageAsLoaded();
    }

    init();

});
