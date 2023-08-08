// Traversal Methods of Binary Tree

class Node {
  constructor(val) {
    this.val = val; 
    this.left = null; 
    this.right = null; 
  }
}

let one = new Node(1); 
let two = new Node(2); 
let three = new Node(3); 
let four = new Node(4); 
let five = new Node(5); 

one.left = two
one.right = three
two.left = four
two.right = five 

/* 
        1    
      /    \   
    2       3
  /   \  
 4     5

*/ 

// DFS
// 1. inorder 
// - LEFT -> ROOT -> RIGHT 

function inorder(root) {
  // base case: if root is null we know we're at leaf node
  if(root === null) return null; 
  // recursively traverse LEFT -> ROOT -> RIGHT 
  inorder(root.left); 
  console.log(root.val); // 4, 2, 5, 1, 3
  inorder(root.right); 
}

function inOrderTraversal(root) {
  const output = []; 

  function inorder(root) {
    // base case: if root is null we know we're at leaf node 
    if(root === null) return null; 
    // recursively traverse LEFT -> ROOT -> RIGHT 
    inorder(root.left); 
    output.push(root.val); 
    inorder(root.right); 
  }; 

  // call inorder "inner function" with root 
  inorder(root); 

  return output; // [4, 2, 5, 1, 3]
}

// 2. preorder
// - ROOT -> LEFT -> RIGHT 

function preorder(root) {
  // base case: if root is null we know we're at leaf node 
  if(root === null) return null; 
  // recursively traverse ROOT -> LEFT -> RIGHT 
  console.log(root.val); // 1, 2, 4, 5, 3
  preorder(root.left); 
  preorder(root.right); 
}

function postOrderTraversal(root) {
  const output = []; 

  function postorder(root) {
    if(root === null) return null; 
    // recursively LEFT -> RIGHT -> ROOT
    postorder(root.left); 
    postorder(root.right); 
    output.push(root.val); 
  }; 

  // call postorder "inner function" with root 
  postorder(root); 

  return output; // [4, 5, 2, 3, 1] 
}


// 3. postorder
// - LEFT -> RIGHT -> ROOT 

function postorder(root) {
  // base case: if root is null we know we're at leaf node 
  if(root === null) return null; 
  // recursively traverse LEFT -> RIGHT -> ROOT 
  postorder(root.left); 
  postorder(root.right); 
  console.log(root.val); // 4, 5, 2, 3, 1
}

function preOrderTraversal(root) {
  const output = []; 

  function preorder(root) {
    // base case: if root is null we know we're at leaf node 
    if(root === null) return null; 
    // recursively ROOT -> LEFT -> RIGHT  
    output.push(root.val); 
    preorder(root.left); 
    preorder(root.right); 
  }; 

  // call preorder "inner function" with root 
  preorder(root); 

  return output; // [1, 2, 4, 5, 3] 
}

// ========================================================================

// BFS 
// 1. level order 
// - ACHIEVED WITH A QUEUE DATA STRUCTURE 

function levelorderTraversal(root) {
  // initialize output [] 
  const output = []; 

  function traverseLevel(root, level) {
    // base case: if root is null we know there are no more nodes at current level 
    if(root === null) return null; 
    // check: if output.length <= level 
    if(output.length <= level) {
      // push a new level []
      output.push([])
    };

    output[level].push(root.val); 

    // recursively LEFT, RIGHT 
    traverseLevel(root.left, level + 1) 
    traverseLevel(root.right, level + 1); 
  }

  // call traverseLevel "inner function" with root and start from level 0 
  traverseLevel(root, 0); 

  return output; // [[1], [2, 3], [4, 5]]
}