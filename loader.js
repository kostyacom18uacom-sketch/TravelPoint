window.TpLoader = (function () {
  'use strict';

  var globeAnim = null;

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function initGlobe() {
    if (window.__tp_i18n_active) return;
    var container = document.getElementById('globe-animation');
    if (!container) return;
    if (!globeAnim) {
      globeAnim = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Globe.json'
      });
    } else {
      globeAnim.play();
    }
  }

  function run(customDuration, callback) {
    var loader = document.getElementById('page-loader');
    var counterEl = document.getElementById('loader-counter');
    var fillEl = document.getElementById('loader-bar-fill');

    document.body.style.overflow = 'hidden';
    if (loader) {
      loader.style.display = 'flex';
      loader.style.opacity = '1';
    }
    initGlobe();

    var duration = customDuration || (Math.random() * 2000 + 3000);
    var startTime = performance.now();

    function update(now) {
      var progress = Math.min((now - startTime) / duration, 1);
      var value = Math.floor(easeInOut(progress) * 100);
      if (counterEl) counterEl.innerText = value + '%';
      if (fillEl) fillEl.style.width = value + '%';
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setTimeout(function () {
          if (callback) callback();
          else hide();
        }, 200);
      }
    }
    requestAnimationFrame(update);
  }

  function hide() {
    var loader = document.getElementById('page-loader');
    if (!loader) return;
    loader.style.transition = 'opacity 0.7s ease';
    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
      document.body.style.overflow = '';
      if (globeAnim) globeAnim.pause();
    }, 700);
  }

  return { run: run, hide: hide, initGlobe: initGlobe };
})();
