// Valid Binary Tree
// given root of binary tree, determine whether it's a valid binary tree

// When is it a valid bst? 
// - there's a root head 
// - LEFT subtree means values < root 
// - RIGHT subtree means values > root 

function isBst(root) {
  // edge case: if no root we can return true 
  if(root === null) return true; 
  
  function dfs(root, min, max) {
    // base case: if root is null we know we're at leaf node, return true 
    if(root === null) return true; 
    // check values of LEFT (min) and RIGHT (max) 
    if(root.val >= max || root.val <= min) {
      return false; 
    }; 
    // return dfs recursive -> LEFT / RIGHT 
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max); 
  }; 

  return dfs(root, -Infinity, Infinity); 
}