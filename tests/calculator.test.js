const Calculator = require("../calc.js");

const calc = new Calculator(10, 5);

describe('Calculate two numbers', () => {
test("calculator object exists", () => {
  expect(calc).toBeDefined();
});

test("Addition function", () => {
  expect(calc.sum()).toEqual(15);
});

test("Subtraction function", () => {
  expect(calc.diff()).toEqual(5);
});

test("Multiplication function", () => {
  expect(calc.product()).toEqual(50);
});

test("Division function", () => {
  expect(calc.divide()).toEqual(2);
});
})