import { useEffect, useState } from 'react';

/** Returns true once the page has scrolled past `offset` pixels. */
export default function useScrollPosition(offset) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return passed;
}
