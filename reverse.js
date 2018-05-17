function reverseArray(arr) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++){
    resArr[arr.length - 1 - i] = arr[i];
  }
  return resArr;
}

console.log(reverseArray([1,2,3]));

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length/2; i++){
    [arr[arr.length - 1 - i], arr[i]] = [arr[i], arr[arr.length - 1 - i]];
  }
  return arr;
}

console.log(reverseArrayInPlace([1,2,3, 4]));