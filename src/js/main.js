import { qs, renderTemplateSelector, loadHeaderFooter } from '/js/utils.mjs';

loadHeaderFooter(setHome);

function setHome() {
    qs(".way-static-header__h1").innerHTML = "Home";
}

