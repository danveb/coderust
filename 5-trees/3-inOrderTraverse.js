// In-order traversal Binary Tree
// write a method for ITERATIVE IN-ORDER TRAVERSAL OF BINARY TREE

/*

root = [100, 50, 200, 25, 75, 35] 
output = [25, 35, 50, 75, 100, 200] 

                  100     
                /    \   
               50     200
             /   \  
            25    75 
              \
              35

*/ 

// Recursive approach (BRUTE FORCE) 
// 1. inner function to perform "inorder" traversal 
// - base case: If node is at null point (leaf nodes) we can return null since nothing more to visit 
// - recursively traverse LEFT -> ROOT -> RIGHT 
// 2. main function 
// - edge case: if no binary tree, return [] 
// - initialize output [] 
// - call "inorder" inner function with root
// - return output [] 

// Time: O(n) where n is length of binary tree
// Space: O(n) we recursively traverse the tree

function inorderTraversal(root) {
  // edge case: if root is null return [] 
  if(root === null) return []; 
  // initialize empty output [] 
  const output = []; 

  // inorder traversal function (LEFT -> ROOT -> RIGHT) 
  function inorder(node) {
    // base case: if root is null we can always return null 
    if(node === null) return null; 
    // recursively traverse LEFT -> ROOT -> RIGHT 
    inorder(node.left); 
    // console.log(node.data); 
    // push node's value to output to have this marked as seen 
    output.push(node.data); 
    inorder(node.right); 
  }; 

  // call inorder inner function 
  inorder(root); 

  // return output [] 
  return output; 
}

// ====================================================================================

// INORDER -> DFS TRAVERSAL WITH A STACK
// PUSH POP FROM STACK 

// - in-order traversal: LEFT -> ROOT -> RIGHT
// - farthest node in left is null, take root 25, take right 35
// - root 50, right 75
// - root 100, right 200
// - [25, 35, 50, 75, 100, 200] 
 
// Time: O(n) where n is # of nodes we visit 
// Space: O(h) where h is the height of the tree
// At worst, O(n) for an unbalanced tree

function inorderTraversal(root) {
  // edge case: if no binary tree return []
  // initialize a stack [] 
  // initialize output [] 
  // initialize current pointer to root 
  // keep looping while stack is NOT empty || current !== null 
  // keep looping while current !== null 
  // -- push current root to stack 
  // -- traverse to left 
  // - pop current from the stack 
  // - push current value to output [] 
  // - GO RIGHT 
  // - return output

  if(root === null) return [];
  const stack = [];
  const output = []; 

  let current = root; 

  while(stack.length || current !== null) {
    // keep looping for current 
    while(current !== null) {
      // push current (root) to stack 
      stack.push(current); 
      // move current to LEFT FIRST
      current = current.left; 
    }; 

    // pop current from the stack 
    stack.pop(current); 
    // push current node's data/value to [] 
    output.push(current.data); 
    // move current to RIGHT SECOND
    current = current.right; 
  };
  return output; 
}