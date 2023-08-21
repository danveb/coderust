// Rotate Array by N Elements 
// given an integer array "nums", rotate the array to the right by "K" steps, where "K" is non-negative 

nums = [1, 2, 3, 4, 5, 6, 7] 
k = 3
output = [5, 6, 7, 1, 2, 3, 4] 

// Brute Force
// - build startArr as [all elements at i < nums.length - k]
// - else we continue without pushing into startArr
// - build endArr by pushing [all elements at i < nums.length - k] 
// - else we continue 

// Time: O(n) where n is length of input array
// Space: O(n) for using 2 arrays 

// function rotate(nums, k) {
//   // edge case: if k === length of array we can return nums as is 
//   if(k === nums.length) return nums; 

//   // build arrStart 
//   const arrStart = []; 
//   // iterate over input array once until end 
//   for(let i = 0; i < nums.length; i++) {
//     // check: if current element < nums.length - k we unshift to new array 
//     if(i < nums.length - k) {
//       continue
//     } else {
//       arrStart.push(nums[i]); 
//     }; 
//   }

//   // build arrEnd
//   const arrEnd = []; 
//   for(let i = 0; i < nums.length; i++) {
//     if(i < nums.length - k) {
//       arrEnd.push(nums[i]); 
//     } else {
//       continue
//     }
//   };

//   // return [...arrStart, ...arrEnd] // spreading... 
//   return arrStart.concat(arrEnd); 
// }

// Optimal (in-place without modifying)
// - normalize the rotations, meaning they do not exceed length of the array 
// - reverse elements of original array
// - reverse elements from 0 to n - 1
// - reverse elements from n to length - 1

// Time: O(n) 
// Space: O(1) 

function rotate(nums, k) {
  if(nums.length === 0) return []; 

  // use modulo to normalize rotations 
  k = k % nums.length 
  // check: if k is negative we should still make a positive rotation 
  if(k < 0) {
    k = k + nums.length; 
  };

  // 1. reverse elements of original array 
  reverse(nums, 0, nums.length - 1); 

  // 2. reverse elements from 0 to k - 1
  reverse(nums, 0, k - 1)

  // 3. reverse elements from k to length - 1
  reverse(nums, k, nums.length - 1); 
}

// reverse function 
function reverse(nums, start, end) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end-- 
  }; 

  return nums; 
}

module.exports = rotate