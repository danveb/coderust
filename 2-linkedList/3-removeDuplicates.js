// Remove Duplicates from Linked List 
// given "head" of a linked list remove duplicate nodes

// head = [4, 7, 4, 9, 7, 11, 4] 
// output = [4, 7, 9, 11] 

/*

idx   0       1       2       3       4       5       6
nun   4       7       4       9       7       11      4     => hashset: new Set()
      C                                                     => not seen; add to Set { 4 }
              C                                             => not seen; add to Set { 4, 7 }
                      C                                     => seen; delete by current.next = current.next.next 
                              C                             => not seen; add to Set { 4, 7, 9 }
                                      C                     => seen; delete by current.next = current.next.next 
                                              C             => not seen; add to Set { 4, 7, 9, 11 }
                                                      C     => not seen; delete by current.next = current.next.next 

*/ 

function removeDuplicates(head) {
  // if head is null we return null 
  // initialize hashset and add head's value 
  const hashset = new Set(); 
  hashset.add(head.data); 
  // initialize current as the head 
  let current = head; 
  // keep looping while current has a NEXT POINTER
  while(current.next) {
    // check: is current element's data in the hashset? 
    if(hashset.has(current.next.data)) {
      current.next = current.next.next
    // else: we haven't seen this so add to hashset
    } else {
      hashset.add(current.next.data); 
      current = current.next; 
    };
  };
  return head; 
}

// OR LINKED LIST IS SORTED? 

function removeDuplicates(head) {
  let current = head; 
  while(current && current.next) {
    // check: if current.data === current.next.data? 
    if(current.data === current.next.data) {
      // set current.next to current.next.next
      current.next = current.next.next; 
    }
    // keep traversing 
    current = current.next; 
  };
  return head; 
}