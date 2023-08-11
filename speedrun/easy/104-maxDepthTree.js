// Max Depth of Binary Tree
// given root of binary tree is the number of nodes along longest path from root node down to leaf node 

// root = [3, 9, 20, null, null, 15, 7] 
// output = 3 

// Brute Force 
// - perform BFS to go down by level 
// - if root is null it's level 0 
// - recursively check for maxDepth(root.left) and maxDepth(root.right) 
// - return MAX between left/right + 1 

// Time: O(n) 
// Space: O(n) worst case; O(log n) when it's a balanced binary tree

function maxDepth(root) {
  // edge case: if root is null we can return a level of 0
  if(root === null) return 0; 
  // initialize left as depth of root.left
  const left = maxDepth(root.left); 
  // initialize right as depth of root.right
  const right = maxDepth(root.right); 
  // return the MAX between left/right + 1 since we start with level 1
  return Math.max(left, right) + 1; 
}

// // BAD Optimal
// // - with a QUEUE data structure we'll traverse level by level on binary tree
// // - initialize a queue with root inside 
// // - initialize level at 0 
// // - keep looping while queue has elements 
// // - iterate over whole queue 
// // - initialize currentNode that we visit as queue.shift() 
// // - check: if currentNode has LEFT we'll push to queue 
// // - check: if currentNode has RIGHT we'll push to queue 
// // - increase level by 1 as we traverse lower 
// // - return level 

// // Time: O(n) 
// // Space: O(n) 

// function maxDepth(root) {
//   // edge case: if root is null we can return level 0 
//   if(root === null) return 0; 
//   let queue = [root]; 
//   let level = 0; 
//   while(queue.length > 0) {
//     for(let i = 0; i < queue.length; i++) {
//       let currentNode = queue.shift(); 
//       // check if LEFT / RIGHT 
//       if(currentNode.left) {
//         queue.push(currentNode.left)
//       }
//       if(currentNode.right) {
//         queue.push(currentNode.right); 
//       };
//     };
//     // increase a level down 
//     level += 1; 
//   };
//   // return level 
//   return level;
// }