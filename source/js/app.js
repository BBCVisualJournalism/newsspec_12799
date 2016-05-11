define(['http://maps.google.com/maps/api/js?v=3.22&client=gme-britishbroadcasting&channel=mtk-v3-schoolreport-2014', 'maps/map', 'wrapper', 'jquery', 'ShareTools', 'ShareToolsTemplate', 'istatsLogger', 'video', 'pubsub', 'vocabs', 'progressiveEnhancement'],
    function (GoogleMaps, map, wrapper, $, ShareTools, ShareTemplate, istatsLogger, VideoPlayer, pubsub, vocabs, progressiveEnhancement) {

    // console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var version = '0.1.5';

    ///* --------------------------------- video stuff ---------------------------- */
    function initVideo() {
        var videoSelectors = [
            '#bbc-news-vj-video--drone',
            '#bbc-news-vj-video--lesbos',
            '#bbc-news-vj-video--voices'
        ];

        var videoPids = [
            vocabs.video_1_id,
            vocabs.video_2_id,
            vocabs.video_3_id
        ];

        var pageIsEnglish = $('.bbc-news-vj-wrapper').hasClass('bbc-news-vj-language--news'),
            holdingImg1='';
            holdingImg3='';

        if(pageIsEnglish){
            holdingImg1 = $('#drone_poster--english').text();
            holdingImg3 = $('#voices_poster--english').text();
        } else {
            holdingImg1 = $('#drone_poster--other').text();
            holdingImg3 = $('#voices_poster--other').text();
        }

        var videoHoldingImgs = [
           holdingImg1,
            $('#lesbos_poster').text(),
            holdingImg3
        ];

        //                  videoContainerSelector, vpid, holdingImage, autoplay, embedURL, ctaEnabled, controlsEnabled
        var videoPlayers = [
            new VideoPlayer(videoSelectors[0], videoPids[0], videoHoldingImgs[0], false, '', true, true),
            new VideoPlayer(videoSelectors[1], videoPids[1], videoHoldingImgs[1], false, '', true, true),
            new VideoPlayer(videoSelectors[2], videoPids[2], videoHoldingImgs[2], false, '', true, true)
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
        var shareHeader  = vocabs.share_header,
            shareTitle   = vocabs.share_title,
            shareMessage = vocabs.share_message;

        if (shareHeader   === ''){ shareHeader = 'Share this Page'; }
        if (shareMessage  === ''){ shareMessage = vocabs.isite_meta_description; }

        var config = {
                holderEl: '.share__holder',
                label: shareHeader,
                shareUrl: wrapper.url().hostUrl,
                // shareUrl: vocabs.share_url,
                messages: {
                    twitter: shareMessage,
                    facebook: {
                        title:       vocabs.share_fb_title,
                        description: vocabs.share_fb_message,
                        image:       $('#fb_share_img').text()
                    },
                    email: {
                        subject: shareHeader,
                        message: shareMessage
                    },
                    app: {
                        shareEndpoint: 'bbcnewsapp://visualjournalism/share',
                        popup: false,
                        properties: {
                            title: shareHeader,
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
        initMaps();
        initVideo();
        initShareTools();
        istatsLogger.init();
        wrapper.markPageAsLoaded();
        progressiveEnhancement.init();
    }

    init();

});
