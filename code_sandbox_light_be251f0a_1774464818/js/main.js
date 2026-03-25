/* ============================================================
   QP ALTUS — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile hamburger menu ----
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Dropdown toggle on mobile ----
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent   = trigger.closest('.has-dropdown');
        const dropdown = parent.querySelector('.dropdown');
        if (dropdown) {
          const isOpen = dropdown.style.display === 'block';
          document.querySelectorAll('.has-dropdown .dropdown').forEach(d => d.style.display = 'none');
          if (!isOpen) dropdown.style.display = 'block';
        }
      }
    });
  });

  // ---- AOS scroll animations ----
  const aosElements = document.querySelectorAll('[data-aos]');
  if (aosElements.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(function () {
            entry.target.classList.add('aos-animate');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    aosElements.forEach(el => observer.observe(el));
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(fi => fi.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ---- Smooth scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
          window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
        }
      }
    });
  });

  // ---- Active nav link ----
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === currentPath) {
      link.classList.add('active');
    } else if (href !== '/') {
      link.classList.remove('active');
    }
  });

  // ---- Contact form (mock) ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn          = contactForm.querySelector('.form-submit');
      const originalHTML = btn.innerHTML;
      btn.innerHTML  = 'Enviando…';
      btn.disabled   = true;
      setTimeout(function () {
        btn.innerHTML         = '✓ Mensagem Enviada!';
        btn.style.background  = '#2d7d46';
        btn.style.borderColor = '#2d7d46';
        setTimeout(function () {
          btn.innerHTML         = originalHTML;
          btn.style.background  = '';
          btn.style.borderColor = '';
          btn.disabled          = false;
          contactForm.reset();
        }, 3000);
      }, 1200);
    });
  }

});
