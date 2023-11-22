const imageMarkup = ({ preview, description, original }) => {
  return `<li class="gallery-item">
              <a class="gallery-link" href="${original}">
                <img class="gallery-img"
                    src="${preview}"
                    alt="${description}"                    
                 />
              </a>
            </li>`;
};

function createGallery(images, galleryRef) {
  const imagesMarkup = images.map(imageMarkup).join('');
  galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);
}

export default createGallery;
