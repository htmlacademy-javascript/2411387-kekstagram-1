
import {openBigPhoto} from './bigPhoto.js';

const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');


const getPhotoElement = (photo) => {
  const photoElement = picturesTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.dataset.photoId = photo.id;
  return photoElement;
};

const createGallery = (photos) => {
  const photoFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoElement = getPhotoElement(photo);
    photoFragment.append(photoElement);
  });
  pictures.addEventListener('click', (evt) => {
    const photoElement = evt.target.closest('[data-photo-id]');
    if (!photoElement) {
      return;
    }
    evt.preventDefault();

    const photo = photos.find((item) => item.id === +photoElement.dataset.photoId);
    openBigPhoto(photo);
  });

  pictures.append(photoFragment);
};

export {createGallery};
