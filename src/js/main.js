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
    const header = qs('.sidebar-header');
    const staticNav = qs('.static-nav');
    const transitionY = staticNav.offsetTop + staticNav.clientHeight;

    if (window.pageYOffset < transitionY - header.clientHeight
        && !header.classList.contains('sidebar-header_jeans-blue')) {
        toggle('.sidebar-header', 'sidebar-header_jeans-blue');
        header.classList.remove('sidebar-header_transparent');
        header.classList.remove('sidebar-header_deep-blue');
    }
    if (window.pageYOffset >= transitionY - header.clientHeight
        && window.pageYOffset <= transitionY
        && !header.classList.contains('sidebar-header_transparent')) {
        toggle('.sidebar-header', 'sidebar-header_transparent');
        header.classList.remove('sidebar-header_jeans-blue');
        header.classList.remove('sidebar-header_deep-blue');
    }
    if (window.pageYOffset > transitionY
        && !header.classList.contains('sidebar-header_deep-blue')) {
        toggle('.sidebar-header', 'sidebar-header_deep-blue');
        header.classList.remove('sidebar-header_transparent');
        header.classList.remove('sidebar-header_jeans-blue');
    }
}