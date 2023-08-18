const containsDuplicate = require("../217-containsDuplicate"); 

describe("test containsDuplicate #217", () => {
  test("should return true for containing duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true); 
    expect(containsDuplicate([23, 23, 23])).toBe(true); 
  });

  test("should return false for distinct elements", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false); 
    expect(containsDuplicate([0, 17, 27, 37, 47])).toBe(false); 
  });
});