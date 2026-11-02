import { BRANDS, BRANDS_VISIBLE_COUNT } from '../../data/brands';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import './Brands.css';

function BrandMark({ brand }) {
  return (
    <>
      <div className="brand-logo">
        {brand.logo ? (
          <img src={brand.logo} alt="" loading="lazy" decoding="async" />
        ) : (
          <span
            className={`brand-logo-text${brand.serif ? ' is-serif' : ''}`}
            style={brand.color ? { color: brand.color } : undefined}
          >
            {brand.text}
          </span>
        )}
      </div>
      <span className="brand-name">{brand.name}</span>
    </>
  );
}

export default function Brands() {
  const gridBrands = BRANDS.slice(0, BRANDS_VISIBLE_COUNT);
  const carouselBrands = BRANDS.slice(BRANDS_VISIBLE_COUNT);
  // Rendered twice so the scroll loop is seamless
  const carouselItems = [...carouselBrands, ...carouselBrands];

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
          {gridBrands.map((brand) => (
            <li className="brand-card" title={brand.name} key={brand.name}>
              <BrandMark brand={brand} />
            </li>
          ))}
        </Reveal>
      </div>
      {carouselBrands.length > 0 && (
        <div className="brands-carousel-wrap">
          <div className="brands-carousel">
            <ul className="brands-carousel-track">
              {carouselItems.map((brand, i) => (
                <li
                  className="brand-card"
                  title={brand.name}
                  key={`${brand.name}-${i}`}
                  aria-hidden={i >= carouselBrands.length}
                >
                  <BrandMark brand={brand} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
