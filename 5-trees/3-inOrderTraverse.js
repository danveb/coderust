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

// INORDER -> DFS TRAVERSAL WITH A STACK
// PUSH POP FROM STACK 

// - in-order traversal: LEFT -> ROOT -> RIGHT
// - farthest node in left is null, take root 25, take right 35
// - root 50, right 75
// - root 100, right 200
// - [25, 35, 50, 75, 100, 200] 
 
// Time: O(n) where n is # of nodes we visit 
// Space: O(n) we use a stack to check visited nodes

function iterativeInorder(root) {
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
      stack.push(current); 
      current = current.left; 
    }; 

    // pop current from the stack 
    stack.pop(current); 
    output.push(current.data); 
    current = current.right; 
  };
  return output; 
}

// OR RECURSIVE... 

function recursiveInorder(root) {
  const response = []; 
  inorder(root); 

  // basic formula for inorder recursive
  function inorder(root) {
    // base case: if root is null we return null 
    if(root === null) return null; 
    // recursively start with LEFT -> ROOT -> RIGHT 
    inorder(root.left); 
    // console.log(root.val); 
    response.push(root.data); 
    inorder(root.right); 
  };
  return response; 
}