(function () {
  'use strict';

  var placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  placeholder.outerHTML = `
<footer class="footer">
    <div class="container">
        <div class="row footer-sections">

            <!-- LOGO + EMAIL FORM -->
            <div class="footer-section footer-left">
                <a class="footer-logo" href="index.html">
                    <img src="travelpoint-logo.svg" alt="Travel Point logo">
                </a>
                <h6 class="newsletter-title" data-i18n="footer.newsletter">Chcete dostávať najhorúcejšie ponuky</h6>
                <form class="newsletter-form">
                    <label for="newsletterEmail" class="visually-hidden">Váš email</label>
                    <input
                        type="email"
                        id="newsletterEmail"
                        class="form-control"
                        placeholder="Váš email"
                        data-i18n-placeholder="footer.newsletterPlaceholder"
                        required
                        title="Prosím, zadajte správny email (napr. meno@example.com)"
                        name="email"
                        autocomplete="email"
                    >
                    <button class="btn" type="submit" id="newsletterBtn">
                        <span class="spinner"></span>
                        <span class="btn-text" data-i18n="footer.newsletterBtn">Odoberať</span>
                    </button>
                </form>
            </div>

            <!-- FOOTER NAVIGATION -->
            <div class="footer-section footer-nav">
                <h5 data-i18n="footer.navTitle">NAVIGÁCIA</h5>
                <ul class="list-unstyled p-0">
                    <li class="nav-item"><a class="nav-link p-0" href="stub.html" data-i18n="nav.about">O nás</a></li>
                    <li class="nav-item"><a class="nav-link p-0" href="stub.html" data-i18n="nav.tours">Zájazdy</a></li>
                    <li class="nav-item"><a class="nav-link p-0" href="stub.html" data-i18n="nav.contacts">Kontakty</a></li>
                </ul>
            </div>

            <!-- FOOTER CONTACT -->
            <div class="footer-section footer-contact">
                <h5 data-i18n="footer.contactTitle">KONTAKT</h5>
                <div class="contact-item">
                    <img src="phone.svg" alt="Telefon" class="contact-icon">
                    <a href="tel:+421333222111" class="nav-link">+421 333 222 111</a>
                </div>
                <div class="contact-item">
                    <img src="email.svg" alt="Email" class="contact-icon">
                    <a href="mailto:travelpoint@info.sk" class="nav-link">travelpoint@info.sk</a>
                </div>
                <div class="contact-item">
                    <img src="location.svg" alt="Adresa" class="contact-icon">
                    <a href="https://www.google.com/maps/place/Ko%C5%A1ice" target="_blank" rel="noopener noreferrer" class="nav-link">Košice, Slovensko</a>
                </div>
            </div>

            <!-- SOCIAL MEDIA -->
            <div class="footer-section footer-social">
                <h5 data-i18n="footer.socialTitle">SOCIÁLNE SIETE</h5>
                <div class="contact-item">
                    <img src="instagram.svg" alt="Instagram" class="contact-icon-social">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="nav-link">Instagram</a>
                </div>
                <div class="contact-item">
                    <img src="tiktok.svg" alt="TikTok" class="contact-icon-social">
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" class="nav-link">TikTok</a>
                </div>
                <div class="contact-item">
                    <img src="youtube.svg" alt="YouTube" class="contact-icon-social">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" class="nav-link">YouTube</a>
                </div>
            </div>
        </div>

        <!-- COPYRIGHT -->
        <div class="footer-copy" data-i18n="footer.copy">
            © 2025 Travel Point. Všetky práva vyhradené.
        </div>
    </div>
</footer>`;

  // Newsletter form logic
  var newsletterForm = document.querySelector('.newsletter-form');
  var newsletterBtn = document.getElementById('newsletterBtn');

  if (newsletterForm && newsletterBtn) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btnText = newsletterBtn.querySelector('.btn-text');
      newsletterBtn.classList.add('loading');
      newsletterBtn.disabled = true;
      setTimeout(function () {
        newsletterBtn.classList.remove('loading');
        newsletterBtn.classList.add('success');
        if (btnText) btnText.innerText = 'Odoslané!';
        setTimeout(function () {
          newsletterBtn.classList.remove('success');
          newsletterBtn.disabled = false;
          if (btnText) btnText.innerText = 'Odoberať';
          newsletterForm.reset();
        }, 3000);
      }, 1500);
    });
  }
})();
