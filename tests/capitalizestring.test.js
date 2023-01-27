const capitalizeString = require("../capitalizeString.js");

describe('Capitalize the word', () => {
  test("capitalizeString function exists", () => {
    expect(capitalizeString).toBeDefined();
  });

  test("Capitalize a string", () => {
    expect(capitalizeString("hen")).toEqual("Hen");
  });
})