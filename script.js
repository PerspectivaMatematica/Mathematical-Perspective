/* =========================================================
   Perspectiva Matemática — script.js
   Lightweight tab navigation + URL hash sync.
   No dependencies.
   ========================================================= */

(function () {
  "use strict";

  var VALID_TABS = [
    "home", "event-window", "silver", "sectors", "sentiment", "links"
  ];

  var tabs = document.querySelectorAll(".tab");
  var panels = document.querySelectorAll(".panel");
  var cardLinks = document.querySelectorAll("[data-tab-link]");

  function activateTab(tabName, options) {
    options = options || {};
    if (VALID_TABS.indexOf(tabName) === -1) tabName = "home";

    tabs.forEach(function (btn) {
      var isActive = btn.getAttribute("data-tab") === tabName;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach(function (panel) {
      var isActive = panel.getAttribute("data-panel") === tabName;
      panel.classList.toggle("is-active", isActive);
    });

    if (options.updateHash !== false) {
      // Avoid scroll jumps from native hash change
      if (history && history.replaceState) {
        history.replaceState(null, "", "#" + tabName);
      } else {
        window.location.hash = tabName;
      }
    }

    if (options.scroll !== false) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Tab clicks
  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activateTab(btn.getAttribute("data-tab"));
    });
  });

  // Card / brand "click to navigate" elements
  cardLinks.forEach(function (el) {
    el.addEventListener("click", function (e) {
      var target = el.getAttribute("data-tab-link");
      if (!target) return;
      e.preventDefault();
      activateTab(target);
    });
  });

  // Init from URL hash (if any)
  function readHash() {
    var h = (window.location.hash || "").replace(/^#/, "").trim();
    return h || "home";
  }

  // On hash change (back/forward navigation)
  window.addEventListener("hashchange", function () {
    activateTab(readHash(), { updateHash: false, scroll: false });
  });

  // First paint
  activateTab(readHash(), { updateHash: false, scroll: false });
})();
