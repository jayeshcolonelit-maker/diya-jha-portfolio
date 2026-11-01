import { SHOWREELS } from '../../data/media';
import SectionHeading from '../ui/SectionHeading';
import GalleryCard from '../ui/GalleryCard';
import Reveal from '../ui/Reveal';
import '../ui/Grid.css';

export default function Showreels({ onPlay }) {
  return (
    <section className="section section-alt" id="videos">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            tag="On Stage"
            title="Hosting Highlights & Showreels"
            lead="Catch Diya in action, commanding massive crowds, hosting heartfelt ceremonies, and setting the energy at high-profile events."
          />
        </Reveal>
        <div className="card-grid card-grid--reels">
          {SHOWREELS.map((reel, i) => (
            <Reveal key={reel.id} delay={i * 90}>
              <GalleryCard
                variant="reel"
                title={reel.title}
                desc={reel.desc}
                image={reel.poster}
                previewSrc={reel.src}
                badge={reel.tag}
                action="play"
                ariaLabel={`Play ${reel.title} video`}
                onOpen={() => onPlay(reel)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
