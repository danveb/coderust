// Longest Valid Parentheses 
// given a string that contains "(" and ")", find the length of longest valid parentheses substring. 

// s = "(()"
// output = 2 

function longestValidParentheses(s) {
  let left = 0
  let right = 0
  let maxLength = 0

  // iterate over input string once 
  for(let i = 0; i < s.length; i++) {
    // check: if current element is "(" 
    if(s[i] === "(") {
      // increase number of "LEFT" seen
      left += 1
    } else {
      // increase number of "RIGHT" seen 
      right += 1
    }

    // check: if left and right are equal it's a valid parentheses 
    if(left === right) {
      maxLength = Math.max(maxLength, 2 * right); 
    // check: if there are more "right" than "left" we reset back to 0
    } else if(right >= left) {
      left = 0
      right = 0
    }
  };
  // update left/right back to 0
  left = 0
  right = 0

  // reverse iteration  
  for(let j = s.length - 1; j >= 0; j--) {
    // check: if current element is "("
    if(s[j] === "(") {
      left += 1
    } else {
      right += 1
    }; 

    // check: if left and right are equal it's a valid parentheses 
    if(left === right) {
      maxLength = Math.max(maxLength, 2 * left)
    } else if(left >= right) {
      left = 0
      right = 0
    };
  };
  return maxLength; 
}

// console.log(longestValidParentheses("(()"))