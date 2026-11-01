import useScrollPosition from '../../hooks/useScrollPosition';
import './BackToTop.css';

export default function BackToTop() {
  const show = useScrollPosition(400);
  return (
    <button
      type="button"
      className={`back-to-top${show ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
