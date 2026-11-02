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
// For raw uploads that still carry their original export filename
// (spaces/parentheses and all) rather than a curated slug.
const rawPhoto = (category, filename) => encodeURI(`${PHOTOS}/${category}/${filename}`);

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
      rawPhoto('product-launches', 'WhatsApp Image 2026-08-31 at 15.54.30 (1).jpeg'),
      rawPhoto('product-launches', 'WhatsApp Image 2026-08-31 at 15.54.30.jpeg'),
      rawPhoto('product-launches', 'WhatsApp Image 2026-08-31 at 15.54.58.jpeg'),
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
      rawPhoto('dealer-meets', 'WhatsApp Image 2026-08-31 at 15.53.28 (8).jpeg'),
      rawPhoto('dealer-meets', 'WhatsApp Image 2026-08-31 at 15.53.29 (11).jpeg'),
      rawPhoto('dealer-meets', 'WhatsApp Image 2026-08-31 at 15.53.29 (9).jpeg'),
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
      rawPhoto('conferences', 'WhatsApp Image 2026-08-31 at 15.53.26 (2).jpeg'),
      rawPhoto('conferences', 'WhatsApp Image 2026-08-31 at 15.53.29 (2).jpeg'),
      rawPhoto('conferences', 'WhatsApp Image 2026-08-31 at 15.54.30 (2).jpeg'),
    ],
  },
  'live-concerts': {
    title: 'Live Concerts',
    desc: 'Managing large venue audiences and building concert-scale hype',
    cover: `${POSTERS}/live-concert-crowd.jpg`,
    photos: [
      rawPhoto('Live concerts', 'WhatsApp Image 2026-08-31 at 15.53.26.jpeg'),
      rawPhoto('Live concerts', 'WhatsApp Image 2026-08-31 at 15.53.26 (1).jpeg'),
      rawPhoto('Live concerts', 'WhatsApp Image 2026-08-31 at 15.53.28 (9).jpeg'),
      rawPhoto('Live concerts', 'WhatsApp Image 2026-08-31 at 15.53.28 (10).jpeg'),
      rawPhoto('Live concerts', 'WhatsApp Image 2026-08-31 at 15.53.28 (11).jpeg'),
      rawPhoto('Live concerts', 'WhatsApp Image 2026-08-31 at 15.53.28 (12).jpeg'),
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
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (1).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (2).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (3).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (4).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (5).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (6).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (7).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (13).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (14).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (15).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28 (19).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.28.jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29 (1).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29 (5).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29 (6).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29 (7).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29 (8).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29 (10).jpeg'),
      rawPhoto('weddings', 'WhatsApp Image 2026-08-31 at 15.53.29.jpeg'),
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
