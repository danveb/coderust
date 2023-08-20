const maxArea = require("../11-containerWithMostWater"); 

// TEST #1
height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
output = 49

// TEST #2 
height2 = [1, 1, 1]
output = 1

describe("test container with most water #11", () => {
  test("returns correct output", () => {
    expect(maxArea(height1)).toEqual(49); 
    expect(maxArea(height2)).toEqual(2); 
  }); 

  test("accepts an empty height array as param", () => {
    expect(maxArea([])).toEqual(0); 
  }); 

  test("area is always greater or equal to zero", () => {
    expect(maxArea([1, 1])).toBeGreaterThanOrEqual(0); 
  });
}); 