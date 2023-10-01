import { isEscapeKey } from './util.js';

const COMMENTS_PORTION_VALUE = 5;
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const pictureImg = bigPicture.querySelector('.big-picture__img img');
const pictureCommentsCount = bigPicture.querySelector('.comments-count');
const commentTemplate = document.querySelector('#comments').content.querySelector('.social__comment');
const pictureComments = document.querySelector('.social__comments');
const pictureDescribe = document.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const commentsCountDisplayed = document.querySelector('.comments-count-displayed');

let commentsDisplayed = 0;
let comments = [];


const getCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const img = commentElement.querySelector('.social__picture');
  const text = commentElement.querySelector('.social__text');
  img.src = comment.avatar;
  img.alt = comment.name;
  text.textContent = comment.message;
  return commentElement;
};
const renderComments = () => {
  commentsDisplayed += COMMENTS_PORTION_VALUE;

  if (commentsDisplayed >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsDisplayed = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsDisplayed; i++) {
    const commentElement = getCommentElement(comments[i]);
    fragment.append(commentElement);
  }

  pictureComments.innerHTML = '';
  pictureComments.append(fragment);
  commentsCount.textContent = comments.length;
  commentsCountDisplayed.textContent = commentsDisplayed;
};

const openBigPhoto = (photo) => {
  bigPicture.classList.remove('hidden');


  //заполняем основные данные
  pictureImg.src = photo.url;
  pictureCommentsCount.textContent = photo.comments.length;
  pictureDescribe.textContent = photo.description;

  // создаем комментарии
  comments = photo.comments;
  renderComments();

  //добавляем класс(п.4)
  body.classList.add('modal-open');

  //обработчик закрытия по кнопке
  document.addEventListener('keydown', onDocumentKeydown);

};


const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsDisplayed = 0;
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

commentsLoader.addEventListener('click',() => {
  renderComments();
});

export{openBigPhoto};

