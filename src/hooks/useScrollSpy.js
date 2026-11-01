import { useEffect, useState } from 'react';

/** Tracks which section (by id) is currently in view. */
export default function useScrollSpy(ids, options = { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && ids.includes(entry.target.id)) setActiveId(entry.target.id);
      });
    }, options);

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}
