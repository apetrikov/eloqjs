function countChar (str, Char) {
  let result = 0;
  for(let i = 0; i < str.length; i++){
    if (str[i] === Char) result++;
  }
  return result;
};

function countBs (str) {
  return countChar(str, 'B');
};



console.log(countBs('BlfBkjhxcnvBurhfidB'));