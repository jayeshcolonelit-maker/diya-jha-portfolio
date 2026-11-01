import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useMediaQuery from '../../hooks/useMediaQuery';
import './Lightbox.css';

const pad = (n) => String(n).padStart(2, '0');

// Shortest signed distance between two slides, so the carousel loops
const circularOffset = (i, pos, n) => {
  let d = i - pos;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
};

const slideStyle = (i, pos, n, spacing) => {
  const d = n > 1 ? circularOffset(i, pos, n) : 0;
  const abs = Math.abs(d);
  const rotate = Math.max(-1, Math.min(1, d)) * -38;
  const scale = 1 - Math.min(abs, 2) * 0.12;
  return {
    transform: `translate(-50%, -50%) translateX(${d * spacing}px) translateZ(${-abs * 160}px) rotateY(${rotate}deg) scale(${scale})`,
    zIndex: 100 - Math.round(abs * 10),
    opacity: abs > 2.5 ? 0 : 1 - Math.min(abs, 2) * 0.25,
    filter: abs < 0.5 ? 'none' : `brightness(${1 - Math.min(abs, 1.5) * 0.4})`,
    pointerEvents: abs > 2.5 ? 'none' : undefined,
  };
};

/** 3D coverflow photo carousel. `gallery` = { title, photos } or null when closed. */
export default function PhotoLightbox({ gallery, onClose }) {
  const open = Boolean(gallery);
  const photos = gallery?.photos ?? [];
  const n = photos.length;

  const [index, setIndex] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  const trackRef = useRef(null);
  const thumbsRef = useRef(null);
  const dragStart = useRef(null);
  const didDrag = useRef(false);
  const wheelLock = useRef(false);

  const mobile = useMediaQuery('(max-width: 768px)');
  useLockBodyScroll(open);

  const go = useCallback((i) => setIndex(((i % n) + n) % n), [n]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Reset to the first photo whenever a new gallery opens
  useEffect(() => {
    if (open) setIndex(0);
  }, [gallery, open]);

  // Measure the track so slide spacing adapts to screen size
  useLayoutEffect(() => {
    if (!open || !trackRef.current) return;
    const el = trackRef.current;
    const ro = new ResizeObserver(() => setTrackWidth(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  const spacing = Math.min(trackWidth * (mobile ? 0.62 : 0.3), 380) || 1;

  // Keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, next, prev, onClose]);

  // Keep the active thumbnail centred
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[index];
    if (!thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2, behavior: 'smooth' });
  }, [index, open]);

  // Drag / swipe between photos
  const onPointerDown = (e) => {
    dragStart.current = e.clientX;
    didDrag.current = false;
    setDragDelta(0);
  };

  useEffect(() => {
    if (!open) return;
    const onMove = (e) => {
      if (dragStart.current === null) return;
      const delta = e.clientX - dragStart.current;
      if (Math.abs(delta) > 6) {
        didDrag.current = true;
        setDragging(true);
        setDragDelta(delta);
      }
    };
    const onUp = (e) => {
      if (dragStart.current === null) return;
      const delta = e.clientX - dragStart.current;
      dragStart.current = null;
      setDragging(false);
      setDragDelta(0);
      if (didDrag.current) {
        if (delta < -50) next();
        else if (delta > 50) prev();
      }
      // let the click handler see the drag flag, then clear it
      setTimeout(() => (didDrag.current = false), 0);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [open, next, prev]);

  // Horizontal trackpad swipe
  useEffect(() => {
    const el = trackRef.current;
    if (!open || !el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 20 || wheelLock.current) return;
      e.preventDefault();
      wheelLock.current = true;
      e.deltaX > 0 ? next() : prev();
      setTimeout(() => (wheelLock.current = false), 550);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [open, next, prev]);

  const onBackdropClick = (e) => {
    if (didDrag.current) return;
    if (e.target === e.currentTarget || e.target === trackRef.current) onClose();
  };

  const pos = index - dragDelta / spacing;

  return (
    <div
      className={`lightbox${open ? ' open' : ''}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label={gallery ? `${gallery.title} gallery` : undefined}
      onClick={onBackdropClick}
    >
      {open && (
        <>
          <div className="lightbox-ambient" aria-hidden="true" style={{ backgroundImage: `url("${photos[index]}")` }} />
          <div className="lightbox-panel">
            <div className="lightbox-header">
              <div>
                <span className="lightbox-eyebrow">Gallery</span>
                <h3 className="lightbox-title">{gallery.title}</h3>
              </div>
              <div className="lightbox-counter">
                <b>{pad(index + 1)}</b> / <span>{pad(n)}</span>
              </div>
              <button type="button" className="lightbox-btn lightbox-close" aria-label="Close gallery" onClick={onClose}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="lightbox-stage">
              <button type="button" className="lightbox-btn lightbox-nav lightbox-prev" aria-label="Previous photo" onClick={prev}>
                <i className="fa-solid fa-chevron-left" />
              </button>
              <div
                ref={trackRef}
                className={`lightbox-track${dragging ? ' dragging' : ''}`}
                onPointerDown={onPointerDown}
                onClick={onBackdropClick}
              >
                {photos.map((src, i) => (
                  <div
                    key={src + i}
                    className={`lightbox-slide${i === index ? ' active' : ''}`}
                    style={slideStyle(i, pos, n, spacing)}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!didDrag.current) go(i);
                    }}
                  >
                    <img src={src} alt={`${gallery.title} photo ${i + 1}`} draggable={false} />
                  </div>
                ))}
              </div>
              <button type="button" className="lightbox-btn lightbox-nav lightbox-next" aria-label="Next photo" onClick={next}>
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>

            <div className="lightbox-progress">
              <i style={{ transform: `scaleX(${(index + 1) / n})` }} />
            </div>

            <div className="lightbox-thumbs" ref={thumbsRef}>
              {photos.map((src, i) => (
                <button
                  type="button"
                  key={src + i}
                  className={`lightbox-thumb${i === index ? ' active' : ''}`}
                  aria-label={`Show photo ${i + 1}`}
                  onClick={() => go(i)}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
