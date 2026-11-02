import { GALLERIES, LIVE_CONCERT_COVER } from './media';

// Intro copy: each paragraph is a list of pieces; { hl: '...' } marks highlighted text.
const hl = (text) => ({ hl: text });

export const INTRO = [
  { icon: 'fa-solid fa-microphone-lines', text: ['With a captivating voice, magnetic stage presence, and a naturally vibrant personality, I bring ', hl('energy, elegance, wit, and warmth'), ' to every show.'] },
  { icon: 'fa-solid fa-wand-magic-sparkles', text: ['From luxury weddings and intimate celebrations to international conferences, television, product launches, concerts, and award nights, I make ', hl('every format feel effortless'), '.'] },
  { icon: 'fa-solid fa-users', text: ['With ', hl('2,000+ events'), ' and audiences of 50 to 10,000+, I know how to read a room, connect with people, and turn moments into experiences.'] },
  { icon: 'fa-solid fa-location-dot', text: ['Based in ', hl('Indore and Mumbai'), ', I host across India and beyond—bringing a distinctive voice, quick wit, and a touch of humour to every stage.'] },
];

export const HERO_HIGHLIGHTS = [
  { icon: 'fa-solid fa-language', label: 'English & Hindi' },
  { icon: 'fa-solid fa-users', label: 'Audiences of 50 to 10,000+' },
  { icon: 'fa-solid fa-earth-asia', label: 'India & beyond' },
];

export const EVENT_MARQUEE = [
  'Corporate Conferences',
  'Product Launches',
  'Destination Weddings',
  'Live Concerts',
  'Award Nights',
  'Dealer Meets',
  'Television',
  'Brand Activations',
  'Sangeet Nights',
  'Government Events',
];

export const EXPERTISE = [
  { img: GALLERIES['annual-conferences'].photos[1], label: 'Annual conferences & leadership summits' },
  { img: GALLERIES['dealer-meets'].photos[0], label: 'Dealer meets & product launches' },
  { img: GALLERIES['product-launches'].photos[0], label: 'Award ceremonies & brand activations' },
  { img: LIVE_CONCERT_COVER, label: 'Family days, concerts & large-scale celebrations' },
];

// About section copy (each item is a paragraph; ** marks bold text)
export const ABOUT_PARAGRAPHS = [
  'With **2,000+ events** across India, Diya Jha is a versatile bilingual emcee known for her captivating voice, effortless charm, and ability to connect with any audience.',
  'From luxury weddings and intimate celebrations to international conferences, television shows, product launches, concerts, award nights, and government events, she brings every format to life with ease.',
  'Quick-witted, vibrant, and naturally engaging, Diya blends elegance with energy, spontaneity with professionalism, and always adds just the right touch of humour.',
  'Based in **Indore and Mumbai**, she has hosted audiences ranging from **50 to 10,000+**, creating experiences that feel personal, polished, and unforgettable.',
];

export const CONTACT_COPY = {
  tag: "Let's Collaborate",
  title: 'Let’s Create a Moment Worth Remembering',
  paragraphs: [
    'Now booking luxury weddings, destination celebrations, corporate experiences, conferences, launches, concerts, television, and special occasions around the world.',
    'Every event is thoughtfully tailored to your format, vision, requirements, location, and date.',
  ],
};

export const STRENGTHS = [
  'Corporate Event Hosting',
  'Product Launches',
  'Large-scale Concerts & Festivals',
  'Experiential & Brand Activations',
  'Annual Conferences & Dealer Meets',
  'Elegant Destination Weddings',
];

export const STATS = [
  { value: 2000, suffix: '+', label: 'Shows Hosted' },
  { value: 100, suffix: '+', label: 'Brands Associated' },
  { value: 50, suffix: '+', label: 'Cities Covered' },
  { value: 20, suffix: '+', label: 'International Clients Managed' },
];

// `gallery` opens a photo gallery, `reel` opens a showreel video
export const CELEBRATION_CARDS = [
  { title: 'Destination Weddings', gallery: 'destination-weddings' },
  {
    title: 'Live Concerts',
    gallery: 'live-concerts',
  },
  { title: 'Experiential Events', gallery: 'experiential-events' },
];

export const TESTIMONIALS = [
  {
    quote:
      "Diya's energy is infectious! She hosted our BMW dealer meet and product launch with absolute perfection. Highly professional and extremely adaptive to script changes.",
    name: 'Event Lead',
    org: 'Liquid Communications',
  },
  {
    quote:
      'We have worked with Diya Jha across multiple pharmaceutical and corporate events. Her ability to keep a large crowd engaged for hours in both English and Hindi is unmatched.',
    name: 'Marketing Manager',
    org: 'Glenmark Pharmaceuticals',
  },
  {
    quote:
      'Diya hosted our grand sangeet ceremony in Indore. Her elegance, timing, and respectful engagement with family elders made our special day super fun and extremely memorable!',
    name: 'Rohan & Swati',
    org: 'Destination Wedding',
  },
];

export const EVENT_TYPES = [
  { value: 'corporate', label: 'Corporate Event / Dealer Meet' },
  { value: 'launch', label: 'Product Launch / Expo' },
  { value: 'wedding', label: 'Destination Wedding / Sangeet' },
  { value: 'concert', label: 'Live Concert / College Festival' },
  { value: 'other', label: 'Other / Social Experiential' },
];
