// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open') ? 'true' : 'false');
    });
  }

  // Highlight the current page in the nav
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });

  // Scroll-reveal (progressive enhancement; no-op without IntersectionObserver)
  if ('IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.section-head, .sector-card, .project-card, .step, .entity-card, .contact-card'
    );
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t, i) {
      t.classList.add('reveal');
      t.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(t);
    });
  }
});
