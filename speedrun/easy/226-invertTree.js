// Invert Tree
// given "root" of binary tree, invert it and return its root
// inverting means swapping left and right children for each node

/* 
    100                       100
    / \                       / \
  50   200            =>    200  50
 / \      \                /     /  \
25  75     350          350     75  25

*/

// Optimal
// for a binary tree to be inverted we have to swap left-right nodes 
// return the root by the end 
// implemented with recursion on root.left and root.right 

// Pseudocode
// - base case: if root is null we return null 
// - initialize temp as root.left 
// - set root.left to root.right 
// - root.right to temp 
// - recursively... invertTree(root.left)
// - recursively... invertTree(root.right)
// - return root

// Time: O(n), where n is # of nodes we visit in the tree
// Space: O(n) since we create a call-stack and we use recursion 

function mirrorBinaryTree(root) {
  // edge case: if root is null we return null 
  if(root === null) return null; 
  // swap children with old school swap 
  let temp = root.left; 
  root.left = root.right
  root.right = temp; 

  mirrorBinaryTree(root.left); 
  mirrorBinaryTree(root.right); 

  return root; 
}