const test = (n) => {
  if (n == 0 || n == 1) {
    return String(n);
  }
  return test(Math.floor(n / 2)) + String(n % 2);
};

console.log(test(101));
