import { CELEBRATION_CARDS } from '../../data/content';
import { GALLERIES, SHOWREELS } from '../../data/media';
import SectionHeading from '../ui/SectionHeading';
import GalleryCard from '../ui/GalleryCard';
import Reveal from '../ui/Reveal';
import '../ui/Grid.css';

export default function Weddings({ onOpenGallery, onPlay }) {
  return (
    <section className="section" id="weddings">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="right"
            tag="Celebrations"
            title="Weddings & Concerts"
            lead="Injecting cultural grace, lively family banter, and dynamic crowd interaction to make your milestone moments unforgettable."
          />
        </Reveal>
        <div className="card-grid">
          {CELEBRATION_CARDS.map((card, i) => {
            const gallery = card.gallery && GALLERIES[card.gallery];
            const reel = card.reel && SHOWREELS.find((r) => r.id === card.reel);
            return (
              <Reveal key={card.title} delay={i * 90}>
                <GalleryCard
                  title={card.title}
                  desc={card.desc ?? gallery?.desc}
                  image={card.cover ?? gallery?.cover}
                  badge={gallery ? `${gallery.photos.length} Photos` : 'Video'}
                  action={reel ? 'play' : 'gallery'}
                  ariaLabel={reel ? `Play ${card.title} video` : `View ${card.title} photos`}
                  onOpen={() => (reel ? onPlay(reel) : onOpenGallery(card.gallery))}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
