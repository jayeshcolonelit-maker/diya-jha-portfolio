document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mobile Menu Hamburger Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active');
      
      // Animate hamburger lines
      const spans = hamburgerBtn.querySelectorAll('span');
      if (hamburgerBtn.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        const spans = hamburgerBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // 2. Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Active Nav Link Highlighting & Scroll Spy
  const sections = document.querySelectorAll('section');
  
  const options = {
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // 4. Statistics Count-Up Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const countUp = () => {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const duration = 2000; // 2 seconds animation
      const stepTime = Math.abs(Math.floor(duration / target));
      let current = 0;
      
      // Adjust step sizes for larger numbers to be smooth
      const increment = target > 1000 ? Math.ceil(target / 100) : 1;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target + (target === 2000 || target === 100 || target === 50 ? '+' : '');
          clearInterval(timer);
        } else {
          stat.textContent = current;
        }
      }, stepTime);
    });
  };

  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          countUp();
          animated = true;
        }
      });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
  }

  // 5. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Contact Form Submission Handling (Web3Forms)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      const name = document.getElementById('name').value;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(contactForm)
        });
        const result = await response.json();

        if (response.ok && result.success) {
          formStatus.textContent = `Thank you, ${name}! Your inquiry has been sent — Diya Jha will get back to you shortly.`;
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        formStatus.textContent = 'Something went wrong sending your inquiry. Please try again or reach out via phone/email directly.';
        formStatus.classList.add('error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // 7. Micro-interactions: hover zoom gallery images
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const playIcon = card.querySelector('.fa-circle-play');
      if (playIcon) {
        playIcon.style.transform = 'scale(1.2)';
        playIcon.style.transition = 'transform 0.3s ease';
      }
    });
    card.addEventListener('mouseleave', () => {
      const playIcon = card.querySelector('.fa-circle-play');
      if (playIcon) {
        playIcon.style.transform = 'scale(1)';
      }
    });
  });

  // 8. Event Category Photo Carousel (Lightbox)
  const galleries = {
    'product-launches': {
      title: 'Product Launches',
      folder: 'Product Launches',
      files: [
        'awasmela coorporate.jpeg',
        'india corporate.jpeg',
        'krushi corporate.jpeg',
        'panasonic corporate.jpeg'
      ]
    },
    'dealer-meets': {
      title: 'Dealer Meets',
      folder: 'Product Launches',
      files: [
        'awasmela coorporate.jpeg',
        'india corporate.jpeg',
        'krushi corporate.jpeg',
        'panasonic corporate.jpeg'
      ]
    },
    'annual-conferences': {
      title: 'Annual Conferences',
      folder: 'Annual Conferences',
      files: [
        'MP coorporate.jpeg',
        'coorporate 2.jpeg',
        'coorporate.jpeg',
        'corporate.jpeg',
        'pushp corporate.jpeg',
        'weeding.jpeg'
      ]
    }
  };

  const lightbox = document.getElementById('lightbox');
  const lightboxTrack = document.getElementById('lightbox-track');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let activeGallery = null;
  let activeIndex = 0;
  let scrollRAF = null;

  const setActiveSlide = (index, { instant = false } = {}) => {
    if (!activeGallery) return;
    activeIndex = index;
    const slides = lightboxTrack.querySelectorAll('.lightbox-slide');
    slides.forEach(slide => {
      slide.classList.toggle('active', Number(slide.dataset.index) === index);
    });
    slides[index].scrollIntoView({
      behavior: instant ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  };

  const syncActiveFromScroll = () => {
    if (!activeGallery) return;
    const trackRect = lightboxTrack.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const slides = Array.from(lightboxTrack.querySelectorAll('.lightbox-slide'));
    let closest = 0;
    let closestDist = Infinity;
    slides.forEach(slide => {
      const rect = slide.getBoundingClientRect();
      const dist = Math.abs((rect.left + rect.width / 2) - trackCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = Number(slide.dataset.index);
      }
    });
    if (closest !== activeIndex) {
      activeIndex = closest;
      slides.forEach(slide => {
        slide.classList.toggle('active', Number(slide.dataset.index) === closest);
      });
    }
  };

  lightboxTrack.addEventListener('scroll', () => {
    if (scrollRAF) cancelAnimationFrame(scrollRAF);
    scrollRAF = requestAnimationFrame(syncActiveFromScroll);
  });

  const openLightbox = (key) => {
    const gallery = galleries[key];
    if (!gallery) return;
    activeGallery = gallery;

    lightboxTrack.innerHTML = '';
    gallery.files.forEach((file, index) => {
      const slide = document.createElement('div');
      slide.className = 'lightbox-slide';
      slide.dataset.index = index;

      const img = document.createElement('img');
      img.src = encodeURI(`${gallery.folder}/${file}`);
      img.alt = `${gallery.title} photo ${index + 1}`;
      slide.appendChild(img);

      slide.addEventListener('click', () => setActiveSlide(index));
      lightboxTrack.appendChild(slide);
    });

    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => setActiveSlide(0, { instant: true }));
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeGallery = null;
  };

  const showNext = () => {
    if (!activeGallery) return;
    setActiveSlide((activeIndex + 1) % activeGallery.files.length);
  };

  const showPrev = () => {
    if (!activeGallery) return;
    setActiveSlide((activeIndex - 1 + activeGallery.files.length) % activeGallery.files.length);
  };

  document.querySelectorAll('[data-gallery]').forEach(card => {
    const key = card.getAttribute('data-gallery');
    card.addEventListener('click', () => openLightbox(key));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(key);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  window.addEventListener('resize', () => {
    if (activeGallery) setActiveSlide(activeIndex, { instant: true });
  });

  // 9. Showreel Video Lightbox
  const videos = {
    'corporate-showreel': 'Corporate Showreel/WhatsApp Video 2026-08-11 at 19.28.26.mp4',
    'wedding-concert': 'Wedding & Concert Hosting/WhatsApp Video 2026-08-11 at 19.25.18.mp4',
    'auto-launches': 'Wedding & Concert Hosting/WhatsApp Video 2026-08-11 at 19.25.18.mp4'
  };

  const videoLightbox = document.getElementById('video-lightbox');
  const videoPlayer = document.getElementById('video-lightbox-player');
  const videoLightboxClose = document.getElementById('video-lightbox-close');

  const openVideoLightbox = (key) => {
    const path = videos[key];
    if (!path) return;
    videoPlayer.src = encodeURI(path);
    videoLightbox.classList.add('open');
    videoLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    videoPlayer.play().catch(() => {});
  };

  const closeVideoLightbox = () => {
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    videoLightbox.classList.remove('open');
    videoLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-video]').forEach(card => {
    const key = card.getAttribute('data-video');
    card.addEventListener('click', () => openVideoLightbox(key));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVideoLightbox(key);
      }
    });
  });

  if (videoLightboxClose) videoLightboxClose.addEventListener('click', closeVideoLightbox);

  if (videoLightbox) {
    videoLightbox.addEventListener('click', (e) => {
      if (e.target === videoLightbox) closeVideoLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!videoLightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeVideoLightbox();
  });
});
