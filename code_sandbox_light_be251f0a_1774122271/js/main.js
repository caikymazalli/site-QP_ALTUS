/* ============================================================
   QP ALTUS — main.js
   Navbar scroll, mobile menu, FAQ accordion, AOS animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile hamburger menu ----
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on nav link click (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Dropdown toggle on mobile (tap) ----
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = trigger.closest('.has-dropdown');
        const dropdown = parent.querySelector('.dropdown');
        if (dropdown) {
          const isOpen = dropdown.style.display === 'block';
          // Close all dropdowns first
          document.querySelectorAll('.has-dropdown .dropdown').forEach(d => {
            d.style.display = 'none';
          });
          if (!isOpen) dropdown.style.display = 'block';
        }
      }
    });
  });

  // ---- AOS-like scroll animations ----
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

    aosElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(function (fi) {
        fi.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ---- Mark active nav link based on current page ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ---- Contact form submission (mock) ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = '✓ Mensagem Enviada!';
        btn.style.background = '#2d7d46';
        btn.style.borderColor = '#2d7d46';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1200);
    });
  }

});
