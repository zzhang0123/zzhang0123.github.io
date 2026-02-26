/**
 * site-custom.js
 *
 * Runs after journal-min.js to handle things that minified theme code cannot:
 *   1. Mermaid diagram rendering (initial + after AJAX navigation)
 *   2. Utterances comment widget injection (initial + after AJAX navigation)
 *   3. Masonry gallery relayout on window resize
 *
 * journal-min.js (the served minified build) does NOT include the Mermaid or
 * Utterances logic that exists in journal.js (the editable source), so this
 * file fills that gap without touching the minified bundle.
 */
(function () {
  'use strict';

  // Render any .mermaid elements that haven't been processed yet.
  // mermaid.html sets startOnLoad:false and exposes window.scaleMermaidDiagrams.
  function runMermaidDiagrams() {
    if (typeof mermaid === 'undefined') return;
    var nodes = document.querySelectorAll('.mermaid:not([data-processed])');
    if (!nodes.length) return;
    mermaid.run({ nodes: Array.from(nodes) }).then(function () {
      // Small delay lets Mermaid finish writing SVG attributes
      setTimeout(function () {
        if (typeof window.scaleMermaidDiagrams === 'function') {
          window.scaleMermaidDiagrams();
        }
      }, 100);
    }).catch(function (e) {
      console.warn('Mermaid render error:', e);
    });
  }

  // Replace each .utterances-placeholder <div> with a real Utterances <script>.
  // comments.html uses this placeholder pattern because jQuery .load() strips
  // <script> tags from AJAX-loaded content.
  function injectUtterances() {
    document.querySelectorAll('.utterances-placeholder').forEach(function (el) {
      var s = document.createElement('script');
      s.src = 'https://utteranc.es/client.js';
      s.setAttribute('repo',        el.getAttribute('data-repo'));
      s.setAttribute('issue-term',  el.getAttribute('data-issue-term'));
      s.setAttribute('label',       el.getAttribute('data-label'));
      s.setAttribute('theme',       el.getAttribute('data-theme'));
      s.setAttribute('crossorigin', 'anonymous');
      s.async = true;
      el.parentNode.replaceChild(s, el);
    });
  }

  // Run all page-content initializers.
  function initPageContent() {
    runMermaidDiagrams();
    injectUtterances();
  }

  document.addEventListener('DOMContentLoaded', function () {

    // Initial run for the first page load.
    initPageContent();

    // Relayout masonry galleries when the sidebar appears/disappears on resize.
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (typeof $ !== 'undefined' && $.fn.masonry) {
          $('.gallery--grid .gallery__wrap').masonry('layout');
        }
      }, 200);
    });

    // Watch the .page element for AJAX content swaps.
    // journal-min.js removes the old .page__content and appends a new one
    // each time the user navigates. The MutationObserver fires on that
    // childList change, then re-initializes Mermaid and Utterances.
    var page = document.querySelector('.page');
    if (page) {
      var observer = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length) {
            // Allow journal-min.js pageFunctions() to finish first,
            // then run our initializers on the new content.
            setTimeout(initPageContent, 100);
            break;
          }
        }
      });
      observer.observe(page, { childList: true });
    }

  });

}());
