import useInView from '../../hooks/useInView';
import './Reveal.css';

/** Fades and lifts its children into view the first time they scroll on screen. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView(0.15);
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
