import { SITE } from '../../data/site';
import { HERO_HIGHLIGHTS } from '../../data/content';
import { PORTRAITS } from '../../data/media';
import SocialIcon from '../ui/SocialIcon';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" aria-hidden="true" />
            I am {SITE.name}
          </p>
          <h1 className="hero-title">
            {/* Name is visually shown in the eyebrow above; kept here for search engines */}
            <span className="sr-only">{SITE.name} — </span>
            Professional Emcee
            <br />
            <span className="hero-title-accent">&amp; Event Host</span>
          </h1>
          <p className="hero-statement">
            THE STAGE IS YOURS.
            <br />
            <span className="hero-statement-accent">LET ME BRING IT TO LIFE.</span>
          </p>
          <p className="hero-desc">
            I don&rsquo;t just host events. I read the room, feel the energy, and turn every moment into an
            experience worth remembering.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book Diya <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="#videos" className="btn btn-outline">
              <i className="fa-solid fa-circle-play" /> Watch Showreel
            </a>
          </div>

          <ul className="hero-highlights">
            {HERO_HIGHLIGHTS.map((h) => (
              <li key={h.label}>
                <i className={h.icon} aria-hidden="true" /> {h.label}
              </li>
            ))}
          </ul>

          <div className="hero-social">
            <span className="hero-social-label">Find me on</span>
            <div className="social-row">
              <SocialIcon href={SITE.instagram} icon="fa-brands fa-instagram" label="Instagram" filled />
              <SocialIcon href={SITE.facebook} icon="fa-brands fa-facebook-f" label="Facebook" />
              <SocialIcon href={SITE.linkedin} icon="fa-brands fa-linkedin-in" label="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <span className="hero-watermark" aria-hidden="true">Anchor</span>
          <div className="hero-ribbon" />
          <img src={PORTRAITS.heroCutout} alt="Diya Jha - Professional Emcee" className="hero-photo" fetchpriority="high" />
          <span className="hero-watermark hero-watermark-ghost" aria-hidden="true">Anchor</span>

          <div className="hero-badge hero-badge--shows">
            <span className="hero-badge-number">2,000+</span>
            <span className="hero-badge-label">Shows hosted</span>
          </div>
          <div className="hero-badge hero-badge--mic">
            <i className="fa-solid fa-microphone" aria-hidden="true" />
            <span className="hero-badge-label">Indore &middot; Mumbai</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="fa-solid fa-chevron-down scroll-arrow" />
      </a>
    </section>
  );
}
