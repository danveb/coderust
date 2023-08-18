const mergeTwoLists = require("../21-mergeTwoSortedLists"); 
const Node = require("../linkedlist"); 

// TEST #1
const list1 = new Node(1); 
list1.next = new Node(2); 
list1.next.next = new Node(4); 

const list2 = new Node(1); 
list2.next = new Node(3); 
list2.next.next = new Node(5); 

const list3 = {
  val: 1, next: {
    val: 1, next: {
      val: 2, next: {
        val: 3, next: {
          val: 4, next: {
            val: 5, next: null }}}}}}

// TEST #2 
const list4 = new Node(1); 
list4.next = new Node(2); 
list4.next.next = new Node(4); 

const list5 = new Node(3); 
list5.next = new Node(6); 

const list6 = {
  val: 1, next: {
    val: 2, next: {
      val: 3, next: {
        val: 4, next: {
          val: 6, next: null }}}}}

// TEST #3 
function size(linkedList) {
  let count = 0;
  while(linkedList !== null) {
    count += 1
    linkedList = linkedList.next; 
  }; 
  return count; 
};

describe("test mergeTwoLists #21", () => {
  test("creates a new sorted linked list", () => {
    expect(mergeTwoLists(list1, list2)).toEqual(list3); 
  }); 

  test("where linked lists have different lengths", () => {
    expect(mergeTwoLists(list4, list5)).toEqual(list6); 
  }); 

  test("size of merged linked lists", () => {
    expect(mergeTwoLists(list4, list5)).toEqual(list6); 
    expect(size(list6)).toEqual(5); 
  });
}); 