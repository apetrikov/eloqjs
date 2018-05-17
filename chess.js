const chess = (n) => {
  let result = '';

  for (let i = 0; i < n*n+n; i++){
    let symbol = ' ';
    if (!(i % 2)) symbol = '#';
    if (!(i % (n+1))) symbol = '\n';
    result += symbol;
  }

  return result;
};

console.log(chess(16));