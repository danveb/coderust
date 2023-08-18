// Reverse Linked List
// given "head" of a linked list reverse it and return the head 

// head = [1, 2, 3, 4, 5]
// output = [5, 4, 3, 2, 1] 

/* 

        1 -> 2 -> 3 -> 4 -> 5 -> null 

null -> a -> b -> c -> d -> null 
null <- a -> b -> c -> d -> null 
null <- a <- b -> c -> d -> null 
null <- a <- b <- c -> d -> null 
null <- a <- b <- c <- d 

p       c    n
        p    c    n 
            p    c    n
                    p    c     n
                        p     c (NULL)                       

*/ 

// Time: O(n) where n is length of linked list 
// Space: O(1) we don't incur extra memory

function reverseList(head) {
  // edge case: if empty linked list we return null 
  if(head === null) return null; 
  // initialize prev pointer as null
  let prev = null; 
  // initialize current as head to iterate
  let current = head; 
  // keep looping while current !== null -> when current reaches null it's end of list 
  while(current !== null) {
    let temp = current.next; 
    current.next = prev; 
    prev = current; 
    current = temp; 
  }; 
  // return prev as the new head of linked list 
  return prev
}

module.exports = reverseList