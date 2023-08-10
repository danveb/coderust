// Valid Parentheses 
// given a string "s" containing "(", ")", "{", "}", "[", "]" 
// determine if input string is valid 
// - open brackets must be closed by same type of brackets

// s = "()[]{}" 
// output = true 

// Approach
// - initialize a object that contains pair of parenthesis, brackets, etc. 
// - initialize ouput as empty array 
// - iterate over the string (for OF loop) 
// - if true ? we push obj[character] to output 
// - else, check if output.pop() !== char we return false 

// Time: O(n) where n is length of input string 
// Space: O(n) we use a stack data structure [] 

function isValid(str) {
  // check: if length of str < 2 we can return false since it's open/close without the other pair 
  if(str.length < 2) return false; 
  const obj = {
    "(": ")", 
    "{": "}", 
    "[": "]"
  }; 

  // initialize output array (STACK) WITH PUSH/POP methods 
  const stack = []; 
  for(let i = 0; i < str.length; i++) {
    // check: if obj[str[i]] valid 
    if(obj[str[i]]) {
      stack.push(obj[str[i]]); 
    } else {
      // check: if popped out element is NOT in the object str[i] it's NOT valid 
      if(stack.pop() !== str[i]) return false; 
    }
  };
  if(!stack.length) return true; 
  return false; 
}