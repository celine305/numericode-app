const numToChar = (num) => {
  if(num < 27 && Number.isInteger(num)) {
      return String.fromCharCode(num + 96); // add 96 because the unicode of 'a' is 97
   } else if (num > 26) {
      num /= 27;
      return numToChar(num);
   } else {
      return ' ';
   }
};

const decoder = (numeriCode) => {
  return numeriCode.split(' ').map(num => {
    num = Number(num);
    return numToChar(num);
  }).join('');
};

module.exports = {
  numToChar,
  decoder
};
