import { ABOUT_PARAGRAPHS, STRENGTHS } from '../../data/content';
import { PORTRAITS } from '../../data/media';
import SectionHeading from '../ui/SectionHeading';
import RichText from '../ui/RichText';
import Reveal from '../ui/Reveal';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="about-image-wrapper">
            <img src={PORTRAITS.onStage} alt="Diya Jha hosting on stage with a microphone" className="about-img" loading="lazy" />
          </div>
          <div className="about-floating-card">
            <i className="fa-solid fa-language" aria-hidden="true" />
            <div>
              <strong>Bilingual Host</strong>
              <span>English &amp; Hindi</span>
            </div>
          </div>
          <div className="about-frame" aria-hidden="true" />
        </Reveal>

        <Reveal className="about-text" delay={120}>
          <SectionHeading tag="Professional Emcee & Host" title="About Diya Jha" />
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p key={i} className={i === 0 ? 'about-lead' : undefined}>
              <RichText text={p} />
            </p>
          ))}

          <div className="core-strengths">
            <h3 className="strengths-title">Core Strengths</h3>
            <ul className="strengths-list">
              {STRENGTHS.map((s) => (
                <li className="strength-item" key={s}>
                  <i className="fa-solid fa-circle-check strength-icon" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
