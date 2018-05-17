// Loop

const loop = (value, test, update, body) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


// Everything

// const every = (array, test) => !array.some(item => !test(item));
const every = (array, test) => {
  for (let i of array) {
    if (!test(i)) return false;
  }
  return true;
};

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


function dominantDirection(text) {
  let dir = {
    ltr: 0,
    rtl: 0,
    ttb: 0
  };
  const max = (obj) => Object.entries(obj).reduce((prev, curr) => prev[1] > curr[1] ? prev : curr)[0];
  for (let i = 0; i < text.length - 1; i++){
    const script = characterScript(text.charCodeAt(i));
    if (script) dir[script.direction]++;
  }
  return max(dir);
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
