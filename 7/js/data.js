import {getRandomInteger, getRandomArrayElement, getComment} from './util.js';

const DESCRIPTIONS = [
  'Кто ходит в гости по утрам, тот поступает мудро',
  'Вокруг шум. Пусть так.',
  'Работа сама себя не сделает',
  'Welcome!'
];


const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_AMOUNT_MIN = 1;
const COMMENTS_AMOUNT_MAX = 10;

const PHOTOS = 25;


const describePhoto = (id) => {
  const commentsAmount = getRandomInteger(COMMENTS_AMOUNT_MIN, COMMENTS_AMOUNT_MAX);

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
    comments:Array.from({ length:commentsAmount}, getComment)
  };
};
const describePhotos = () => Array.from({length: PHOTOS},(item, index) => describePhoto(index + 1));

export {describePhotos};
