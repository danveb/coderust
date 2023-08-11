// Rotate Array by N Elements (Leetcode #189)
// given an array rotate it by "N" elements 
// for a positive "N" perform "right" rotation
// for a negative "N" perform "left" rotation 

// nums = [1, 2, 3, 4, 5]
// n = 2 -> positive MOVE ELEMENTS TO RIGHT
// step n = 1: [5, 1, 2, 3, 4]
// step n = 2: [4, 5, 1, 2, 3]

// nums = [1, 2, 3, 4, 5]
// n = -2 -> negative MOVE ELEMENTS TO LEFT 
// step n = -1: [2, 3, 4, 5, 1]
// step n = -2: [3, 4, 5, 1, 2]

// IDEA: normalize rotations -> array of length 10, rotating 14 elements is 14%10 = 4 elements 
// convert negative rotations to positive rotations
// reverse elements of original array
// reverse elements from 0 to n - 1
// reverse elements from n to length - 1

// 1. reverse the array elements 
// function reverseArray(nums, start, end) {
//   while(start < end) {
//     [nums[start], nums[end]] = [nums[end], nums[start]]
//     start++
//     end--
//   }
//   return nums; 
// }

// function rotateArray(nums, n) {
//   // initialize len as length of input array 
//   let len = nums.length; 

//   // normalize "N" rotations
//   n = n % len; 
//   // check: If n is negative we convert to positive
//   if(n < 0) {
//     n = n + len 
//   };

//   // partition array
//   reverseArray(nums, 0, len - 1);
//   reverseArray(nums, 0, n - 1); 
//   reverseArray(nums, n, len - 1); 
// }


// Brute Force
// function rotateArray(nums, n) {
//   const len = nums.length; 
  
//   n = n % len; // to handle cases where "N" > length of array 
//   if(n < 0) {
//     n = n + len; // handle negative len to positive len 
//   }

//   // iterate over input array un tp "N" 
//   for(let i = 0; i < n; i++) {
//     let lastElement = nums[len - 1]
//     for(let j = len - 1; j > 0; j--) {
//       nums[j] = nums[j - 1]
//     }
//     nums[0] = lastElement; 
//   };
//   return nums; 
// }

// ========================================================================================

// AlgoMonster 

// Approach:
// - reverse entire array 
// - reverse first "N" elements 
// - reverse rest of the array 

// Time: O(n) where n is length of input array
// Space: O(1) we don't incur extra memory 

// helper function
function reverse(nums, start, end) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    start++ 
    end-- 
  }
  return nums; 
}

function rotateArray(nums, n) {
  if(nums.length === 0) return []; 

  // normalize "N" rotations 
  n = n % nums.length; 
  // check: if n is negative we'll add to length of array 
  if(n < 0) {
    n = n + nums.length; 
  }

  // call helper function "reverse" N = 3 times
  reverse(nums, 0, nums.length - 1) // [5, 4, 3, 2, 1]
  reverse(nums, 0, n - 1) // [3, 4, 5, 2, 1]
  reverse(nums, n, nums.length - 1) // [3, 4, 5, 1, 2]
}