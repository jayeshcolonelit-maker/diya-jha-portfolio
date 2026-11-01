import { INTRO } from '../../data/content';
import Reveal from '../ui/Reveal';
import './Intro.css';

export default function Intro() {
  return (
    <section className="intro-line">
      <div className="container intro-grid">
        {INTRO.map(({ icon, text }, i) => (
          <Reveal as="p" className="intro-item" key={i} delay={i * 80}>
            <i className={`${icon} intro-icon`} aria-hidden="true" />
            <span>
              {text.map((piece, j) =>
                typeof piece === 'string' ? (
                  piece
                ) : (
                  <span key={j} className="highlight">
                    {piece.hl}
                  </span>
                )
              )}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
