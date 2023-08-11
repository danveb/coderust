// Sort Colors (Leetcode #75) 
// given an array of "N" colors, sort the array "in-place" so that numbers are adjacent to each other
// perform without sort function 

// nums = [2, 0, 2, 1, 1, 0]
// output = [0, 0, 1, 1, 2, 2]

// MOST BRUTE FORCE (WITHOUT in-place) 
// - initialize zeroArray []
// - initialize oneArray []
// - initialize twoArray [] 
// - iterate over input array once
// - check: if current element is 0? we push to zeroArray
// - check: if current element is 1? we push to oneArray
// - check: if current element is 2? we push to twoArray
// - we return [...zeroArray, ...oneArray, ...twoArray]

function sortColors(nums) {
  if(nums.length === 0) return []; 
  const zeroArray = [];
  const oneArray = [];
  const twoArray = []; 
  for(let i = 0; i < nums.length; i++) {
    // - check: if current element is 0? we push to zeroArray
    // - check: if current element is 1? we push to oneArray
    // - check: if current element is 2? we push to twoArray

    if(nums[i] === 0) {
      zeroArray.push(nums[i]); 
    } else if(nums[i] === 1) {
      oneArray.push(nums[i]); 
    } else {
      twoArray.push(nums[i]); 
    };
  };

  // build and return the final array with zero,one,two
  return [...zeroArray, ...oneArray, ...twoArray]
}

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]

// Can we do better? 
// AlgoMonster... 

// Time: O(n) where n is length of input array
// Space: O(1) 

function sortColors(nums) {
  if(nums.length === 0) return []; 
  let zero = -1;
  let one = -1; 
  let two = -1; 
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums[++two] = 2; // increment two
      nums[++one] = 1; // increment one
      nums[++zero] = 0; // increment zero and place "0" at zero-th position
    } else if(nums[i] === 1) {
      nums[++two] = 2; // increment two
      nums[++one] = 1; // increment one and place "1" at one-th position 
    } else {
      nums[++two] == 2; // increment two
    }
  }
  return nums; 
}