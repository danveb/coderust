// Intersection Point of Linked Lists
// given head of 2 linked lists, find out if they intersect and return point of intersection 
// NOTE: linked list will not have cycles in it

/* 

head1 = [29, 23, 82, 11, 12, 27]
head2 = [13, 4, 12, 27] 
output = intersection at "12" 

head1      -> 4 -> 1 -> 8 -> 4 -> 5
             p1    X    X    X    X
              Y    Y


head2 -> 5 -> 6 -> 1 -> 8 -> 4 -> 5
        p2    Y    Y    Y    Y    Y
         X    X    X

p1 reaches intersection node 1 after 7 steps 
p2 reaches intersection node 1 after 7 steps 

head1   -> 29 -> 23 -> 82 -> 11 -> 12 -> 27 
           p1    X     X     X     X     X  => p1 reaches null after 5 moves 
           Y     Y     Y     Y     Y        => p2 reaches INTERSECTION 12 after 5 moves

head2               -> 13  -> 4 -> 12 -> 27 
                       p2     Y    Y     Y  => p2 reaches null after 3 moves 
                       X      X    X        => p1 reaches INTERSECTION 12 after 3 moves 

                                            = TOTAL 8 moves using head1/head2; returns 12 (node value) 

*/ 

// Time: O(n + m) where we traverse two linked lists
// Space: O(1) 

function intersect(head1, head2) {
  if(head1 === null || head2 === null) return null; 
  // initialize pointer1/2 from each head 
  let pointer1 = head1 
  let pointer2 = head2
  // keep looping while head1 !== head2 
  while(head1 !== head2) {
    // move both pointers to next 
    pointer1 = pointer1.next; 
    pointer2 = pointer2.next; 

    // check: if pointer1 becomes null we want to point it to head2
    if(pointer1 === null) pointer1 = head2; 
    // check: if pointer2 becomes null we want to point it to head1
    if(pointer2 === null) pointer2 = head1; 
  };
  return pointer1; // they intersect 
}