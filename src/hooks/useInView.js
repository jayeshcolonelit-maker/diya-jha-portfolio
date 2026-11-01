import { useEffect, useRef, useState } from 'react';

/** Returns [ref, inView]; inView flips to true once and stays true. */
export default function useInView(threshold = 0.5) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return [ref, inView];
}
