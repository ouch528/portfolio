export const getImageUrl = (path) => {
  // Determine the base path for GitHub Pages or local development
  const basePath = window.location.hostname === 'ouch528.github.io'
    ? '/portfolio/' // GitHub Pages repository name
    : '/portfolio/'; // Local development assumes the app is served from root

  // Construct the full URL for the image
  return `${basePath}assets/${path}`;
};
