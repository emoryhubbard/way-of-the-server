const templateURL = '../templates/';

export async function loadHeaderFooter(callback = null) {
  await renderTemplateSelector(".way-sticky-header");
  await renderTemplateSelector(".way-static-header");
  await renderTemplateSelector(".way-footer");
  await renderAllTemplateSelector(".way-logo");

  initializeStickyHeader();
  if (callback !=null)
    callback();
  qs(".way-static-header__h1").style.display = "block";
}

export async function renderTemplateSelector(selectorParam) {
  const name = selectorParam.substring(1);
  await renderTemplatePath({path: `${templateURL}${name}.html`, selector: selectorParam});
}

export async function renderTemplatePath({path, selector, callback = null,
  position = "after", clear = false }={}) {

  const template = await loadTemplate(path);
  const element = qs(selector);

  if (clear) {element.innerHTML = ""};  // empty element first if so directed
  element.insertAdjacentHTML(`${position}begin`, template);

  if (callback != null)
    callback();
}

export async function loadTemplate(path) {
  const response = await fetch(path);
  return response.text();
}

export async function renderAllTemplateSelector(selectorParamParam) {
  const name = selectorParamParam.substring(1);
  await renderAllTemplatePath({pathParam: `${templateURL}${name}.html`, selectorParam: selectorParamParam});
}

export async function renderAllTemplatePath({pathParam, selectorParam, callbackParam = null,
  positionParam = "after", clearParam = false }={}) {

  const elements = document.querySelectorAll(selectorParam);
  for (const current of elements)
    await renderTemplatePathWithElement({path: pathParam, element: current, position: positionParam, clear: clearParam});

  if (callbackParam != null)
    callbackParam();
}

export async function renderTemplatePathWithElement({path, element, callback = null,
  position = "after", clear = false }={}) {
  const template = await loadTemplate(path);

  if (clear) {element.innerHTML = ""};  // empty element first if so directed
  element.insertAdjacentHTML(`${position}begin`, template);

  if (callback != null)
    callback();
}

export function initializeStickyHeader() {
  window.onscroll = setHeaderBackground;
    setClicks(toggleButton, ".menu-icon");
}

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

export function renderTemplate({element, template, callback = null,
    position = "after", clear = false }={}) {

    if (clear) {element.innerHTML = ""};  // empty element first if so directed
    element.insertAdjacentHTML(`${position}begin`, template);

    if (callback != null)
      callback();
  }

  export function renderList({templateFunction, element, list,
    position = "after", clear = false }={}) {
    let templates = "";
    for (const item of list) {
      templates += templateFunction(item); // add all templates
    }

    if (clear) {element.innerHTML = ""};  // empty element first if so directed
    element.insertAdjacentHTML(`${position}begin`, templates);
  }

  export function getParam(param) {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    return urlParams.get(param);
  }

  // wrapper for querySelector...returns matching element
  export function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }
  // or a more concise version if you are into that sort of thing:
  // export const qs = (selector, parent = document) => parent.querySelector(selector);

  // retrieve data from localstorage
  export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
  export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  // set a listener for both touchend and click
  export function setClick(selector, callback) {
    qs(selector).addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    qs(selector).addEventListener("click", callback);
  }
  export function toggle(selector, className) {
    qs(selector).classList.toggle(className);
  }

  export function setClicks(callback, ...selectors) {
    for (const selector of selectors)
      setClick(selector, callback);
  }