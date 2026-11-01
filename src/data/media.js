// Every photo and video used on the site lives in /public/media.
//   photos/<category>/  event photos, grouped by event type
//   reels/              showreel videos
//   posters/            cover frames taken from the reels
// BASE_URL is "/" locally and "/diya-jha-portfolio/" on GitHub Pages
const MEDIA = `${import.meta.env.BASE_URL}media`;
const PHOTOS = `${MEDIA}/photos`;
const REELS = `${MEDIA}/reels`;
const POSTERS = `${MEDIA}/posters`;

export const PORTRAITS = {
  heroCutout: `${PHOTOS}/portraits/diya-cutout.png`,
  onStage: `${PHOTOS}/portraits/diya-on-stage.jpeg`,
  studio: `${PHOTOS}/portraits/diya-studio-portrait.jpeg`,
};

const photo = (category, name) => `${PHOTOS}/${category}/${name}.jpeg`;

export const GALLERIES = {
  'product-launches': {
    title: 'Product Launches',
    desc: 'Creating anticipation and high-impact reveals for premium products',
    cover: photo('product-launches', 'product-launch-stage'),
    photos: [
      photo('product-launches', 'product-launch-stage'),
      photo('product-launches', 'panasonic-launch'),
      photo('product-launches', 'krushi-india-launch'),
      photo('product-launches', 'brand-launch'),
      photo('product-launches', 'awas-mela-expo'),
    ],
  },
  'dealer-meets': {
    title: 'Dealer Meets',
    desc: 'Engaging business partners and stakeholders with focus and energy',
    cover: photo('dealer-meets', 'mp-sales-awards'),
    photos: [
      photo('dealer-meets', 'mp-sales-awards'),
      photo('dealer-meets', 'jk-pride-dealer-meet'),
      photo('dealer-meets', 'pushp-dealer-meet'),
    ],
  },
  'annual-conferences': {
    title: 'Annual Conferences',
    desc: 'Smooth execution, time management, and corporate protocol',
    cover: photo('conferences', 'conference-crowd'),
    photos: [
      photo('conferences', 'conference-crowd'),
      photo('conferences', 'conference-hosting'),
      photo('conferences', 'conference-podium'),
    ],
  },
  'destination-weddings': {
    title: 'Destination Weddings',
    desc: 'Royal sangeets, cocktail nights, and family stories hosted elegantly',
    cover: photo('weddings', 'wedding-lehenga-mic'),
    photos: [
      photo('weddings', 'wedding-lehenga-mic'),
      photo('weddings', 'wedding-saree'),
      `${POSTERS}/wedding-bhaat-ceremony.jpg`,
    ],
  },
  'experiential-events': {
    title: 'Experiential Events',
    desc: 'Brand activations, expos, and lifestyle experience showcases',
    cover: photo('product-launches', 'awas-mela-expo'),
    photos: [photo('product-launches', 'awas-mela-expo'), photo('product-launches', 'krushi-india-launch')],
  },
};

export const CORPORATE_GALLERIES = ['product-launches', 'dealer-meets', 'annual-conferences'];

export const SHOWREELS = [
  {
    id: 'corporate-showreel',
    title: 'Corporate Showreel',
    desc: 'Conferences, award nights & leadership summits',
    tag: 'Corporate',
    src: `${REELS}/corporate-showreel.mp4`,
    poster: `${POSTERS}/corporate-showreel.jpg`,
  },
  {
    id: 'wedding-hosting',
    title: 'Wedding Hosting',
    desc: 'Turning rituals like the Bhaat ceremony into memories',
    tag: 'Weddings',
    src: `${REELS}/wedding-bhaat-ceremony.mp4`,
    poster: `${POSTERS}/wedding-bhaat-ceremony.jpg`,
  },
  {
    id: 'live-concerts',
    title: 'Live Concerts & Festivals',
    desc: 'Building concert-scale hype for thousands',
    tag: 'Concerts',
    src: `${REELS}/live-concert-holi.mp4`,
    poster: `${POSTERS}/live-concert-holi.jpg`,
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Style',
    desc: 'Off-stage energy, fashion and fun',
    tag: 'Lifestyle',
    src: `${REELS}/lifestyle-reel.mp4`,
    poster: `${POSTERS}/lifestyle-reel.jpg`,
  },
];

export const LIVE_CONCERT_COVER = `${POSTERS}/live-concert-crowd.jpg`;
