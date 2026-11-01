import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '../../data/site';
import useScrollPosition from '../../hooks/useScrollPosition';
import useScrollSpy from '../../hooks/useScrollSpy';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import './Header.css';

const NAV_IDS = NAV_LINKS.map((l) => l.id);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const activeId = useScrollSpy(NAV_IDS);
  useLockBodyScroll(menuOpen);

  // Close the mobile menu if the screen grows past the mobile breakpoint
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 769px)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          {SITE.name}
        </a>
        <button
          type="button"
          className={`hamburger${menuOpen ? ' active' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Main">
          <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="nav-menu">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link${activeId === id ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="nav-cta-item">
              <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
