// Reverse a Linked List
// given a singly linked list reverse it and return the head

// list = [7, 14, 21, 28] 
// output = [28, 21, 14, 7] 

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

// Optimal 
// - initialize a prev at null (this will be tail)
// - initialize current at the head 
// - keep looping while current !== null 
// - make old school swap 
// -- let temp = current.next 
// -- current.next = prev
// -- prev = current 
// -- current.next = temp 
// - return PREV

// Time: O(n) where n is length of linked list
// Space: O(1) we don't incur extra memory regardless of size of linked list

function reverse(head) {
  let prev = null; 
  let current = head;
  while(current !== null) {
    let temp = current.next 
    current.next = prev
    prev = current 
    current = temp; 
  }
  return prev; 
}