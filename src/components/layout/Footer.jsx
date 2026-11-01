import { NAV_LINKS, SITE } from '../../data/site';
import SocialIcon from '../ui/SocialIcon';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo">
            {SITE.name}
          </a>
          <p>Professional Emcee &amp; Event Host — bringing energy, elegance and warmth to every stage.</p>
          <div className="footer-social">
            <SocialIcon href={SITE.instagram} icon="fa-brands fa-instagram" label="Instagram" />
            <SocialIcon href={`mailto:${SITE.email}`} icon="fa-solid fa-envelope" label="Email" />
            <SocialIcon href={`tel:${SITE.phone}`} icon="fa-solid fa-phone" label="Call" />
          </div>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
        <p>Designed for premium events and shows.</p>
      </div>
    </footer>
  );
}
