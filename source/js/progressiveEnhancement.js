define(['wrapper', 'jquery'], function (wrapper, $) {

    var ProgressiveEnhancement = function () {};

    ProgressiveEnhancement.prototype = {
        init: function () {
            $('.bbc-news-vj-wrapper').addClass('bbc-news-vj-wrapper--js-enabled');
            //to apply svg over png fallbacks
            if (cutsTheMustard()){
                $('.chart--one').addClass('chart--one--js-enabled');
                $('.chart--two').addClass('chart--two--js-enabled');
            }
        }
    };

    return new ProgressiveEnhancement();

});