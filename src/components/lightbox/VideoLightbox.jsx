import { useEffect, useRef } from 'react';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import './Lightbox.css';

/** Full-screen video player. `video` = { title, src } or null when closed. */
export default function VideoLightbox({ video, onClose }) {
  const open = Boolean(video);
  const playerRef = useRef(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    playerRef.current?.play().catch(() => {});
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`lightbox video-lightbox${open ? ' open' : ''}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label={video ? video.title : undefined}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="lightbox-panel video-lightbox-panel">
        <button type="button" className="lightbox-btn lightbox-close video-close" aria-label="Close video" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </button>
        {open && <video ref={playerRef} className="video-player" src={video.src} controls playsInline />}
      </div>
    </div>
  );
}
