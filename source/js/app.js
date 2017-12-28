import * as wrapper from 'wrapper';
import $ from 'jquery';
import ShareTools from 'ShareTools';
import ShareToolsTemplateForSport from 'ShareToolsTemplateForSport';
import pubsub from './pubsub';
import vocabs from './vocabs';
import istatsLogger from './istatsLogger';
import VideoPlayer from './video';

const version = '0.1.89';

// /* --------------------------------- video stuff ---------------------------- */
function initVideo() {
    const videoSelectors = [
        '#bbc-news-vj-video--drone',
        '#bbc-news-vj-video--lesbos',
        '#bbc-news-vj-video--voices',
    ];

    const videoPids = [
        vocabs.video_1_id,
        vocabs.video_2_id,
        vocabs.video_3_id,
    ];

    const pageIsEnglish = $('.bbc-news-vj-wrapper').hasClass('bbc-news-vj-language--news');
    let holdingImg1 = '';
    let holdingImg3 = '';

    if (pageIsEnglish) {
        holdingImg1 = $('#drone_poster--english').text();
        holdingImg3 = $('#voices_poster--english').text();
    }
    else {
        holdingImg1 = $('#drone_poster--other').text();
        holdingImg3 = $('#voices_poster--other').text();
    }

    const videoHoldingImgs = [
        holdingImg1,
        $('#lesbos_poster').text(),
        holdingImg3,
    ];

    // videoContainerSelector, vpid, holdingImage, autoplay, embedURL, ctaEnabled, controlsEnabled
    const VideoPlayers = [
        // eslint-disable-next-line max-len
        new VideoPlayer(videoSelectors[0], videoPids[0], videoHoldingImgs[0], false, '', true, true),
        // eslint-disable-next-line max-len
        new VideoPlayer(videoSelectors[1], videoPids[1], videoHoldingImgs[1], false, '', true, true),
        // eslint-disable-next-line max-len
        new VideoPlayer(videoSelectors[2], videoPids[2], videoHoldingImgs[2], false, '', true, true),
    ];

    function pauseVideo(index) {
        const videosToPause = VideoPlayers.slice(0); // clone the videos array
        videosToPause.splice(index, 1);
        for (let i = 0; i < videosToPause.length; i++) {
            videosToPause[i].pause();
        }
    }

    function setAutopauseEvent(videoIndex) {
        $.on(`video-playing-${videoSelectors[videoIndex]}`, () => {
            pauseVideo(videoIndex);
        });
    }

    for (let i = 0; i < videoSelectors.length; i++) {
        setAutopauseEvent(i);
    }
}

// *------------------------------- share stuff ------------------------------- */
function initShareTools() {
    let shareHeader = vocabs.share_header;
    const shareTitle = vocabs.share_title;
    let shareMessage = vocabs.share_message;

    if (shareHeader === '') {
        shareHeader = 'Share this Page';
    }
    if (shareMessage === '') {
        shareMessage = vocabs.isite_meta_description;
    }

    const config = {
        holderEl: '.share__holder',
        label: shareHeader,
        shareUrl: wrapper.url().hostUrl,
        // shareUrl: vocabs.share_url,
        messages: {
            twitter: shareMessage,
            facebook: {
                title: vocabs.share_fb_title,
                description: vocabs.share_fb_message,
                image: $('#fb_share_img').text(),
            },
            email: {
                subject: shareHeader,
                message: shareMessage,
            },
            app: {
                shareEndpoint: 'bbcnewsapp://visualjournalism/share',
                popup: false,
                properties: {
                    title: shareHeader,
                    text: shareMessage,
                },
            },
        },
        template: ShareToolsTemplateForSport,
    };

    if (wrapper.wrapper === 'app') {
        // we often want to deliver a different share view to the app
        config.template = `
                <div class="share ns__share ns__share-dropdown ns__share--app"
                    <a class="share__button share__png_icon share__tool--network" data-network="app" href="#"></a>\
                </div>`;
    }
    const shareObject = new ShareTools(config);
}


// *------------------------------- map stuff ------------------------------- */

/*
function initMaps() {
    const $map1 = $('#graveyard-map--one__container');
    map();
}
*/

// *------------------------------- init ------------------------------- */
function init() {
    $('.bbc-news-vj-wrapper').addClass('bbc-news-vj-wrapper--js-enabled');
    initVideo();
    initShareTools();
    istatsLogger.init();
    wrapper.markPageAsLoaded();
}

init();
