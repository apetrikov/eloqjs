function isEven(num) {
  switch (num) {
    case 0:
      return 'even';
    case 1:
      return 'odd';
    default:
      return isEven(num - (num > 0 ? 2 : -2));
  }
}


console.log(isEven(5));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-16));