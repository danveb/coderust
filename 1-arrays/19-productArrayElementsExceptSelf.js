// Product of Array Elements Except Self 
// given an array, calculate the product of all elements of an array except current element 

// nums = [1, 2, 3, 4]
// output = [24, 12, 8, 6] 

/*

idx     0   1   2   3
num     1   2   3   4   => product = 1
        i/j             => when i === j we skip
        i   j           => product *= nums[j] = 2 
        i       j       => product *= nums[j] = 6
        i           j   => product *= nums[j] = 24 -> push to answer []

*/

// Brute Force
// - use a 2 pointer approach (i, j) where it traverse the array linearly 
// - initialize result [] 
// - i at 0, j at 0 
// - initialize product = 1
// - check: if j !== i we want to multiply element at [j] with product 
// - we push the the product to result []
// - return result []

// Time: O(n^2) where we have a nested for loop
// Space: O(n) we need a result [] proportional to size of input array 

// function productExceptSelf(nums) {
//   const result = []; 
//   for(let i = 0; i < nums.length; i++) {
//     let product = 1; 
//     for(let j = 0; j < nums.length; j++) {
//       // check: if i !== j 
//       if(i !== j) {
//         product *= nums[j]
//       }
//     }; 
//     result.push(product); 
//   };
//   return result; 
// }

/* 

nums = [1, 2, 3, 4]
        i  
           i
               i
                  i
leftNums = [1, 1, 1, 1]
            i            -> to the left is just 1 [1]
               i.        -> to the left is just 1 [1, 1]
                  i.     -> to the left is just 2 [1, 1, 2]
                      i. -> to the left is just 6 [1, 1, 2, 6] 
            
            
rightNums = [1, 1, 1, 1] 
                      i  -> to the right is just 1 [1]
                   i     -> to the right is just 4 [4, 1]
                i        -> to the right is just 12 [12, 4, 1]
             i           -> to the right is just 24 [24, 12, 4, 1]

output = [24, 12, 8, 6] 

*/ 

// Optimal
// - initialize output array as new Array with 1's 
// - initialize leftNums as new Array with 1's (new Array(array.length).fill(1))
// - initialize rightNums as new Array with 1's (new Array(array.length).fill(1))
// - work on leftNums: 
// -- leftProduct at 1 (gets updated)
// -- for loop entire nums array 
// -- swap leftNums[i] with leftProduct  
// -- leftProduct *= nums[i] (holds runningProduct)

// - work on rightNums: 
// -- rightProduct at 1 (gets updated)
// -- reverse for loop (start at length - 1)
// -- swap rightNums[i] with rightProduct 
// -- rightProduct *= nums[i] (holds runningProduct)

// - work on final output array 
// - for loop nums array 
// output[i] = leftNums[i] * rightNums[i]
// - return output

// Time: O(n)
// Space: O(1) 


function productExceptSelf(nums) {
  // initialize 2 arrays as same length filled with 1's 
  let leftNums = new Array(nums.length).fill(1)
  let rightNums = new Array(nums.length).fill(1)
  let result = []; 

  // work on leftNums 
  let leftProduct = 1; 
  for(let i = 0; i < nums.length; i++) {
    leftNums[i] = leftProduct
    leftProduct *= nums[i]
  };

  // work on rightNums 
  let rightProduct = 1; 
  for(let i = nums.length - 1; i >= 0; i--) {
    rightNums[i] = rightProduct 
    rightProduct *= nums[i]
  };

  // iterate for final array
  for(let i = 0; i < nums.length; i++) {
    result[i] = leftNums[i] * rightNums[i]
  };

  return result; 
}