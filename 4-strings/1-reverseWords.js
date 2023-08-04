// Reverse Words in a Sentence
// given a sentence (array of characters) reverse the order of its words

// sentence = "Hello world."
// output = "world Hello"

// Brute Force 
// - split the string into an array of characters wherever we find a SPACE " "
// - use reverse method and join back " " 

// Time: O(n) for using split, reverse and join array methods
// Space: O(n) 

// function reverseWords(sentence) {
//   // let splitSentence = sentence.split(" "); 
//   // let reversedSentence = splitSentence.reverse(); 
//   // let joinedSentence = reversedSentence.join(" "); 
//   // return joinedSentence

//   // OR one line 
//   return sentence.split(" ").reverse().join(" "); 
// }

/*

idx   0   1   2   3   4   5   6   7   8   9   10  11
str   H   e   l   l   o       w   o   r   l   d   .

*/ 

// NEW APPROACH  
// - split the sentence into an array ["hello", "world"]
// - initialize revStr as "" 
// - reverse for loop on the ARRAY 
// - check: if current element at [i] is "" we'll continue 
// - check: if revStr has any characters in it we'll add a " "
// - build revStr with current elements 
// - return revStr 

// Time: O(n) where we use split, iterate and concatenate at LINEAR TIME 
// Space: O(n) we use an array to build the revStr

function reverseWords(sentence) {
  let arr = sentence.split(" ")
  let revStr = ""; 
  for(let i = arr.length - 1; i >= 0; i--) {
    // check: if current element is empty we just continue 
    if(arr[i] === "") continue; 
    // check: if there's any character already in revStr we'll add a space 
    if(revStr.length > 0) {
      revStr += " "
    };
    // build the revStr with current element 
    revStr += arr[i]; 
  }
  return revStr; 
}