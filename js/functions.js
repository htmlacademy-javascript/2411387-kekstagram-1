

const checkPalindrom = (string) => {
  const formattedString = string.toLowerCase().replaceAll(' ','');

  const reverseString = formattedString.split('').reverse().join('');
  return string === reverseString;
};
// eslint-disable-next-line no-console
console.log(checkPalindrom('топот'));


const formatedToNumber = (string) => {
  const formattedString = string.toString().replace(/\D/g,'');
  return parseInt(formattedString, 10);
};
// eslint-disable-next-line no-console
console.log(formatedToNumber(1.5));


// eslint-disable-next-line no-console

const myPadStart = (string, length, padString) => {
  if (string.length >= length) {
    return string;
  }

  const padStringLength = length - string.length; // 4 - 1 = 3

  let newPadString = padString.slice(0, padStringLength % padString.length); // 3 % 2 = 1

  // w

  while (newPadString.length < padStringLength) {
    newPadString += padString; // + wwe
  }

  return newPadString + string;
};
// eslint-disable-next-line no-console
console.log(myPadStart('q', 4, 'we'));

const checkStringLength = (string,length) => {
  if (string.length <= length) {
    return true;
  }
  return string.length <= length;
};
// eslint-disable-next-line no-console
console.log(checkStringLength('проверяемая строка', 10));
