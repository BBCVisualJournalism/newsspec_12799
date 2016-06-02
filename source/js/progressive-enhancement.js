define(['wrapper', 'jquery'], function (wrapper, $) {

    var ProgressiveEnhancement = function () {};

    ProgressiveEnhancement.prototype = {
        init: function () {
            $('.bbc-news-vj-wrapper').addClass('bbc-news-vj-wrapper--js-enabled');
        }
    };

    return new ProgressiveEnhancement();

});