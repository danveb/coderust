// Product of Array Except Self 
// given an array "nums", return array "answer" such that answer[i] is equal to product of all elements except nums[i]

nums = [1, 2, 3, 4] 
output = [24, 12, 8, 6]

// Brute Force 
// - use a nested for loop (i, j pointers) so that we can multiply nums[j] with "product" variable at 1 
// - initialize answer [] 
// - iterate over input array once (i at 0 until end) 
// - initialize product at 1 -> we keep multiplying this by nums[j] 
// - iterate over input array again (j at 0 until end)
// - check: if i !== j we can perform math operations 
// - product *= nums[j] 
// - once j loops is done we push current product to answer []
// - return answer []

// Time: O(n^2) where we perform a nested for loop
// Space: O(n) we use answer to store elements 

function productExceptSelf(nums) {
  // edge case: if nums array is empty nothing to compute
  if(nums.length === 0) return [];
  const answer = [];
  for(let i = 0; i < nums.length; i++) {
    // initialize product here 
    let product = 1;
    for(let j = 0; j < nums.length; j++) {
      // check: if i !== j we can perform operations 
      if(i !== j) {
        product *= nums[j]; 
      }
    };
    answer.push(product); 
  };
  return answer; 
}

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

// Time: O(n) where we iterate 3 times input array linearly 
// Space: O(n) we use an [] array

function productExceptSelf(nums) {
  if(nums.length === 0) return []; 
  const answer = new Array(nums.length).fill(1); 
  // initialize leftNum, rightNum 
  let leftNum = new Array(nums.length).fill(1); 
  let rightNum = new Array(nums.length).fill(1); 

  // work on leftNum -> O(n) 
  let leftProduct = 1;
  for(let i = 0; i < nums.length; i++) {
    leftNum[i] = leftProduct; 
    leftProduct *= nums[i]; // [1, 1, 2, 6] 
  };

  // work on rightNum -> O(n) 
  let rightProduct = 1;
  for(let i = nums.length - 1; i >= 0; i--) {
    rightNum[i] = rightProduct; 
    rightProduct *= nums[i]; // [24, 12, 4, 1]
  }; 

  // iterate over entire array and build answer array -> O(n) 
  for(let i = 0; i < nums.length; i++) {
    answer[i] = rightNum[i] * leftNum[i]; 
  }; 

  return answer; 
}