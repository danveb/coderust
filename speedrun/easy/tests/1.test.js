const twoSum = require("../1-twoSum"); 

describe("test twoSum #1", () => {
  test("should return correct solution", () => {
    expect(twoSum([2, 7, 9, 11, 15], 20)).toEqual([2, 3]); 
  })

  test("should return solution even if not a match", () => {
    expect(twoSum([2, 7, 9, 11, 15], 21)).toEqual([-1, -1]); 
  })

  test("should return correct solution when it does not receive any input array nums", () => {
    expect(twoSum([], 100)).toEqual([]); 
  })
})