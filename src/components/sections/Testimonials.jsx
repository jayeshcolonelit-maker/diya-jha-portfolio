import { TESTIMONIALS } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import '../ui/Grid.css';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <Reveal>
          <SectionHeading align="center" tag="Client Reviews" title="Word on the Stage" />
        </Reveal>
        <div className="card-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="figure" className="glass-card testimonial-card" key={t.name} delay={i * 90}>
              <i className="fa-solid fa-quote-left testimonial-mark" aria-hidden="true" />
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, s) => (
                  <i key={s} className="fa-solid fa-star" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-org">{t.org}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
