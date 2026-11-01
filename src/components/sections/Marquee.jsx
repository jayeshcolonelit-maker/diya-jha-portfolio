import { EVENT_MARQUEE } from '../../data/content';
import './Marquee.css';

/** Endless scrolling strip of event types. */
export default function Marquee() {
  // Rendered twice so the loop is seamless
  const items = [...EVENT_MARQUEE, ...EVENT_MARQUEE];
  return (
    <div className="marquee-wrap">
      <div className="marquee" aria-label="Event formats">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span className="marquee-item" key={i} aria-hidden={i >= EVENT_MARQUEE.length}>
              {item}
              <i className="fa-solid fa-star-of-life marquee-dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
