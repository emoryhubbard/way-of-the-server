import { qs, renderTemplateSelector, loadHeaderFooter } from '/js/utils.mjs';

loadHeaderFooter(setAbout);

function setAbout() {
    qs(".way-static-header__h1").innerHTML = "About";
}