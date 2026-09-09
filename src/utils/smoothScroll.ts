import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let rafId: number | null = null;

export function initSmoothScroll() {
  if (lenis) return;

  const init = () => {
    if (lenis) return;

    lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
      // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // easeOutExpo
      lerp: 0.1, // Experiment with values between 0.1 and 0.25.
      // A higher value will make it less floaty and more responsive.

      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      infinite: false,
    });

    const raf = (time: number) => {
      if (!lenis) return;

      lenis.raf(time);
      ScrollTrigger.update();

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    ScrollTrigger.refresh();
  };

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init, { once: true });
  }
}

export function lenisInstance() {
  return lenis;
}

export function destroySmoothScroll() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  if (!lenis) return;

  lenis.stop();
  lenis.destroy();
  lenis = null;

  disableScrollStyles();
}

function disableScrollStyles() {
  document.documentElement.style.scrollBehavior = 'auto';
  document.body.style.overflow = '';
}

export function stopSmoothScroll() {
  lenis?.stop();
}

export function startSmoothScroll() {
  lenis?.start();
}
