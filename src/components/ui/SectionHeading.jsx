import './SectionHeading.css';

/** Tag + title + optional lead paragraph. `align` is left | center | right. */
export default function SectionHeading({ tag, title, lead, align = 'left', as: Tag = 'h2' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <Tag className="section-title">{title}</Tag>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
