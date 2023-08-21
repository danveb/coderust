const rotate = require("../189-rotateArray.js"); 

// TEST #1
nums = [1, 2, 3, 4, 5, 6, 7] 
k = 3
output = [5, 6, 7, 1, 2, 3, 4] 

// TEST #2 
nums2 = [1, 2, 3, 4, 5, 6, 7]
k2 = 7
output = [1, 2, 3, 4, 5, 6, 7]

describe("test rotateArray #189", () => {
  test("returns correct output", () => {
    expect(rotate(nums, k)).toEqual([5, 6, 7, 1, 2, 3, 4]); 
    expect(rotate(nums2, k2)).toEqual([1, 2, 3, 4, 5, 6, 7]); 
  }); 
}); 