function arrayToList(arr){
  if (!arr.length) return null;
  return {
    value: arr.shift(),
    rest: arrayToList(arr)
  };
}

console.log(arrayToList([1, 2, 3]))
const myList = arrayToList([1, 2, 3]);

function listToArray(list){
  if (!list) return [];
  return [list.value, ...listToArray(list.rest)];
}

console.log(listToArray(myList));

function prepend (el, list){
  el.rest = list;
  return el;
}

console.log(prepend({value: 0, rest: null}, myList))

function nth (pos, list){
  if (pos === 0) return list || undefined;
  return nth(pos - 1, list.rest);
};

console.log(nth(2, myList));