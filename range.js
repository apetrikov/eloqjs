function range(a, b){
  let res = [];
  for (let i = a; i <=b; i++){
    res.push(i);
  }
  return res;
}

console.log(range(5, 9));

function sum(arr){
  let res = 0;
  for (let i of arr){
    res += i;
  }
  return res;
}

console.log(sum([1, 2, 3, 4]));

function rage(a, b, step = 1){
  let res = [];
  for (let i = a; step > 0 ? i <= b : i >= b; i += step){
    res.push(i);
  }
  return res;
}

console.log(rage(10, 5, -2));
console.log(rage(5, 10, 2));