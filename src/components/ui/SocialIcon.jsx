import './SocialIcon.css';

export default function SocialIcon({ href, icon, label, filled = false }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className={`social-icon${filled ? ' social-icon-fill' : ''}`}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <i className={icon} />
    </a>
  );
}
