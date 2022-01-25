const sum = require("./sum");

test("with empty list", () => {
  expect(sum([])).toBe(0);
});

test("with a array of numbers", () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test("with another array of numbers", () => {
  expect(sum([10, 100, 60, 1, 0])).toBe(171);
});
