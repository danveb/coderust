const isPalindrome = require("../125-validPalindrome"); 

describe("test validPalindrome #125", () => {
  test("should return true for palindrome", () => {
    expect(isPalindrome("racecar!!!")).toBe(true);
    expect(isPalindrome("DEIFIED")).toBe(true); 
    expect(isPalindrome("no lemon, no melon")).toBe(true); 
  }); 

  test("should return false for non-palindrome", () => {
    expect(isPalindrome("hello world")).toBe(false); 
    expect(isPalindrome("race a car")).toBe(false); 
  }); 
}); 