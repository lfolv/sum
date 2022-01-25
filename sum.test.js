const sum = require("./sum");

test("with empty list", () => {
  expect(sum([])).toBe(0);
});
