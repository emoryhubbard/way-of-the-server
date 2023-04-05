import { renderTemplateSelector, loadHeaderFooter } from '/js/utils.mjs';


loadHeaderFooter();
loadBodyCopy();

async function loadBodyCopy() {
    await renderTemplateSelector(".way-table-of-contents");
    await renderTemplateSelector(".tutorial");
}

