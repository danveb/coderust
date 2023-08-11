// Merge Two Sorted Lists 
// given heads of list1 and list2 merge them and return new head of linked list

list1 = [1, 2, 4]
list2 = [1, 3, 4]
output = [1, 1, 2, 3, 4, 4] 

// Brute Force/Optimal 
// - edge case: if list1 is NULL we can return list2
// - edge case: if list2 is NULL we can return list1 
// - initialize dummyHead as new Node(-1) 
// - set head to dummyHead 
// - keep looping while list1 !== null && list2 !== null 
// - check which list should go first based on value 
// -- if list1.val <= list2.val 
// -- set head.next to point to list1 
// -- set list1 to list1.next 
// -- else set head.next to point to list2
// -- set list2 to list2.next 
// - check: if list1 !== null set head.next = list1
// - check: if list2 !== null set head.next = list2
// - return dummyHead.next as our initial point to start 

// Time: O(n + m) where n + m represents 2 linked lists
// Space: O(1) 

function mergeTwoLists(list1, list2) {
  // edge case: if either list is null we can return either list
  if(list1 === null) return list2
  if(list2 === null) return list1 
  let dummyHead = new Node(-1); 
  let head = dummyHead; 
  // keep looping while either lists are NOT null 
  while(list1 !== null && list2 !== null) {
    // check which list goes first based on <= value 
    if(list1.val <= list2.val) {
      head.next = list1; 
      list1 = list1.next 
    } else {
      head.next = list2; 
      list2 = list2.next; 
    };
  };
  // if one of the lists is null we'll go with the other list anyway
  if(list1 !== null) head.next = list1
  if(list2 !== null) head.next = list2
  return dummyHead.next; 
}
