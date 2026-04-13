(function () {
  'use strict';

  // Inject cursor element (single source of truth — removed from HTML)
  var cursorEl = document.createElement('div');
  cursorEl.id = 'custom-cursor';
  cursorEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="#eae902" d="m941.02 82.602.325.451c-3.641 10.133-9.164 22.301-13.364 32.479l-19.612 48.618-24.109 58.64c-8.674 21.107-15.25 42.722-31.575 59.456-8.131 8.334-16.985 15.776-25.712 23.464a1143 1143 0 0 0-23.949 21.731l-184.87 167.815-52.432 47.696c-19.571 17.704-34.368 28.014-45.326 53.554-9.687 22.577-11.878 43.63-14.883 67.784-1.593 12.801-3.85 26.009-5.639 38.805a3102 3102 0 0 1-15.243 97.167c-6.902 39.415-12.771 81.379-37.372 114.298-6.991 9.354-18.439 20.947-28.517 26.896-1.528-15.09-4.504-31.899-6.824-46.964l-16.637-102.067-8.136-51.484c-4.902-31.63-6.452-48.635-28.69-74.207-27.827-28.579-56.233-31.25-93.493-35.662a2405 2405 0 0 1-39.238-4.976 4926 4926 0 0 0-102.078-13.067c-13.757-1.679-28.183-3.904-41.904-5.207 15.32-30.26 44.134-49.943 76.032-59.429 44.276-13.167 92.297-17.974 138.29-22.04a3253 3253 0 0 1 50.781-3.698c21.647-1.605 36.457.408 58.095-5.745a139.6 139.6 0 0 0 52.013-27.758c9.352-7.816 15.474-15.616 23.507-24.525l37.858-42.5 156.087-174.182 46.92-51.118c13.656-14.612 21.016-23.918 37.376-36.095 20.507-15.262 43.335-22.324 67.017-31.811l72.127-28.986c13.942-5.537 29.593-11.128 43.175-17.333"/><path fill="#eae902" d="m121.415 532.306 120.694-118.56 42.835-42.188c13.196-12.877 23.888-23.227 37.975-35.038 72.853-61.082 164.756-85.734 258.602-85.469 19.122.054 36.186 1.649 55.093 2.706-5.332 6.215-16.046 15.575-22.317 21.744l-58.872 57.245-68.029 66.507c-26.632 26.167-53.216 55.858-88.333 70.656-23.69 9.984-49.711 9.09-74.819 11.985-61.513 6.206-150.036 16.236-201.534 52.602z"/><path fill="#eae902" d="M486.998 900.767c23.59-36.398 34.984-89.001 43.322-130.966a1421 1421 0 0 0 12.58-70.29c5.068-32.714 5.84-59.795 21.802-90.029 12.645-23.951 24.697-34.38 43.536-53.042l43.911-43.742 73.824-73.429a4273 4273 0 0 1 33.013-32.535c4.434-4.349 10.597-10.928 15.009-14.819.562 7.334-.106 14.798.098 22.019.414 14.664-.469 29.437-1.275 43.942-5.735 103.262-43.489 208.478-119.899 280.5-3.794 3.576-7.61 7.559-11.349 11.288a5081 5081 0 0 1-57.026 56.893l-78.1 78.507c-5.534 5.487-11.356 12.422-16.805 17.562-1.129-.678-1.604-1.035-2.641-1.859"/><path fill="#f6e63c" fill-opacity=".98" d="M481.235 909.571c1.918-2.933 3.936-5.815 5.763-8.804 1.037.824 1.512 1.181 2.641 1.859-2.263 2.478-5.115 5.042-7.475 7.519z"/><path fill="#f6e63c" fill-opacity=".973" d="M112.591 541.341c2.591-2.959 5.81-6.498 8.824-9.035l1.295 2.19c-3.422 2.439-6.472 4.766-10.119 6.845"/><path fill="#eae902" fill-opacity=".827" d="m481.235 909.571.929.574c-.302.294-1.331 1.459-1.831 1.454-.282-.527.622-1.609.902-2.028"/></svg>';
  document.body.insertBefore(cursorEl, document.body.firstChild);

  var cursor = cursorEl;
  var mouseX = window.innerWidth / 2;
  var mouseY = window.innerHeight / 2;
  var curX = mouseX, curY = mouseY;
  var angle = 0;
  var targetAngle = 0;
  var prevMouseX = mouseX, prevMouseY = mouseY;

  var scale = 1;
  var targetScale = 1;

  cursor.style.opacity = '0';

  document.addEventListener('mousemove', function (e) {
    var dx = e.clientX - prevMouseX;
    var dy = e.clientY - prevMouseY;
    if (dx * dx + dy * dy > 1) {
      targetAngle = Math.atan2(dy, dx) * 180 / Math.PI;
    }
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor.style.opacity === '0') cursor.style.opacity = '1';
  });

  function lerpAngle(current, target, t) {
    var d = target - current;
    while (d > 180) d -= 360;
    while (d < -180) d += 360;
    return current + d * t;
  }

  function tick() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;

    angle = lerpAngle(angle, targetAngle, 0.1);
    scale += (targetScale - scale) * 0.12;

    cursor.style.transform =
      'translate(' + (curX - 16) + 'px, ' + (curY - 16) + 'px) ' +
      'rotate(' + angle + 'deg) ' +
      'scale(' + scale + ')';

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  var HOVER_SEL = [
    'a', 'button', '.feature-card', '.btn', '.nav-link',
    '.accordion-button', '.form-control', '.form-select', 'input', 'textarea'
  ].join(', ');

  document.addEventListener('mouseenter', function (e) {
    if (e.target && typeof e.target.matches === 'function' && e.target.matches(HOVER_SEL)) {
      targetScale = 1.2;
      cursor.classList.add('is-hovered');
    }
  }, true);

  document.addEventListener('mouseleave', function (e) {
    if (e.target && typeof e.target.matches === 'function' && e.target.matches(HOVER_SEL)) {
      targetScale = 1;
      cursor.classList.remove('is-hovered');
    }
  }, true);
})();
