const deepEqual = (a, b) => {
  const isObject = el => typeof el === 'object';
  const compareKeys = (aKeys = [], bKeys = []) => {
    if (aKeys.length === bKeys.length) {
      return aKeys.every((item, i) => item === bKeys[i]);
    }
  };
  const compareValues = (aValues = [], bValues = []) =>
  aValues.every((el, i) => deepEqual(el, bValues[i]));

  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  if (a === b) return true;
  if (isObject(a) && isObject(b)) {
    if (compareKeys(Object.keys(a), Object.keys(b))) {
      if (compareValues(Object.values(a), Object.values(b))) {
        return true;
      }
    }
  }
  return false;
};


const obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
