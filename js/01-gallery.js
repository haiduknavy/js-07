import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const makeGalleryEl = galleryItems.map(item => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>
    `
}).join('');

gallery.insertAdjacentHTML('afterbegin',makeGalleryEl)

function onGalleryRefOpen(event){
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`)
  
  instance.show();

  window.addEventListener('keydown', (event) => {
   
    if (event.key === 'Escape') {
      instance.close();
    }
  });
    
};

gallery.addEventListener('click', onGalleryRefOpen);




