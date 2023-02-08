export const GA_MEASUREMENT_ID = "G-DZYT5QV00Z";

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) {
    return;
  }
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};