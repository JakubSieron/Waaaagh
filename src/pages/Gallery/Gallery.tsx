import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import styles from './Gallery.module.scss';

interface ImageItem {
  id: number;
  name: string;
  image: string;
}

const IMAGES: ImageItem[] = [
  { id: 1, name: 'Wood Elf Waywatcher',   image: '/images/products/elves.png' },
  { id: 2, name: 'Empire Bright Wizard',   image: '/images/products/wizard.png' },
  { id: 3, name: 'Space Mmarine Captain',  image: '/images/products/marines.png' },
  { id: 4, name: 'Supreme Patriarch of the Imperial Colleges of Magic',   image: '/images/products/geld.png' },
  { id: 5, name: 'Imperial Steamtank',     image: '/images/products/tank.png' },
  { id: 6, name: 'Gotrek and Felix',       image: '/images/products/gotrkfelix.png' },
  { id: 7, name: 'Skaven Bell of Doom',   image: '/images/products/doombell.png' },
  { id: 8, name: 'Bloodthirster',   image: '/images/products/blood.png' },
  { id: 9, name: 'Dragon Ogre',  image: '/images/products/drogr.png' },
  { id: 10, name: 'Daemonette of Slaanesh',   image: '/images/products/slan.png' },
  { id: 11, name: 'Slann Mage-Priest',     image: '/images/products/lizard.png' },
  { id: 12, name: 'High Elf Prince on Griffon',       image: '/images/products/prince.png' },
];

export const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + IMAGES.length - 1) % IMAGES.length);
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % IMAGES.length);
  };

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Gallery</h1>
          <p>Showcase of beautiful miniatures and terrain</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className={styles.content}>
        <div className={styles.grid}>
          {IMAGES.map((item, idx) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={item.image}
                alt={item.name}
                onError={e => { e.currentTarget.src = '/images/placeholder.jpg'; }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close"
          >
            <FiX />
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.prevNav}`}
            onClick={showPrev}
            aria-label="Previous"
          >
            <FiChevronLeft />
          </button>
          <div >
            <img className={styles.lightboxContent}
              src={IMAGES[lightboxIndex].image}
              alt={IMAGES[lightboxIndex].name}
              onError={e => { e.currentTarget.src = '/images/placeholder.jpg'; }}
            />
          </div>
          <button
            className={`${styles.lightboxNav} ${styles.nextNav}`}
            onClick={showNext}
            aria-label="Next"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;