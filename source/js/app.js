define(['wrapper', 'jquery', 'ShareTools', 'ShareToolsTemplate', 'video', 'pubsub', 'progressiveEnhancement'], function (wrapper, $, ShareTools, ShareTemplate, VideoPlayer, pubsub, progressiveEnhancement) {

    // console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var version = '0.1.0';

    var videoSelectors = [
        '#bbc-news-vj-video--drone',
        '#bbc-news-vj-video--lesbos',
        '#bbc-news-vj-video--undertaker'
    ];

    var videoPids = [
        'p03lsq25',
        'p03lsq25',
        'p03lsq25'
    ];

    var videoHoldingImgs = [
        'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/mami-dog-cropped.jpg' + '?v=' + version,
        'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/sharon.jpg' + '?v=' + version,
        'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/daniele.jpg' + '?v=' + version
    ];

    //                  videoContainerSelector, vpid, holdingImage, autoplay, embedURL, ctaEnabled, controlsEnabled
    var videoPlayers = [
        new VideoPlayer(videoSelectors[0], videoPids[0], videoHoldingImgs[0], false, '', true, true),
        new VideoPlayer(videoSelectors[1], videoPids[1], videoHoldingImgs[1], false, '', true, true),
        new VideoPlayer(videoSelectors[2], videoPids[2], videoHoldingImgs[2], false, '', true, true)
    ];

    function pauseVideo(index) {
        var videosToPause = videos.slice(0); // clone the videos array
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

    var shareTitle   = 'Share this content',
        shareMessage = 'This is my share message',
        config = {
            holderEl: '.tmpShareToolsHolder',
            label: 'Share this page',
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

    // wrapper.onOptimizedScroll(function (scrollTop) {
    //     console.log('Optimized scroll.', scrollTop);
    // });

    // wrapper.onRawScroll(function (scrollTop) {
    //     console.log('Raw scroll.', scrollTop);
    // });

    // setTimeout(function () {
    //     wrapper.callIstats({
    //         actionType: 'panel-clicked',
    //         actionName: 'newsspec-interaction',
    //         viewLabel:  3
    //     });
    // }, 500);

    // setTimeout(function () {
    //     wrapper.callIstats({
    //         actionType: 'app loaded',
    //         actionName: 'newsspec-nonuser',
    //         viewLabel:  true
    //     });
    // }, 2000);

    wrapper.markPageAsLoaded();

    progressiveEnhancement.init();



});
