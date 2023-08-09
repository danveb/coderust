// Level Order Traversal Binary Tree
// given "root" of a binary tree, perform a "level order" traversal 

// BFS -> use a QUEUE () 

// Time: O(n) 
// Space: O(n) 

// recursive 
function levelOrderTraversal(root) {
  const output = []; 

  function levelTraversal(root, key) {
    // edge case: if root is null we know we're done visiting nodes 
    if(root === null) return null; 
    // check: if output.length <= level 
    if(output.length <= level) {
      output.push([]); 
    };
    output[level].push(root.data); 

    // recursively LEFT, RIGHT by one level deep 
    levelTraversal(root.left, level + 1) 
    levelTraversal(root.right, level + 1); 
  };

  // call levelTraversal "inner function" 
  levelTraversal(root, 0); 

  return output; 
}