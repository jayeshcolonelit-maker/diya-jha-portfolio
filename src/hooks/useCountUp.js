import { useEffect, useState } from 'react';

/** Animates from 0 to `target` over `duration` ms once `start` is true. */
export default function useCountUp(target, start, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);

  return value;
}
