define(['wrapper', 'jquery'], function (wrapper, $) {

    var ProgressiveEnhancement = function () {};

    ProgressiveEnhancement.prototype = {
        init: function () {
            $('.bbc-news-vj-wrapper').addClass('bbc-news-vj-wrapper--js-enabled');
            //to apply svg over png fallbacks
            if (cutsTheMustard()){
                $('.section--five__chart--one').addClass('section--five__chart--one--js-enabled');
                $('.section--five__chart--two').addClass('section--five__chart--two--js-enabled');
            }
        }
    };

    return new ProgressiveEnhancement();

});