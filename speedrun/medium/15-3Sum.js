// 3Sum 
// given an array "nums" return all triplets [nums[i], nums[j], nums[k]] such that they add up to 0
// must not contain duplicate triplets 

nums = [-1, 0, 1, 2, -1, -4] 
output = [[-1, -1, 2], [-1, 0, 1]]

// Brute Force
// - use a 3 nested for loop approach (i, j, k) pointers so that they add up to 0 
// - PROBLEM: WE'LL HAVE DUPLICATES 

// Time: O(n^3) where we use a nested for loop with i,j,k 
// Space: O(n) for output array storing triplets

// function threeSum(nums) {
//   if(nums.length === 0) return []; 
//   const result = []; 
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       for(let k = j + 1; k < nums.length; k++) {
//         // initialize sum as nums[i] + nums[j] + nums[k] 
//         let sum = nums[i] + nums[j] + nums[k] 
//         if(sum === 0) {
//           result.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
//   return result; 
// }

// Can we do better? 
// - manually sort the array in ascending order so we can keep track of duplicates 
// - use a 3 nested for loop approach (i, j, k) 
// --> if(i > 0 && nums[i] === nums[i - 1]) continue the loop 
// --> if(j > i + 1 && nums[j] === nums[j - 1]) continue the loop
// --> if(k > j + 1 && nums[k] === nums[k - 1]) continue the loop 

// Time: O(n^3) for a nested for loop with i,j,k + O(n log n) for sorting = O(n^3) 
// Space: O(n) for output array storing triplets

// function threeSum(nums) {
//   if(nums.length === 0) return [];
//   const result = [];
//   // manually sort 
//   nums.sort((a, b) => a - b); 
//   for(let i = 0; i < nums.length; i++) {
//     // CHECK
//     if(i > 0 && nums[i] === nums[i - 1]) continue; 
//     for(let j = i + 1; j < nums.length; j++) {
//       if(j > i + 1 && nums[j] === nums[j - 1]) continue; 
//       for(let k = j + 1; k < nums.length; k++) {
//         if(k > j + 1 && nums[k] === nums[k - 1]) continue; 
//         let sum = nums[i] + nums[j] + nums[k] 
//         if(sum === 0) result.push([nums[i], nums[j], nums[k]])
//       }
//     }
//   };
//   return result; 
// }

/*

idx   0   1   2   3   4   5
num   -1  0   1   2   -1  -4
sort  -4  -1  -1  0   1   2
      i   L               R   => -4 - 1 + 2 = -3 
      i       L           R   => -4 - 1 + 2 = -3
      i           L       R   => -4 + 0 + 2 = -2
      i               L   R   => -4 + 1 + 2 = 3

          i   L           R   => -1 - 1 + 2 = 0; push [-1, -1, 2] to result; L++
          i       L       R   => -1 + 0 + 2 = 1
          i       L   R       => -1 + 0 + 1 = 0; push [-1, 0, 1] to result; 

              i               => continue 
                  
                  i   L   R   => 0 + 1 + 2 = 3; end
*/ 

// Can we do better? 
// - manually sort the array in ascending order
// - iterate over input array once (i at 0 until end) 
// - use a 2 pointer approach (left/right) to sum i + nums[left] + nums[right] === 0 

// Time: O(n^2) we perform 1 for loop + 1 while loop 
// Space: O(n) we use. anoutput array 

function threeSum(nums) {
  if(nums.length === 0) return [];
  const result = [];
  nums.sort((a, b) => a - b); 
  for(let i = 0; i < nums.length; i++) {
    // check duplicate now 
    if(i > 0 && nums[i] === nums[i - 1]) continue; 
    let left = i + 1 
    let right = nums.length - 1; 
    // keep looping while left < right 
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right] 
      // case 1: sum > 0? 
      // right-- 
      if(sum > 0) {
        right-- 
      // case 2: sum < 0? 
      // left++ 
      } else if(sum < 0) {
        left++ 
      // case 3: sum === 0? 
      } else {
        result.push([nums[i], nums[left], nums[right]]); 
        // we can push entire sum to result array 
        // conditional check while any duplicates are present to left && right
        // example: [-4, 0, 0, 1, 3, 4, 4] 
        // LEFT duplicates are 0 0 
        // RIGHT duplicates are 4 4
        while(nums[left] === nums[left + 1]) left++ 
        while(nums[right] === nums[right - 1]) right--
        // continue moving pointers to look for other potential triplets
        left++
        right--
      }
    }
  }
  return result; 
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); 