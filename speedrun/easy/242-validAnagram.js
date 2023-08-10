// Anagrams 
// given two strings "s" and "t" return true if "t" is anagram of "s"
// return false otherwise 
// Note: an anagram is a word formed by rearranging letters exactly once

// Brute Force 
// - manually sort the array and compare the arrays 
// Time: O(n log n) 
// Space: O(1) 

// Optimal  
// - edge case: initially length should be equal between 2 strings 

// 1. helper function for frequencyCounter to count "characters": "occurrences" 
// 2. work on main function 
// - check for length of original strings 
// - initialize frequencyCounter for str1, str2 
// - iterate over the values of frequencyCounter on str2 
// - check: if freqStr1[val] !== freqStr2[val] we return false 
// - return true 

function isAnagram(s, t) {
  // initial check: if length of strings NOT equal return false 
  if(s.length !== t.length) return false; 
  // build frequencyCounter for s, t
  let freqS = frequencyCounter(s); 
  let freqT = frequencyCounter(t); 
  // iterate over freqT 
  for(let val of freqT) {
    if(freqS[val] !== freqT[val]) return false; 
  }
  return true; 
}

function frequencyCounter(str) {
  const hashmap = new Map(); 
  for(let i = 0; i < str.length; i++) {
    // check: if hashmap does NOT have current character
    if(!hashmap.has(str[i])) {
      // we want to add it along with number of occurrences (1) 
      hashmap.set(str[i], 1); 
    } else {
      // check: if hashmap has current character
      // we want to increase its count by 1 
      hashmap.set(str[i], hashmap.get(str[i]) + 1); 
    }
  }
  return hashmap; 
}