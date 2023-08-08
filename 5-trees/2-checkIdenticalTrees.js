// Check Two Idential Trees
// given roots of two binary trees, determine if they're identical or not 

// How to check if binary tree's are identical? 
// - edge case: if there are NO binary trees? 
// - start with the root; their values should be equal 
// - check left subtree recursively with right subtree

// Time: O(n) 
// Space: O(h) because of our recursive approach using space on the call stack, which grows the height (H) of binary tree. 
// IF: BALANCED TREE -> O(log n) and O(n) for regular tree

function areIdentical(root1, root2) {
  // edge case: if no root1 NOR root2 we return root1 === root2 
  if(root1 === null || root2 === null) return root1 === root2; 
  // check: if value of root1 !== root2 we return false 
  if(root1.data !== root2.data) return false; 
  // recursively return LEFT / RIGHT binary trees
  return areIdentical(root1.left, root2.left) && areIdentical(root1.right, root2.right); 
}; 