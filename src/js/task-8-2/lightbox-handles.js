import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { KEY_CODE_ESC } from '../common/constants.js';
import createGallery from '../common/create-gallery.js';
import images from '../data/gallery-images.js';

let modalWindowRef = {};

const galleryRef = document.querySelector('.gallery');
createGallery(images, galleryRef);
galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {
  const targetRef = event.target;
  const isImageRef = targetRef.classList.contains('gallery-img');
  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const imageSrc = {
    src: targetRef.dataset.source,
    alt: targetRef.alt,
    preview: targetRef.src,
  };

  openModalWindow(imageSrc);
}

function openModalWindow({ src, alt }) {
  modalWindowRef = basicLightbox.create(
    `<div class="lightbox-modal">   
        <img class="lightbox-image" src="${src}" alt="${alt}"/>           
    </div>`,
    {
      onShow: () => {
        document.addEventListener('keydown', onKeydown);
      },
      onClose: () => {
        document.removeEventListener('keydown', onKeydown);
      },
      closable: true,
    }
  );
  modalWindowRef.show();
}

function onKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    modalWindowRef.close();
  }
}
