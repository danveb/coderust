// Implement Binary Tree

class Node {
  constructor(data) {
    this.data = data; 
    this.left = null;
    this.right = null; 
  }
}

class BinaryTree {
  constructor() {
    this.root = null; 
  }

  // methods 
  // insert(data) 
  insert(data) {
    // initialize new Node 
    let newNode = new Node(data); 
    // check: if root of binary tree is null set the root to be newNode
    if(this.root === null) {
      this.root = newNode; 
    // else we'll call insertNode to appropriate position
    } else {
      this.insertNode(this.root, newNode); 
    }
  }

  // insertNode(root`, newNode)
  insertNode(root, newNode) {
    // check: if newNode's data < root's data we'll push to left 
    if(newNode.data < root.data) {
      // check: if there's NO node to the left 
      if(root.left === null) {
        root.left = newNode
      } else {
        // continue recursing to insertNode to LEFT 
        this.insertNode(root.left, newNode); 
      }
    // check: if newNode's data > root's data we'll push to right 
    } else {
      // check: if there's NO node to the right 
      if(root.right === null) {
        root.right = newNode; 
      } else {
        // continue recursing to insertNode to RIGHT 
        this.insertNode(root.right, newNode); 
      }
    }
  }

  // // remove(data)
  // remove(data) {
  //   this.root = this.removeNode(this.root, data); 
  // }

  // // removeNode(root, key) 
  // removeNode(root, key) {
  //   // check: if root node is null return null
  //   if(root === null) return null; 
  //   if(key < root.data) {
  //     root.left = this.removeNode(root.left, key);
  //     return root; 
  //   } else if(key > root.data) {
  //     root.right = this.removeNode(root.right, key); 
  //     return root; 
  //   } else {
  //     if(root.left === null && root.right === null) {
  //       root = null; 
  //       return root; 
  //     } 
  //     if(root.left === null) {
  //       root = root.right;
  //       return root; 
  //     }
  //     if(root.right === null) {
  //       root = root.left; 
  //       return root; 
  //     }
  //   }
  // }
}