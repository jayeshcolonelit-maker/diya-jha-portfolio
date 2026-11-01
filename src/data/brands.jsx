// Brand marks shown in the "Brands & Organizations" grid.
// `logo` is inline SVG; `text` brands render as styled wordmarks.
export const BRANDS = [
  {
    name: 'BMW',
    logo: (
      <svg viewBox="0 0 100 100" width="55" height="55">
        <circle cx="50" cy="50" r="46" fill="#000" stroke="#aaa" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="32" fill="#fff" />
        <path d="M 50 18 A 32 32 0 0 1 82 50 L 50 50 Z" fill="#0066b2" />
        <path d="M 18 50 A 32 32 0 0 1 50 18 L 50 50 Z" fill="#fff" />
        <path d="M 50 82 A 32 32 0 0 1 18 50 L 50 50 Z" fill="#0066b2" />
        <path d="M 82 50 A 32 32 0 0 1 50 82 L 50 50 Z" fill="#fff" />
        <text x="50" y="13" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="#fff" textAnchor="middle">M</text>
        <text x="25" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="#fff" textAnchor="middle" transform="rotate(-45 25 27)">B</text>
        <text x="75" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="#fff" textAnchor="middle" transform="rotate(45 75 27)">W</text>
      </svg>
    ),
  },
  {
    name: 'Vivo',
    logo: (
      <svg viewBox="0 0 100 40" width="80" height="32">
        <text x="50" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="#415fff" fontStyle="italic" textAnchor="middle" letterSpacing="-1">vivo</text>
      </svg>
    ),
  },
  {
    name: 'Tanishq',
    logo: (
      <svg viewBox="0 0 100 40" width="80" height="32">
        <text x="50" y="16" fontFamily="'Cinzel', serif" fontWeight="bold" fontSize="10" fill="#8c6239" textAnchor="middle" letterSpacing="2">TANISHQ</text>
        <path d="M 40 22 L 50 18 L 60 22 L 50 26 Z" fill="none" stroke="#8c6239" strokeWidth="1" />
        <circle cx="50" cy="15" r="1" fill="#8c6239" />
      </svg>
    ),
  },
  {
    name: 'Kotak Mahindra Bank',
    logo: (
      <svg viewBox="0 0 120 40" width="90" height="30">
        <text x="35" y="26" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill="#e31b23" letterSpacing="-0.5">kotak</text>
        <circle cx="90" cy="20" r="8" fill="#003366" />
        <path d="M 86 20 L 90 16 L 94 20 L 90 24 Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Bajaj',
    logo: (
      <svg viewBox="0 0 100 40" width="70" height="28">
        <text x="50" y="26" fontFamily="sans-serif" fontWeight="900" fontSize="20" fill="#005ea6" letterSpacing="0.5" textAnchor="middle">BAJAJ</text>
      </svg>
    ),
  },
  {
    name: 'UltraTech Cement',
    logo: (
      <svg viewBox="0 0 120 40" width="90" height="30">
        <text x="60" y="18" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="#ff9900" textAnchor="middle">UltraTech</text>
        <text x="60" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="8" fill="#333" textAnchor="middle" letterSpacing="1">CEMENT</text>
      </svg>
    ),
  },
  {
    name: 'Panasonic',
    logo: (
      <svg viewBox="0 0 120 30" width="90" height="24">
        <text x="60" y="22" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="#0f2080" letterSpacing="0.5" textAnchor="middle">Panasonic</text>
      </svg>
    ),
  },
  {
    name: 'Kimirica',
    logo: (
      <svg viewBox="0 0 120 30" width="100" height="25">
        <text x="60" y="20" fontFamily="'Cinzel', serif" fontWeight="500" fontSize="12" fill="#000" textAnchor="middle" letterSpacing="2.5">KIMIRICA</text>
      </svg>
    ),
  },
  {
    name: 'Red Chief',
    logo: (
      <svg viewBox="0 0 120 30" width="95" height="24">
        <text x="60" y="22" fontFamily="'Playfair Display', serif" fontWeight="bold" fontStyle="italic" fontSize="16" fill="#e31b23" textAnchor="middle">red chief</text>
      </svg>
    ),
  },
  {
    name: 'Himalaya Wellness',
    logo: (
      <svg viewBox="0 0 120 30" width="90" height="22">
        <text x="60" y="20" fontFamily="sans-serif" fontWeight="700" fontSize="13" fill="#097969" textAnchor="middle">Himalaya</text>
      </svg>
    ),
  },
  {
    name: 'VLCC',
    logo: (
      <svg viewBox="0 0 100 30" width="80" height="24">
        <text x="50" y="22" fontFamily="sans-serif" fontWeight="900" fontSize="20" fill="#ff6600" textAnchor="middle" letterSpacing="1">VLCC</text>
      </svg>
    ),
  },
  { name: 'Anand Nissan', text: 'NISSAN' },
  { name: 'SOS Infrabulls', text: 'SOS', color: '#ff9900' },
  { name: 'Pushp Masale', text: 'Pushp', color: '#e31b23', serif: true },
  { name: 'Indian Oil (IOCL)', text: 'IndianOil', color: '#ff6600' },
  { name: 'Bharat Petroleum (BPCL)', text: 'BPCL', color: '#003366' },
  { name: 'GAIL India', text: 'GAIL', color: '#097969' },
  { name: 'Fortune (Adani Wilmar)', text: 'Fortune', color: '#008000', serif: true },
];
