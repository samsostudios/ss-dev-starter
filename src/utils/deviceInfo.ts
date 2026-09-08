import { WEBFLOW_BREAKPOINTS } from '$utils/webflowBreakpoints';

export const breakpoints = () => {
  const device = getDevice();

  return [device, window.innerWidth, window.innerHeight];
};

const getDevice = () => {
  const width = window.innerWidth;

  if (width >= WEBFLOW_BREAKPOINTS.desktop) {
    return 'desktop';
  }
  if (width > WEBFLOW_BREAKPOINTS.mobileLandscape) {
    return 'tablet';
  }
  if (width > WEBFLOW_BREAKPOINTS.mobilePortrait) {
    return 'mobile-landscape';
  }
  return 'mobile-portrait';
};

export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
