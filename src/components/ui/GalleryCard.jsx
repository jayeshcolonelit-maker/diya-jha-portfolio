import { useState } from 'react';
import './GalleryCard.css';

/**
 * Image card with a text overlay. Opens a gallery or video when clicked.
 * - `variant="reel"` makes a tall 9:16 card for vertical videos
 * - `previewSrc` plays a muted preview on hover (desktop only)
 * - `badge` shows a small label in the top corner (e.g. "5 Photos")
 */
export default function GalleryCard({
  title,
  desc,
  image,
  previewSrc,
  onOpen,
  ariaLabel,
  badge,
  action, // 'play' | 'gallery'
  variant = 'landscape',
}) {
  const [hovering, setHovering] = useState(false);
  const interactive = Boolean(onOpen);

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      className={`gallery-card gallery-card--${variant}${interactive ? ' is-interactive' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...(interactive
        ? { role: 'button', tabIndex: 0, onClick: onOpen, onKeyDown, 'aria-label': ariaLabel || title }
        : {})}
    >
      {image && <img className="gallery-bg" src={image} alt="" loading="lazy" />}
      {previewSrc && hovering && (
        <video className="gallery-bg gallery-preview" src={previewSrc} muted loop autoPlay playsInline />
      )}

      {badge && <span className="gallery-badge">{badge}</span>}

      {action && (
        <span className={`gallery-action gallery-action--${action}`} aria-hidden="true">
          <i className={action === 'play' ? 'fa-solid fa-play' : 'fa-solid fa-images'} />
        </span>
      )}

      <div className="gallery-overlay">
        <h3 className="gallery-title">{title}</h3>
        {desc && <p className="gallery-desc">{desc}</p>}
        {interactive && (
          <span className="gallery-cta">
            {action === 'play' ? 'Watch now' : 'View gallery'} <i className="fa-solid fa-arrow-right" />
          </span>
        )}
      </div>
    </div>
  );
}
