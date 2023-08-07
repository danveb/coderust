// Delete All Occurrences of Given Key in Linked List
// given the "head" of a linked list, delete all nodes whose values match the given key

// head = [20, 14, 36, 11, 72, 41] 
// key = 72
// output = [20, 14, 36, 11, 41] 

// CONSIDER: if KEY IS AT BEGINNING OF HEAD? 
// WE NEED A currentNode BEFORE BEGINNING 

// Brute Force
// - initialize currentNode as a new ListNode 
// - set currentNode.next to point to head 
// - set head to currentNode => SAVE A REFERENCE TO HEAD FOR LATER
// - keep looping while currentNode.next !== null 
// - check: if currentNode.next.data is equal to KEY 
// - set currentNode.next to currentNode.next.next 
// - else we keep moving currentNode to next
// - return head.next as we don't want -1... 

// Time: O(n) where n is length of linked list
// Space: O(1) 

class ListNode {
  constructor(data) {
    this.data = data; 
    this.next = null; 
  }
}

function deleteNode(head, key) {
  let currentNode = new ListNode(-1); 
  currentNode.next = head; 
  head = currentNode; 
  // keep looping while currentNode.next !== null 
  while(currentNode.next !== null) {
    // check: if currentNode.next's value === key 
    if(currentNode.next.data === key) {
      // set currentNode.next to next.next 
      currentNode.next = currentNode.next.next 
    } else {
      // keep moving currentNode to next 
      currentNode = currentNode.next 
    }
  };
  // return head.next! We do this because we shuffled head to be -1 at beginning. 
  return head.next; 
}