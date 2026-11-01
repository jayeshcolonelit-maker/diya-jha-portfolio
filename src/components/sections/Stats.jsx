import { STATS } from '../../data/content';
import useInView from '../../hooks/useInView';
import useCountUp from '../../hooks/useCountUp';
import './Stats.css';

function StatCard({ value, suffix, label, start }) {
  const current = useCountUp(value, start);
  return (
    <div className="stat-card">
      <div className="stat-number text-gradient">
        {current}
        {current === value ? suffix : ''}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView(0.5);
  return (
    <section className="stats" ref={ref}>
      <div className="container stats-grid">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} start={inView} />
        ))}
      </div>
    </section>
  );
}
