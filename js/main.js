(function () {
  'use strict';

  // - - - - - - - - - - - - - - - - - - - - - - Mobile Menu Toggle

  var menuToggle = document.querySelector('.js-menu-toggle');
  var body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      body.classList.toggle('menu--open');
    });

    // Close menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.nav__list__item__link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        body.classList.remove('menu--open');
      });
    });
  }


  // - - - - - - - - - - - - - - - - - - - - - - Active Link

  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  var navItems = document.querySelectorAll('.nav__list__item__link');

  navItems.forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath) {
      link.classList.add('active-link');
    }
  });


  // - - - - - - - - - - - - - - - - - - - - - - Gallery Grid

  var galleries = document.querySelectorAll('.gallery');

  galleries.forEach(function (gallery) {
    var columns = gallery.getAttribute('data-columns') || '2';
    gallery.classList.add('gallery--grid');

    // Wrap each image in a gallery item
    var images = gallery.querySelectorAll('img');
    var fragment = document.createDocumentFragment();

    images.forEach(function (img) {
      var item = document.createElement('div');
      item.className = 'gallery__item';

      var link = document.createElement('a');
      link.className = 'gallery__item__link';
      link.href = img.src;
      link.setAttribute('data-lightbox', '');

      img.parentNode.removeChild(img);
      link.appendChild(img);
      item.appendChild(link);
      fragment.appendChild(item);
    });

    gallery.innerHTML = '';
    gallery.appendChild(fragment);
  });


  // - - - - - - - - - - - - - - - - - - - - - - Lightbox

  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img src="" alt="">';
  document.body.appendChild(lightbox);

  var lightboxImg = lightbox.querySelector('img');

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-lightbox]');
    if (link) {
      e.preventDefault();
      lightboxImg.src = link.href;
      lightbox.classList.add('lightbox--active');
    }
  });

  lightbox.addEventListener('click', function () {
    lightbox.classList.remove('lightbox--active');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      lightbox.classList.remove('lightbox--active');
    }
  });


  // - - - - - - - - - - - - - - - - - - - - - - Image wrapping

  var contentImages = document.querySelectorAll('.single p > img:only-child');
  contentImages.forEach(function (img) {
    var p = img.parentNode;
    var wrap = document.createElement('div');
    wrap.className = 'image-wrap';
    p.parentNode.insertBefore(wrap, p);
    wrap.appendChild(img);
    p.parentNode.removeChild(p);
  });


  // - - - - - - - - - - - - - - - - - - - - - - Video wrapping

  var iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]');
  iframes.forEach(function (iframe) {
    var width = iframe.getAttribute('width') || 16;
    var height = iframe.getAttribute('height') || 9;
    var ratio = (height / width) * 100;

    var wrap = document.createElement('div');
    wrap.className = 'video-wrap';
    var video = document.createElement('div');
    video.className = 'video';
    video.style.paddingBottom = ratio + '%';

    iframe.parentNode.insertBefore(wrap, iframe);
    video.appendChild(iframe);
    wrap.appendChild(video);
  });


  // - - - - - - - - - - - - - - - - - - - - - - Table wrapping

  var tables = document.querySelectorAll('.single table');
  tables.forEach(function (table) {
    var wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });


  // - - - - - - - - - - - - - - - - - - - - - - Contact Form Validation

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var valid = true;
      var fields = form.querySelectorAll('.contact-form__input[required]');

      fields.forEach(function (field) {
        var item = field.closest('.contact-form__item');
        if (!field.value.trim()) {
          item.classList.add('contact-form__item--error');
          valid = false;
        } else {
          item.classList.remove('contact-form__item--error');
        }
      });

      // Honeypot check
      var gotcha = form.querySelector('.contact-form__gotcha input');
      if (gotcha && gotcha.value) {
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
      }
    });
  }


  // - - - - - - - - - - - - - - - - - - - - - - Scroll Reveal

  var revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }


  // - - - - - - - - - - - - - - - - - - - - - - Mermaid init

  if (typeof mermaid !== 'undefined') {
    var mermaidNodes = document.querySelectorAll('.mermaid:not([data-processed])');
    if (mermaidNodes.length) {
      try {
        mermaid.run({ nodes: Array.from(mermaidNodes) }).then(function () {
          if (window.scaleMermaidDiagrams) {
            window.scaleMermaidDiagrams();
          }
        });
      } catch (err) {
        console.warn('Mermaid render error:', err);
      }
    }
  }


  // - - - - - - - - - - - - - - - - - - - - - - Utterances injection

  var placeholders = document.querySelectorAll('.utterances-placeholder');
  placeholders.forEach(function (placeholder) {
    var script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', placeholder.getAttribute('data-repo'));
    script.setAttribute('issue-term', placeholder.getAttribute('data-issue-term'));
    if (placeholder.getAttribute('data-label')) {
      script.setAttribute('label', placeholder.getAttribute('data-label'));
    }
    script.setAttribute('theme', placeholder.getAttribute('data-theme'));
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;
    placeholder.appendChild(script);
  });

})();
