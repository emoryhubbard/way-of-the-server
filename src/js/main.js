import { qs, toggle, setClicks } from '/js/utils.mjs';

window.onscroll = setHeaderBackground;

setClicks(toggleButton, ".menu-icon");

function toggleButton(e) {
    toggle(".top", "top-close");
    toggle(".middle", "middle-close");
    toggle(".bottom", "bottom-close");
    toggle(".menu-icon", "menu-close");
    toggle(".slideout", "slideout-open");
}

function setHeaderBackground() {
    const header = qs('.way-sticky-header');
    const staticNav = qs('.way-static-header');
    const transitionY = staticNav.offsetTop + staticNav.clientHeight;

    if (window.pageYOffset < transitionY - header.clientHeight
        && !header.classList.contains('way-sticky-header_jeans-blue')) {
        toggle('.way-sticky-header', 'way-sticky-header_jeans-blue');
        header.classList.remove('way-sticky-header_transparent');
        header.classList.remove('way-sticky-header_deep-blue');
    }
    if (window.pageYOffset >= transitionY - header.clientHeight
        && window.pageYOffset <= transitionY
        && !header.classList.contains('way-sticky-header_transparent')) {
        toggle('.way-sticky-header', 'way-sticky-header_transparent');
        header.classList.remove('way-sticky-header_jeans-blue');
        header.classList.remove('way-sticky-header_deep-blue');
    }
    if (window.pageYOffset > transitionY
        && !header.classList.contains('way-sticky-header_deep-blue')) {
        toggle('.way-sticky-header', 'way-sticky-header_deep-blue');
        header.classList.remove('way-sticky-header_transparent');
        header.classList.remove('way-sticky-header_jeans-blue');
    }
}