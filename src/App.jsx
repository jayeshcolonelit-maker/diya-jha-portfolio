import { useCallback, useState } from 'react';
import { GALLERIES } from './data/media';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Intro from './components/sections/Intro';
import Expertise from './components/sections/Expertise';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Showreels from './components/sections/Showreels';
import Brands from './components/sections/Brands';
import CorporateEvents from './components/sections/CorporateEvents';
import Weddings from './components/sections/Weddings';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import PhotoLightbox from './components/lightbox/PhotoLightbox';
import VideoLightbox from './components/lightbox/VideoLightbox';

export default function App() {
  const [galleryKey, setGalleryKey] = useState(null);
  const [video, setVideo] = useState(null);

  const closeGallery = useCallback(() => setGalleryKey(null), []);
  const closeVideo = useCallback(() => setVideo(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Expertise />
        <About />
        <Stats />
        <Showreels onPlay={setVideo} />
        <Brands />
        <CorporateEvents onOpenGallery={setGalleryKey} />
        <Weddings onOpenGallery={setGalleryKey} onPlay={setVideo} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />

      <PhotoLightbox gallery={galleryKey ? GALLERIES[galleryKey] : null} onClose={closeGallery} />
      <VideoLightbox video={video} onClose={closeVideo} />
    </>
  );
}
