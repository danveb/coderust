// Container with Most Water
// given an array of heights of vertical lines, find two lines that form a container that holds water

/* 

idx   0   1   2   3   4   5   6   7   8   => length = j - i
num   1   8   6   2   5   4   8   3   7   => LENGTH = MIN(height[j], height[i]) 
                                          => area = length * LENGTH 
                                          => maxArea = MAX(area, maxArea) 

      i   j                               => L: 1 - 0 = 1 // W: 8 => maxArea(8,0) => 8 
      i       j                           => L: 2 - 0 = 2 // W: 6 => maxArea()
      i           j                       => L: 3 - 0 = 3 // W: 2 => maxArea 6 
      i               j                   => L: 4 - 0 = 4 // W: 5 => maxArea 20 
          
          i   j                           => L: 2 - 1 = 1 // W: 8 => 8 

*/ 

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// output = 49 

// area = MIN(left bar, right bar) * distance between bars 
// l = j - i
// h = MIN(left bar, right bar) 

// Brute Force
// - use a 2 pointer approach (i, j) 
// Goal: Find the maximum area = LENGTH * high 
// LENGTH -> j - i 
// high -> MIN height[j], height[i]
// area = LENGTH * high
// max -> MAX area, max 

// Time: O(n^2) where n is the length of input array being traversed twice
// Space: O(1) we don't incur extra memory

// function maxWaterAreaContainer(height) {
//   // initialize maxArea at 0
//   let maxArea = 0;
//   // iterate over height array once 
//   for(let i = 0; i < height.length; i++) {
//     // iterate over height array again (i + 1) 
//     for(let j = i + 1; j < height.length; j++) {
//       // initialize LENGTH as j - i (indices only)
//       let length = j - i
//       // initialize HEIGHT as MIN(height[j], height[i])
//       let high = Math.min(height[j], height[i])
//       // initialize AREA as LENGTH * HEIGHT 
//       let area = length * high 
//       // set maxArea as MAX between area, maxArea
//       maxArea = Math.max(area, maxArea); 
//     }
//   }
//   return maxArea; 
// }

/*

idx   0   1   2   3   4   5   6   7   8   => length = RIGHT - LEFT
num   1   8   6   2   5   4   8   3   7   => high = MIN(height[RIGHT], height[LEFT]) 
                                          => area = length * high 

      L                               R   => length = 8 - 0 = 8
                                             high = MIN(7, 1) = 1
                                             area = length * high = 8
                                             maxArea = MAX(8, 0) = 8
                                             7 > 1; LEFT++ 
                                      
          L                           R   => length = 8 - 1 = 7
                                             high = MIN(7, 8) = 7 
                                             area = length * high = 49
                                             maxArea = MAX(8, 49) = 49
                                             8 > 7; RIGHT--
                                            
          L                       R       => length = 7 - 1 = 6
                                             high = MIN(3, 8) = 3
                                             area = length * high = 18
                                             maxArea = MAX(49, 18) = 49
                                             8 > 3; LEFT++                                       

*/ 

// Optimal
// - use a pointer approach (left/right) from opposite sides of the input array 
// - initialize maxArea at 0
// - initialize LEFT pointer at 0
// - initialize RIGHT pointer at end of height array 
// - keep looping while left <= right 
// - initialize HIGH = MIN(height[LEFT], height[RIGHT]) 
// - initialize LENGTH = RIGHT - LEFT 
// - initialize AREA = LENGTH * HIGH 
// - set maxArea = MAX(AREA, maxArea)
// - CHECK: if height[LEFT] > height[right] -> LEFT++ 
// - CHECK: if height[RIGHT] > height[LEFT] -> RIGHT-- 
// - return maxArea

// Time: O(n) where n is length of input "height" array
// Space: O(1) 

function maxWaterAreaContainer(height) {
  if(height.length === 0) return 0; 
  let maxArea = 0; 
  let left = 0;
  let right = height.length - 1;
  while(left < right) {
      // h: MIN(height[left], height[right])
      let h = Math.min(height[left], height[right]); 
      // l: right - left
      let l = right - left; 
      // area: h * l
      let area = h * l;
      // max: MAX(area, max) 
      maxArea = Math.max(area, maxArea); 
      // check: if height[left] < height[right]? left++
      // else... right-- 
      if(height[left] < height[right]) {
        left++
      } else {
        right--
      }
  }
  return maxArea; 
}