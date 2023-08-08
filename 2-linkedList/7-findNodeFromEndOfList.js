// Find NTH node from end of Linked List
// given head of a singly linked list, return the nth node from the last node. 
// return null if "N" is > size of list 

// head = [1, 1, 2, 3, 4, 5] 
// n = 3 
// output = 3

/*

head -> 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
        h/t   
             t    
                  t 
                       t                    => tail !== null 

             h              t
                  h              t
                        h              t    => tail === null 
                       
*/ 

// Brute Force
// - use 2 pointer approach to go linearly from beginning of array until end 
// - initialize tail at head; by default this will be "N" nodes apart from head 
// - loop tail while !== null && n > 0 
// -- move tail to next pointer 
// -- decrease 1 to n by each iteration 
// - check: if n !== 0 we return null 
// - keep looping while tail !== null
// - keep moving tail to next pointer
// - keep moving head to next pointer 
// - return head.data

// Time: O(n) where n is length of input array
// Space: O(1) 

function findNthFromLast(head, n) {
  // edge case: if no head OR n is negative
  if (head === null || n < 1) return null; 

  let current = head; 
  let tail = head; 
  while(tail !== null && n > 0) {
    tail = tail.next; 
    n -= 1; 
  }; 

  // check: if n !== 0 return null
  if(n !== 0) return null; 

  // keep looping while tail !== null 
  while(tail !== null) {
    tail = tail.next; 
    current = current.next; 
  }; 
  return current.data; 
}