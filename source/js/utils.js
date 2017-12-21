import $ from 'jquery';

const isElementInViewport = ($element, fully) => {
    const $window = $(window);

    const elementTop = $element.offset().top;
    const elementBottom = elementTop + $element.outerHeight();

    const windowTop = $window.scrollTop();
    const windowBottom = windowTop + $window.height();

    if (fully) {
        return ((elementBottom <= windowBottom) && (elementTop >= windowTop));
    }
    return ((elementTop <= windowBottom) && (elementBottom >= windowTop));
};

export default {
    isElementInViewport: isElementInViewport,
};
