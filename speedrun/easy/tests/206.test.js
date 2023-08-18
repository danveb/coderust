const Node = require("../linkedlist"); 
const reverseList = require("../206-reverseLinkedList"); 

// TEST #1
const list1 = new Node(1); 
list1.next = new Node(2); 
list1.next.next = new Node(4); 

const list2 = {
  val: 4, next: {
    val: 2, next: {
      val: 1, next: null }}}

// TEST #2 
function size(linkedList) {
  let count = 0; 
  while(linkedList !== null) {
    count += 1; 
    linkedList = linkedList.next; 
  }; 
  return count; 
} 

describe("test reverseList #206", () => {
  test("creates a new sorted linked list", () => {
    expect(reverseList(list1)).toEqual(list2); 
  }); 

  test("size of reversed linked list", () => {
    expect(size(list2)).toEqual(3); 
  });
}); 