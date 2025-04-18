import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import styles from './Gallery.module.scss';

interface ImageItem {
  id: number;
  name: string;
  image: string;
}

const IMAGES: ImageItem[] = [
  { id: 1, name: 'Miniature Diorama',   image: '/images/products/modeling-kit.png' },
  { id: 2, name: 'Hand‑Painted Figure',   image: '/images/products/paint-set.png' },
  { id: 3, name: 'Custom Terrain Piece',  image: '/images/products/brush-set.png' },
  { id: 4, name: 'Scratch Built Model',   image: '/images/products/hand-painted.png' },
  { id: 5, name: 'Epic Battle Scene',     image: '/images/products/castle-terrain.png' },
  { id: 6, name: 'Group Army Shot',       image: '/images/products/colorful-set.png' },
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