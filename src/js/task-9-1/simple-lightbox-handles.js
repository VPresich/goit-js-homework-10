import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; 

import '../../css/layout/simple-lightbox-window.css'; // my styles for customizing 
import iconsUrl from '../../img/icons.svg';

import createGallery from './simple-lightbox-gallery.js';
import images from '../data/gallery-images.js';

const galleryRef = document.querySelector('.gallery');
createGallery(images, galleryRef);

new SimpleLightbox('.gallery a', {   
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionsDelay: 250,

  nav: true,
  navText: [
  `<svg
    class="lightbox-button-icon-prev"
    width="24"
    height="24"
    aria-label="icon arrow left">
      <use href="${iconsUrl}#icon-chevron-left"></use>
  </svg>`,

  `<svg
    class="lightbox-button-icon-next"
    width="24"
    height="24"
    aria-label="icon arrow right">
    <use href="${iconsUrl}#icon-chevron-right"></use>
  </svg>`,
  ],

  close: true,
  closeText: `
  <svg class="lightbox-close-icon" width="16" height="16">
    <use href="${iconsUrl}#close-form"></use>
  </svg>`,

  enableKeyboard: true,
  showCounter: true,
  animationSlide: true,
  loop: true,
  widthRatio: 0.85,
  heightRatio: 0.9,
});

