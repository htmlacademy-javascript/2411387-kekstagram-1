import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const pictureImg = bigPicture.querySelector('.big-picture__img img');
const pictureCommentsCount = bigPicture.querySelector('.comments-count');
const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const pictureComments = document.querySelector('.social__comments');
const pictureDescribe = document.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');


const getCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const img = commentElement.querySelector('.social__picture');
  const text = commentElement.querySelector('.social__text');
  img.src = comment.avatar;
  img.alt = comment.name;
  text.textContent = comment.message;
  return commentElement;
};

const openBigPhoto = (photo) => {
  bigPicture.classList.remove('hidden');
  //заполняем основные данные
  pictureImg.src = photo.url;
  pictureCommentsCount.textContent = photo.comments.length;
  pictureDescribe.textContent = photo.description;

  // создаем комментарии
  const commentFragment = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    const commentElement = getCommentElement(comment);
    commentFragment.append(commentElement);
  });
  pictureComments.textContent = '';
  pictureComments.append(commentFragment);

  //скрываем элементы(п.3)
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
  //добавляем класс(п.4)
  body.classList.add('modal-open');

  //обработчик закрытия по кнопке
  document.addEventListener('keydown', onDocumentKeydown);

};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

};
function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export{openBigPhoto};

