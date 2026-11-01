import { EXPERTISE } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Expertise.css';

export default function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <Reveal className="expertise-row">
          <div className="experience-card">
            <div className="experience-badge">
              <span className="experience-number">10+</span>
            </div>
            <p className="experience-label">
              Years of
              <br />
              Experience
            </p>
          </div>
          <div className="expertise-text">
            <h3 className="expertise-heading">
              <span className="highlight">Expertise</span> Includes
            </h3>
            <p>
              I specialize in creating seamless audience engagement, ensuring every event is not just managed but
              truly memorable and impactful.
            </p>
          </div>
        </Reveal>

        <div className="expertise-grid">
          {EXPERTISE.map(({ img, label }, i) => (
            <Reveal className="expertise-item" key={label} delay={i * 80}>
              <div className="expertise-img">
                <img src={img} alt={label} loading="lazy" />
              </div>
              <p>{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
