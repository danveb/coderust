// Implementation of Node/Linked List from scratch

class ListNode {
  constructor(data) {
    this.data = data; 
    this.next = null 
  };
}

class LinkedList {
  constructor() {
    this.head = null 
  }

  // Linked List methods
  // 1. insertAtHead 
  insertAtHead(data) {
    // initialize newNode from ListNode 
    let newNode = new ListNode(data); 
    // check: if head is null we'll set newNode to be the head 
    if(this.head === null) {
      this.head = newNode; 
    } else {
      newNode.next = this.head; 
      this.head = newNode; 
    }
  }

  // 2. insertAtTail
  insertAtTail(data) {
    // initialize newNode from ListNode 
    let newNode = new ListNode(data); 
    // initialize current as the head 
    let current = this.head 
    // keep looping while current has a NEXT POINTER
    while(current.next) {
      current = current.next; 
    }; 
    // set current.next to be newNode
    current.next = newNode; 
  }; 

  // 3. print
  print() {
    // initialize current as the head 
    let current = this.head; 
    // keep looping while current !== null 
    while(current !== null) {
      // console.log(current.data) 
      // keep moving through current.next
      console.log(current.data); 
      current = current.next; 
    };
  };
}

// instantiate 
let two = new ListNode(2); 
let three = new ListNode(3); 
let four = new ListNode(4); 

let myLL = new LinkedList(); 
myLL.insertAtHead(three)
myLL.insertAtHead(two)
myLL.insertAtTail(four)

myLL.print()