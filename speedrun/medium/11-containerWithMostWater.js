// Container With Most Water
// given an array "height", find two lines that together form a container. 
// return max amount of water a container can store

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7] 
// output = 49

/* 

idx   0   1   2   3   4   5   6   7   8   => high = j - i
num   1   8   6   2   5   4   8   3   7   => width = MIN(height[j], height[i]) 
                                          => area = high * width
                                          => maxArea = MAX(area, maxArea) 

      i   j                               => L: 1 - 0 = 1 // W: 8 => maxArea(8,0) => 8 
      i       j                           => L: 2 - 0 = 2 // W: 6 => maxArea()
      i           j                       => L: 3 - 0 = 3 // W: 2 => maxArea 6 
      i               j                   => L: 4 - 0 = 4 // W: 5 => maxArea 20 
          
          i   j                           => L: 2 - 1 = 1 // W: 8 => 8 

*/ 

// FORMULA
// high is j - i 
// width = Math.min(height[j], height[i])
// area = high * width 
// maxA = Math.max(area, maxArea) 

// Brute Force
// - use a 2 pointer approach where we find width and area (i, j) 
// - initialize maxA at 0 
// - iterate over height array once (i at 0 until end) 
// - iterate over height array again (j at i + 1 until end) 
// - initialize high as j - i 
// - initialize width as MIN(height[j], height[i])
// - set area as high * width 
// - set maxA as MAX(maxA, area)
// - return maxA 

// Time: O(n^2) where we use a nested for loop 
// Space: O(1) 

// function maxArea(height) {
//   if(height.length === 0) return 0; 
//   let maxA = 0; 
//   for(let i = 0; i < height.length; i++) {
//     for(let j = i + 1; j < height.length; j++) {
//       let high = j - i
//       let width = Math.min(height[j], height[i])
//       let area = high * width; 
//       maxA = Math.max(area, maxA); 
//     }
//   };
//   return maxA; 
// }

// Optimal
// - use a 2 pointer approach (LEFT / RIGHT) that move inwards 
// - initialize maxA at 0 
// - initialize left at 0
// - initialize right at height.length - 1
// - keep looping while Left < Right 
// - initialize high as right - left 
// - initialize width as MIN(height[right], height[left])
// - set area as high * width
// - set maxA as MAX(area, maxA)
// - move pointers ++/-- 
// - return maxA

// Time: O(n) where n is length of input array
// Space: O(1) 

function maxArea(height) {
  if(height.length === 0) return 0; 
  let maxA = 0; 
  let left = 0; 
  let right = height.length - 1;
  while(left < right) {
    let high = right - left; 
    let width = Math.min(height[right], height[left]); 
    let area = high * width; 
    maxA = Math.max(maxA, area); 
    // check: if height[left] < height[right]? left++
    // check: if height[right] < height[left]? right--
    if(height[left] < height[right]) {
      left++ 
    } else {
      right--
    }
  };
  return maxA; 
}

// The only way we can hold more water when the horizontal distance between two pointers decrease, is to increase the vertical distance min(height[left], height[right]). We wish to keep the taller line from height[left], height[right] and continue searching for another line that's taller than the lower line, which potentially forms a larger container.

module.exports = maxArea