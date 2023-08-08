// Merge Two Sorted Linked Lists 
// given 2 sorted linked lists, merge them and return head of sorted linked list

// head1 = [4, 8, 15, 19, 22]
// head2 = [7, 9, 10, 16] 
// output = [4, 7, 8, 9, 10, 15, 16, 19, 22]

// Brute Force 
// - which head should I start with? the one with lesser value 
// - keep looping while head1 !== null && head2 !== null 
// - keep moving head1 to the next pointer 
// - check: if head1 is NOT null? we want a pointer to point to head1
// - check: if head2 is NOT null? we want a pointer to point to head2 

// Time: O(n + m) where n + m represents 2 linked lists
// Space: O(1) 

function mergeSorted(head1, head2) {
  // check: if !head1 return head2 
  // check: if !head2 return head1 
  if(!head1) return head2; 
  if(!head2) return head1; 

  // initialize dummyHead as a new ListNode at -1 
  let dummyHead = new LinkedListNode(-1); 
  // set head to dummyHead 
  let head = dummyHead; 
  // keep looping while head1 !== null && head2 !== null 
  while(head1 !== null && head2 !== null) {
    // - check: if head1.val <= head2.val 
    if(head1.data <= head2.data) {
      // - set head.next to head1 and move along head1 to next 
      head.next = head1 
      head1 = head1.next; 
    // - else set head.next to head2  
    } else {
      // - set head.next to head2 and move along head2 to next 
      head.next = head2; 
      head2 = head2.next; 
    }  
    // keep moving head to its next pointer
    head = head.next; 
  }; 

  // check: if head1 !== null keep moving head to head1
  // check: if head2 !== null keep moving head to head2
  if(head1 !== null) head.next = head1; 
  if(head2 !== null) head.next = head2; 

  // when head1 && head2 are null we'll reach the end 
  // - return dummyHead.next as our new head 
  return dummyHead.next; 
}