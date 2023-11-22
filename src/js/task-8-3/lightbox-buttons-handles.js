import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { KEY_CODE_ESC } from '../common/constants.js';
import createGallery from '../common/create-gallery.js';
import images from '../data/gallery-images.js';

import LightboxSliderInterface from './lightbox-slider-interface.js';
import iconsUrl from '../../img/icons.svg';

const galleryRef = document.querySelector('.gallery');
createGallery(images, galleryRef);
galleryRef.addEventListener('click', onImageClick);

let modalWindowRef = null;

function onImageClick(event) {
  const targetRef = event.target;
  const isImageRef = targetRef.classList.contains('gallery-img');
  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const closestLi = targetRef.closest('.gallery-item');
  const listImages = event.currentTarget.children;
  const indexList = Array.from(listImages).indexOf(closestLi);

  openModalWindow(listImages, indexList);
}

function openModalWindow(listImages, indexList) {
  modalWindowRef = basicLightbox.create(createLightboxMarkup(), {
    onShow: instance => {
      document.addEventListener('keydown', onKeydown);

      const lightboxCloseBtn = instance
        .element()
        .querySelector('.lightbox-close');
      lightboxCloseBtn.addEventListener('click', instance.close);

      const lightboxSlider = new LightboxSliderInterface(
        indexList,
        listImages,
        instance
      );
    },
    onClose: instance => {
      document.removeEventListener('keydown', onKeydown);
    },
    closable: true,
  });
  modalWindowRef.show();
}

function onKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    modalWindowRef.close();
  }
}

function createLightboxMarkup() {
  return `
  <div class="lightbox-modal">
      <p class="lightbox-counter"></p>  
      <button
        class="lightbox-close"
        type="button"
        id="id-lightbox-close"
      >
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${iconsUrl}#close-form"></use>
        </svg>
      </button>
      <div class="lightbox-slider">

        <button
          class="lightbox-button"
          id="prev-lightbox-button"
          type="button">
          <svg
            class="lightbox-button-icon-prev"
            width="24"
            height="24"
            aria-label="icon arrow left"
          >
            <use href="${iconsUrl}#icon-chevron-left"></use>
          </svg>
        </button>

        <img class="lightbox-image" src="" alt="" width="1112" height="640"/>           
          
        <button
          class="lightbox-button"
          id="next-lightbox-button"
          type="button">
          <svg
            class="lightbox-button-icon-next"
            width="24"
            height="24"
            aria-label="icon arrow right"
          >
            <use href="${iconsUrl}#icon-chevron-right"></use>
          </svg> 
        </button>
      </div>
    </div>`;
}
