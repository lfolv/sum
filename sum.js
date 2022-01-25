function sum(array, initial = 0) {
  return array.reduce((acc, value) => acc + value, initial);
}

module.exports = sum;
