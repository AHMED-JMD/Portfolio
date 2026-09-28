/**
 * All client-side behaviour, as one inline script: theme,
 * header state, mobile drawer, active nav link, the receipt printer and the
 * demo play buttons. (Scroll reveals are pure CSS — see .reveal in globals.css.)
 *
 * In `next dev` React hydrates the page after this runs, so anything written
 * here before hydration must match the server HTML or carry
 * suppressHydrationWarning — otherwise React re-renders the page and warns
 * about the script tags it has to re-create.
 *
 * Keeping this vanilla (no client components) lets the build strip React's
 * hydration runtime — about 100KB gzipped that visitors on mobile data never
 * download (see scripts/strip-hydration.mjs).
 *
 * Phases: (1) root state + delegated listeners, before first paint, no DOM
 * queries; (2) DOM ready: element lookups; (3) load: observers and autoplay.
 */
const SCRIPT = `
(function () {
  var root = document.documentElement;


  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* Latin digits in both languages, matching the product screenshots. */
  var pad = function (n) { return n < 10 ? '0' + n : String(n); };

  /* ══ 1 — root state ══ */
  root.classList.remove('no-js');

  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  var setTheme = function (theme, save) {
    root.setAttribute('data-theme', theme);
    if (save) { try { localStorage.setItem('theme', theme); } catch (e) {} }
  };
  setTheme(stored === 'light' || stored === 'dark' ? stored
    : matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light', false);

  var onScroll = function () { root.setAttribute('data-scrolled', scrollY > 16 ? 'true' : 'false'); };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  var drawer = null, opener = null;
  var setMenu = function (open) {
    root.setAttribute('data-menu', open ? 'open' : 'closed');
    if (!drawer) return;
    if (open) drawer.removeAttribute('inert'); else drawer.setAttribute('inert', '');
    if (opener) opener.setAttribute('aria-expanded', open ? 'true' : 'false');
    var target = open ? drawer.querySelector('[data-menu-close]') : opener;
    if (target) target.focus();
  };

  var printer = { go: function () {} };

  document.addEventListener('click', function (e) {
    var el = e.target;
    if (!(el instanceof Element)) return;
    if (el.closest('[data-theme-toggle]')) return setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    if (el.closest('[data-menu-open]')) return setMenu(true);
    if (el.closest('[data-menu-close]')) return setMenu(false);
    if (el.closest('[data-printer-next]')) return printer.go(1);
    if (el.closest('[data-printer-prev]')) return printer.go(-1);

    /* One detail panel open at a time, opened from its card in the rail. */
    var opener = el.closest('[data-detail]');
    if (opener) {
      var id = opener.getAttribute('data-detail');
      var panel = document.getElementById('detail-' + id);
      if (!panel) return;
      var opening = panel.hasAttribute('hidden');
      [].forEach.call(document.querySelectorAll('[data-panel]'), function (pn) { pn.setAttribute('hidden', ''); });
      [].forEach.call(document.querySelectorAll('[data-detail]'), function (b) { b.setAttribute('aria-expanded', 'false'); });
      if (opening) {
        panel.removeAttribute('hidden');
        opener.setAttribute('aria-expanded', 'true');
        panel.focus({ preventScroll: true });
        panel.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      }
      return;
    }

    var closer = el.closest('[data-detail-close]');
    if (closer) {
      var cid = closer.getAttribute('data-detail-close');
      var open = document.getElementById('detail-' + cid);
      var card = document.querySelector('[data-detail="' + cid + '"]');
      if (open) open.setAttribute('hidden', '');
      if (card) {
        card.setAttribute('aria-expanded', 'false');
        card.focus({ preventScroll: true });
        card.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      }
      return;
    }

    var arrow = el.closest('[data-row-prev],[data-row-next]');
    if (arrow) {
      var rail = document.querySelector('[data-rail]');
      if (!rail) return;
      var first = rail.querySelector('.pcard');
      var step = first ? first.getBoundingClientRect().width + 20 : rail.clientWidth * 0.8;
      /* In RTL the scroll axis runs the other way. */
      var sign = getComputedStyle(rail).direction === 'rtl' ? -1 : 1;
      var way = arrow.hasAttribute('data-row-next') ? 1 : -1;
      rail.scrollBy({ left: sign * way * step, behavior: reduced ? 'auto' : 'smooth' });
      return;
    }
    var play = el.closest('[data-play]');
    if (play) {
      var box = play.closest('[data-player]');
      var video = box && box.querySelector('video');
      if (!video) return;
      video.controls = true;
      box.classList.add('is-playing');
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
      return;
    }
    if (drawer && drawer.contains(el) && el.closest('a')) setMenu(false);
  });
  addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.getAttribute('data-menu') === 'open') setMenu(false);
  });

  /* ══ 2 — DOM ready ══ */
  var ready = function (fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  };

  ready(function () {
    drawer = document.getElementById('drawer');
    opener = document.querySelector('[data-menu-open]');

    /* Receipt printer: move is-active / is-leaving; CSS does the motion. */
    var box = document.querySelector('[data-printer]');
    if (!box) return;
    var slips = [].slice.call(box.querySelectorAll('[data-receipt]'));
    var count = box.querySelector('[data-printer-count]');
    var idx = 0, timer = 0, hover = false, inView = true;
    var HOLD = 7800;

    var schedule = function () {
      clearTimeout(timer);
      if (reduced || hover || !inView || document.hidden) return;
      timer = setTimeout(function () { show(idx + 1); }, HOLD);
    };
    var show = function (next) {
      var n = slips.length;
      next = (next + n) % n;
      if (next === idx) return;
      var out = slips[idx], inn = slips[next];
      out.classList.remove('is-active');
      out.setAttribute('aria-hidden', 'true');
      out.classList.add('is-leaving');
      setTimeout(function () { out.classList.remove('is-leaving'); }, reduced ? 0 : 780);
      box.setAttribute('data-cycled', '');
      void inn.offsetWidth;
      inn.classList.add('is-active');
      inn.removeAttribute('aria-hidden');
      idx = next;
      if (count) count.textContent = pad(idx + 1) + ' / ' + pad(n);
      schedule();
    };
    printer.go = function (step) { show(idx + step); };

    box.addEventListener('mouseenter', function () { hover = true; clearTimeout(timer); });
    box.addEventListener('mouseleave', function () { hover = false; schedule(); });
    box.addEventListener('focusin', function () { hover = true; clearTimeout(timer); });
    box.addEventListener('focusout', function () { hover = false; schedule(); });
    document.addEventListener('visibilitychange', schedule);
    if (typeof IntersectionObserver !== 'undefined') {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        schedule();
      }).observe(box);
    }
    schedule();
  });

  /* ══ 3 — after load: the active nav link (scroll reveals are pure CSS) ══ */
  var start = function () {
    var links = [].slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
    var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
    if (sections.length && typeof IntersectionObserver !== 'undefined') {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(function (s) { spy.observe(s); });
    }
  };
  if (document.readyState === 'complete') start();
  else addEventListener('load', start);
})();
`;

export default function SiteScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
