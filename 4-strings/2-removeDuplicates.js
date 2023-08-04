// Remove Duplicates 
// given a string, remove duplicate characters from a string 

// str = "abbabcddbabcdeedebc"
// output = "abcde" 

// Brute Force
// 1. build a hashset to store the values ONCE (NOT allowing duplicates) 
// - initialize hashset as new Set()
// - iterate over input string once 
// - "ADD" current element to hashset 
// - return this hashset 

// 2. build a cleanStr by iterating over the values in hashset 
// - initialize cleanStr "" 
// - FOR OF LOOP on hashset 
// - build cleanStr += current element 
// - return cleanStr 

// Time: O(n) where we iterate over input array 
// Space: O(n) we use a hashset

/*

idx   0   1   2   3   4   5   6   7
str   a   b   b   a   c   b   d   d   => hashset = new Set() 
      i                               => not on hashset; add { "a" }
          i                           => not on hashset; add { "a", "b" }
              i                       => already on hashset 
                  i                   => already on hashset 
                      i               => not on hashset; add { "a", "b", "c" }
                          i           => already on hashset
                              i       => not on hashset; add { "a", "b", "c", "d" }
                                  i   => already on hashset 

      0   1   2   3   => cleanStr = "" 
      a   b   c   d   
      i               => cleanStr += "a"
          i           => cleanStr += "b" 
              i       => cleanStr += "c"
                  i   => cleanStr += "d" 
                         cleanStr = "abcde" 
*/ 

function removeDuplicates(str) {
  // call buildHashset 
  let hashset = buildHashset(str); 
  // initialize cleanStr as empty "" 
  let cleanStr = "" 
  for(let character of hashset) {
    cleanStr += character
  };
  return cleanStr; 
}

function buildHashset(str) {
  const hashset = new Set(); 
  for(let i = 0; i < str.length; i++) {
    hashset.add(str[i])
  }
  return hashset; // Set { "a", "b", "c", "d" }
}