import { CORPORATE_GALLERIES, GALLERIES } from '../../data/media';
import SectionHeading from '../ui/SectionHeading';
import GalleryCard from '../ui/GalleryCard';
import Reveal from '../ui/Reveal';
import '../ui/Grid.css';

export default function CorporateEvents({ onOpenGallery }) {
  return (
    <section className="section section-alt" id="events">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Excellence"
            title="Corporate Events & Conferences"
            lead="Maintaining formal decorum, executing quick-witted panel moderations, and representing premium brand values perfectly."
          />
        </Reveal>
        <div className="card-grid">
          {CORPORATE_GALLERIES.map((key, i) => {
            const g = GALLERIES[key];
            return (
              <Reveal key={key} delay={i * 90}>
                <GalleryCard
                  title={g.title}
                  desc={g.desc}
                  image={g.cover}
                  badge={`${g.photos.length} Photos`}
                  action="gallery"
                  ariaLabel={`View ${g.title} photos`}
                  onOpen={() => onOpenGallery(key)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
