// Brand marks shown in the "Brands & Organizations" grid.
// `logo` is an image file in public/media/brands/; brands without a logo file
// fall back to a styled `text` wordmark. Every card also shows the brand name.
// The first BRANDS_VISIBLE_COUNT entries show in the static grid (fits one
// screen at 6 columns x 3 rows); the rest scroll in the carousel below it.
export const BRANDS_VISIBLE_COUNT = 18;

// BASE_URL is "/" locally and "/diya-jha-portfolio/" on GitHub Pages
const LOGO = (file) => `${import.meta.env.BASE_URL}media/brands/${file}`;

export const BRANDS = [
  { name: 'Anand Nissan', logo: LOGO('nissan.svg') },
  { name: 'UltraTech Cement', logo: LOGO('ultratech.svg') },
  { name: 'Bajaj', logo: LOGO('bajaj.svg') },
  { name: 'Vivo', logo: LOGO('vivo.svg') },
  { name: 'Kimirica', logo: LOGO('kimirica.svg') },
  { name: 'Kotak Mahindra Bank', logo: LOGO('kotak.svg') },
  { name: 'Pushp Masale', logo: LOGO('pushp.png') },
  { name: 'Panasonic', logo: LOGO('panasonic.svg') },
  { name: 'GSB SV', text: 'GSB SV' },
  { name: 'IPPF', logo: LOGO('ippf.svg') },
  { name: 'Bharat Petroleum (BPCL)', logo: LOGO('bpcl.svg') },
  { name: 'GAIL India', logo: LOGO('gail.svg') },
  { name: 'SGS', logo: LOGO('sgs.svg') },
  { name: 'Adani Fortune Oil', logo: LOGO('fortune.png') },
  { name: 'Glenmark Pharmaceutical', logo: LOGO('glenmark.png') },
  { name: 'Araldite Fevicol', logo: LOGO('fevicol.png') },
  { name: 'BMW', logo: LOGO('bmw.svg') },
  { name: 'ADAMA Agro', logo: LOGO('adama.svg') },

  // --- Carousel (scrolling) brands below the fold ---
  { name: 'CREDAI', logo: LOGO('credai.png') },
  { name: 'Tanishq', logo: LOGO('tanishq.svg') },
  { name: 'Rewanchal Heights School', text: 'Rewanchal Heights' },
  { name: 'Tecno', logo: LOGO('tecno.svg') },
  { name: 'Krushi Indian Corporation Limited (KICL) Agro', text: 'KICL Agro' },
  { name: 'Growtech Agro', text: 'Growtech' },
  { name: 'Hyundai', logo: LOGO('hyundai.svg') },
  { name: 'Webgility', logo: LOGO('webgility.svg') },
  { name: 'HDFC Bank', logo: LOGO('hdfc.svg') },
  { name: 'Apollo Paints', text: 'Apollo Paints' },
  { name: 'Ezones Power Electra', text: 'Ezones' },
  { name: 'Active Proven', text: 'Active Proven' },
  { name: 'Arihant Plus', text: 'Arihant Plus' },
  { name: 'HP', logo: LOGO('hp.svg') },
  { name: 'PM Modi – Ashirwad Ka Diya', text: 'Ashirwad Ka Diya' },
  { name: 'Mizushu Agro Chemical', text: 'Mizushu' },
  { name: 'EBCO', logo: LOGO('ebco.png') },
  { name: 'Lava', logo: LOGO('lava.svg') },
  { name: 'Ather Konarc', logo: LOGO('ather.jpg') },
];
