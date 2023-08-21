const threeSum = require("../15-3Sum"); 

// TEST #1
nums = [-1, 0, 1, 2, -1, -4]
output = [[-1, -1, 2], [-1, 0, 1]]

// TEST #2 
height2 = [1, 1, 1]
output = 1

describe("test threeSum #15", () => {
  test("returns correct output", () => {
    expect(threeSum(nums)).toEqual([[-1, -1, 2], [-1, 0, 1]]); 
  }); 

  test("accepts and returns an empty nums array", () => {
    expect(threeSum([])).toEqual([]); 
  }); 
}); 