function fibo_series(num) {
  if (num == 1) {
    return [0, 1];
  } else {
    var s = fibo_series(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
  }

  return s;
}

console.log(fibo_series(8));
