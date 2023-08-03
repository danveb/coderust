// Squares of Sorted Array
// given a sorted array of integers, return a sorted array of their squares 

// nums = [-4, -1, 0, 3, 10] 
// output = [0, 1, 9, 16, 100] 

// Brute Forcce 
// - iterate over input array once 
// - for each element we'll square it 
// - at end we'll manually sort in ascending order 

// Time
// - O(n) to iterate over input array 
// - O(n log n) to manually sort the array 
// => O(n log n) 

// Space: O(1) we don't incur extra memory

// function sortedSquares(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i]
//   }
//   let sortedArray = nums.sort((a, b) => a - b); 
//   return sortedArray;  
// }; 

/* 

idx   0   1   2   3   4 
num   -4  -1  0   3   10
      L               R   => 16 vs. 100 => add nums[R] as 100; R--
      L           R       => 16 vs 9 => add nums[L] as 16; L++ 
          L       R       => 1 vs. 9 => add nums[R} as 9; R-- 
          L   R           => 1 vs. 0 => add nums[L] as 1; L++
              LR          => add 0 to array 

*/ 

// My Approach? 
// - initialize output as empty array 
// - initialize LEFT at 0; RIGHT at end of array 
// - keep looping while LEFT <= RIGHT 
// - check: if absolute value of nums[left] > absolute value of nums[right] ?
// - "UNSHIFT" square of nums[left] to output; LEFT ++
// - else: "UNSHIFT" square of nums[right] to output; RIGHT--
// - return output

// Time: O(n) where n is length of input array
// Space: O(n) as we use an array proportional to input array

function sortedSquares(nums) {
  // initialize result array 
  let result = []
  // initialize left/right pointers at opposites
  let left = 0; 
  let right = nums.length - 1; 
  // keep looping while left <= right
  while(left <= right) {
    // compare absolute value of nums[left] vs. nums[right] 
    // whichever is greater will be added to result [] 
    if(Math.abs(nums[left]) < Math.abs(nums[right])) {
      result.unshift(Math.pow(nums[right], 2))
      right--
    } else {
      result.unshift(Math.pow(nums[left], 2))
      left++
    };
  };
  return result; 
}

