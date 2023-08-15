const merge = require("../56-mergeIntervals"); 

describe("test merge #56", () => {
  test("should return correct solution", () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [9, 26]])).toEqual([[1, 6], [8, 26]]); 
  }); 

  test("should return empty [] for empty input interval", () => {
    expect(merge([[]])).toEqual([[]]); 
  });
})