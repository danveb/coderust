// Two Sum 2
// given a 1-indexed array of integers "numbers" sorted in ascending order, find two numbers that add up a specific "target"

numbers = [2, 7, 11, 15]
target = 9
output = [1, 2] 

// Brute Force
// - use a nested for loop to iterate over input 1-indexed array 
// - check: if nums[i] + nums[j] === target 
// - we can return [i + 1, j + 1]

// Time: O(n^2) where we perform a nested for loop 
// Space: O(n) 

function twoSum(numbers, target) {
  if(numbers.length === 0) return [];
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      // check for the sum 
      let sum = numbers[i] + numbers[j] 
      if(sum === target) {
        return [i + 1, j + 1]
      }
    }
  }
}

// Optimal Approach
// - since array is sorted we'll use a 2 pointer approach LEFT/RIGHT 
// - check: if numbers[left] + numbers[right] > target? right--
// - check: if numbers[left] + numbers[right] < target? left++
// - check: if numbers[left] + numbers[right] === target? we found target 

// Time: O(n) where n is length of input array
// Space: O(n) 

function twoSum(numbers, target) {
  if(numbers.length === 0) return []; 
  let left = 0;
  let right = numbers.length - 1;
  while(left < right) {
    let sum = numbers[left] + numbers[right]
    if(sum > target) {
      right-- 
    } else if(sum < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
}