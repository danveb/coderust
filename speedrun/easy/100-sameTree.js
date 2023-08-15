// Given roots of binary trees write a function to check if they're same or not 
// binary trees are considered same if structurally identical, and nodes have same value 

// Time: O(n) 
// Space: O(n) 

function isSameTree(p, q) {
  // base case; check if any of these trees are null
  // we'll return equality comparison between p/q
  if(p === null || q === null) return p === q; 
  // check values of p / q; if NOT equal there's no point of checking anything else. return false
  if(p.val !== q.val) {
    return false; 
  }
  // check left/right subtrees of p & q
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); 
}; 