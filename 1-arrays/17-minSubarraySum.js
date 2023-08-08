// Minimum Subarray Sum
// given an array of integers and a target, return length of SHORTED contiguous subarray whose sum is >= target
// return 0 if no subarray exists

// nums = [2, 3, 1, 2, 4, 3]
// target = 7
// output = 2; we sum 4 + 3 = 7 to be length 2

/*

idx   0   1   2   3   4   5
num   2   3   1   2   4   3   => sum = 0
      i/j                     => sum += nums[j] = 2
      i   j                   => sum += nums[j] = 5 
              j               => sum += nums[j] = 6 
                  j           => sum += nums[j] = 8; >= target; result = MIN(result, 3-0+1) = 2
          
          i/j                 => sum += nums[j] = 3
              j               => sum += nums[j] = 4
                  j           => sum += nums[j] = 6
                      j       => sum += nums[j] = 10; >= target; result = MIN(result, 4-1+1) = 4

              i/j             => sum += nums[j] = 1
                  j           => sum += nums[j] = 2
                      j       => sum += nums[j] = 6
                          j   => sum += nums[j] = 9; >= target; result = MIN(result, 5-2+1) = 4

                  i/j         => sum += nums[j] = 2
                      j       => sum += nums[j] = 6
                          j   => sum += nums[j] = 9; >= target; result = MIN(result, 5-3+1) = 3

                      i/j     => sum += nums[j] = 4
                      i   j   => sum += nums[j] = 7; >= target; result = MIN(result, 5-4+1) = 2

*/ 

// Brute Force 
// - use a nested for loop to calculate for sum in the subarray 
// - initialize result as Infinity -> anything lower than result is the final result 
// - iterate over input array "nums" once 
// - initialize SUM at 0 
// - iterate over input array AGAIN 
// - at each iteration we'll increase sum += nums[j] 
// - CHECK: if sum >= target we want to calculate result 
// -- set result to MIN(result, j - i + 1) 
// -- break off the loop 
// - return result

// Time: O(n^2) where we iterate twice over input array
// Space: O(1) 

function minSubArrayLen(target, nums) {
  let result = Infinity; 
  for(let i = 0; i < nums.length; i++) {
    let sum = 0;
    for(let j = i; j < nums.length; j++) {
      sum += nums[j]; 

      // check: if sum >= target 
      if(sum >= target) {
        // set result to MIN(result, INDEX J - I + 1) that calculates LENGTH FROM 1th index
        result = Math.min(result, j - i + 1); 
        break; 
      }
    }
  }
  return result !== Infinity ? result : 0; 
}

/*

idx   0   1   2   3   4   5
num   2   3   1   2   4   3   => sum = 0
      i   j                   => sum += nums[j] = 3 
              j               => sum += nums[j] = 4 
                  j           => sum += nums[j] = 6
                      j       => sum += nums[j] = 10; this is >= target 

*/ 

// Optimal
// - iterate with 2 pointers from left to right 
// - at each iteration we want to sum += nums[j]
// - initialize result at 0 
// - initialize sum at 0

// Time: O(n) where n is length of input array
// Space: O(1) 

// function minSubArrayLen(target, nums) {
//   // initialize result at Inifinity 
//   let result = Infinity; 

//   // initialize 2 pointers: sum, left at 0 
//   let sum = 0;
//   let left = 0;
//   for(let i = 0; i < nums.length; i++) {
//     sum += nums[i]; 
//     // keep looping while sum >= target 
//     while(sum >= target) {
//       let subarraySize = (i + 1) - left; 
//       result = Math.min(result, subarraySize); 
//       sum -= nums[left]; 
//       left += 1; 
//     }
//   }

//   // check: if result !== Infinity we can return result; else 0 when all array values are 1... 
//   return result !== Infinity ? result : 0; 
// }