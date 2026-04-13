(function() {
    let currentLang = localStorage.getItem('tp_lang') || 'sk';
    window.__translations = null;
    let globeAnim = null;

    /**
     * Recursive translation lookup
     */
    window.t = function(key) {
        if (!window.__translations || !window.__translations[currentLang]) return key;
        
        const keys = key.split('.');
        let result = window.__translations[currentLang];
        
        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                return key;
            }
        }
        return result;
    };

    /**
     * Apply translations to the DOM
     */
    window.applyTranslations = function() {
        // textContent / innerHTML
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = window.t(key);
        });

        // placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.setAttribute('placeholder', window.t(key));
        });

        // titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.setAttribute('title', window.t(key));
        });

        document.documentElement.lang = currentLang;
    };

    /**
     * easeInOut function from existing scripts
     */
    function easeInOut(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    /**
     * Initialize Lottie Globe
     */
    function initGlobe() {
        const container = document.getElementById('globe-animation');
        if (!container) return;
        
        if (globeAnim) {
            globeAnim.play();
            return;
        }

        // Use Lottie's destroy to clean up any previous instances on this container
        lottie.destroy('tp-global-globe');
        container.innerHTML = '';
        
        globeAnim = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'Globe.json',
            name: 'tp-global-globe'
        });
    }

    /**
     * Switch language with loader transition
     */
    window.setLang = function(lang) {
        if (lang === currentLang) return;
        
        currentLang = lang;
        localStorage.setItem('tp_lang', lang);

        const loader = document.getElementById('page-loader');
        const counterEl = document.getElementById('loader-counter');
        const fillEl = document.getElementById('loader-bar-fill');
        
        if (!loader) {
            window.applyTranslations();
            updateSwitcherUI();
            return;
        }

        // Set global flag to prevent page-specific scripts from triggering their own loader logic
        window.__tp_i18n_active = true;

        // Run loader
        document.body.style.overflow = 'hidden';
        loader.style.display = 'flex';
        loader.style.opacity = '1';
        initGlobe();

        const duration = 2000;
        const startTime = performance.now();

        function updateLoader(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOut(progress);
            const value = Math.floor(easedProgress * 100);

            if (counterEl) counterEl.innerText = value + '%';
            if (fillEl) fillEl.style.width = value + '%';

            if (progress < 1) {
                requestAnimationFrame(updateLoader);
            } else {
                setTimeout(() => {
                    // Hide loader
                    loader.style.transition = 'opacity 0.7s ease';
                    loader.style.opacity = '0';
                    
                    window.applyTranslations();
                    updateSwitcherUI();

                    setTimeout(() => {
                        loader.style.display = 'none';
                        document.body.style.overflow = '';
                        if (globeAnim) globeAnim.pause();
                        // Reset loader for next time
                        loader.style.transition = '';
                        window.__tp_i18n_active = false; // Reset flag
                    }, 700);
                }, 200);
            }
        }
        requestAnimationFrame(updateLoader);
    };

    /**
     * Update Switcher UI active state
     */
    function updateSwitcherUI() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    /**
     * Initialization
     */
    document.addEventListener('DOMContentLoaded', () => {
        fetch('translations.json')
            .then(response => response.json())
            .then(data => {
                window.__translations = data;
                window.applyTranslations();
                updateSwitcherUI();

                // Add click listeners to switcher buttons
                document.querySelectorAll('.lang-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const lang = btn.getAttribute('data-lang');
                        window.setLang(lang);
                    });
                });
            })
            .catch(error => console.error('Error loading translations:', error));
    });
})();
