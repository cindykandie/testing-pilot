const stringLength = require("../string");

const runStringCode_1 = () => {
  throw new Error("Please Input your name");
};
const runStringCode_2 = () => {
  throw new Error("Your name is too long");
};

test("counts 'C' + 'o' + 'u' + 'n' + 't' + 'r' + 'y' to equal 7 ", () => {
  expect(stringLength("Country")).toEqual(7);

  expect(() => runStringCode_1()).toThrow(Error);
  expect(() => runStringCode_2()).toThrow(Error);
});
