function isBetweenNums(min, max) {
  return function (num) {
    return num <= max && num >= min;
  };
}
