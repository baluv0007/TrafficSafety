export const initBrowserPolyfills = () => {
  if (typeof window === 'undefined') return;

  if (!('requestIdleCallback' in window)) {
    (window as any).requestIdleCallback = (cb: Function) => {
      const start = Date.now();
      return setTimeout(() => {
        cb({
          didTimeout: false,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
        });
      }, 1);
    };

    (window as any).cancelIdleCallback = (id: number) => {
      clearTimeout(id);
    };
  }

  if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Some features may not work optimally.');
  }

  if (CSS && CSS.supports) {
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      const style = document.createElement('style');
      style.textContent = `
        html, * {
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  if (!Element.prototype.scrollTo) {
    Element.prototype.scrollTo = function(options: any) {
      if (typeof options === 'object') {
        this.scrollLeft = options.left || this.scrollLeft;
        this.scrollTop = options.top || this.scrollTop;
      }
    };
  }

  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);

  if (isIOS || isSafari) {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content',
        'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0, user-scalable=yes'
      );
    }

    document.documentElement.style.setProperty('height', '100%');
    document.body.style.setProperty('min-height', '-webkit-fill-available');
  }

  if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
  } else {
    document.documentElement.classList.add('no-touch');
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduce-motion');
  }

  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  });

  const hasHover = window.matchMedia('(hover: hover)').matches;
  if (!hasHover) {
    document.documentElement.classList.add('no-hover');
  }

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, { passive: true });

  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Modern browser features available');
  }
};
