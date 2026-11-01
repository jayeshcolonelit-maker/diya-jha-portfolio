import { BRANDS } from '../../data/brands';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import './Brands.css';

export default function Brands() {
  return (
    <section className="section" id="brands">
      <div className="container">
        <Reveal>
        <SectionHeading
          align="center"
          tag="Associations"
          title={
            <>
              Brands &amp; Organizations
              <br />
              That Chose Me
            </>
          }
          lead="Trusted by national and international brands across automobile, finance, FMCG, energy, lifestyle and more."
        />
        </Reveal>
        <Reveal as="ul" className="brands-grid">
          {BRANDS.map((brand) => (
            <li className="brand-card" title={brand.name} key={brand.name}>
              {brand.logo ?? (
                <span
                  className={`brand-logo-text${brand.serif ? ' is-serif' : ''}`}
                  style={brand.color ? { color: brand.color } : undefined}
                >
                  {brand.text}
                </span>
              )}
              <span className="sr-only">{brand.name}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
