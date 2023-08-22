const DESCRIPTIONS = [
  'Кто ходит в гости по утрам, тот поступает мудро',
  'Вокруг шум. Пусть так.',
  'Работа сама себя не сделает',
  'Welcome!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'NoName',
  'Ольга Анатольевна',
  'Тиранозавр Рекс',
  'Гарри П.',
];

const LIKES_MIN = 15;
const LIKES_MAX = 200;

const AVATARS_MIN = 1;
const AVATAR_MAX = 6;

const ID_COMMENT_MIN = 1;
const ID_COMMENT_MAX = 30;

const COMMENTS_AMOUNT_MIN = 1;
const COMMENTS_AMOUNT_MAX = 10;

const PHOTOS = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getComment = () => {
  const avatarNumber = getRandomInteger(AVATARS_MIN, AVATAR_MAX);
  return {
    id: getRandomInteger(ID_COMMENT_MIN, ID_COMMENT_MAX),
    avatar:`img/avatar-${avatarNumber}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
};

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
const photos = Array.from({length: PHOTOS},(item, index) => describePhoto(index + 1));
// eslint-disable-next-line no-console
console.log(photos);


