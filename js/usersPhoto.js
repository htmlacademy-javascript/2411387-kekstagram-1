const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content;


const getPhotoElement = (photo) => {
  const photoElement = picturesTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return photoElement;
};
const createGallery = (photos) => {
  const photoFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const photoElement = getPhotoElement(photo);
    photoFragment.append(photoElement);
  });
  pictures.append(photoFragment);
};


export {createGallery};


