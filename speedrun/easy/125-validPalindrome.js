// Valid Palindrome 
// given a string "s", return true if it's a palindrome
// return false otherwise 

// s = "race a car" 
// output = true; "raceacar" is a true palindrome 

// s = " "
// output = true; empty string " " is a true palindrome

// Brute Force 
// 1. cleanStr helper function to allow only alphaNumCharacters with FOR LOOP 
// 2. cleanStrRev helper function to allow only alphaNumCharacters with REVERSE FOR LOOP 
// - compare cleanStr1 and cleanStr2 for equality

// Time: O(n) 
// Space: O(n) 

function isPalindrome(s) {
  // edge case: if empty string return false 
  if(s.length === 0) return false; 
  let cleanedStr1 = cleanStr(s); 
  let cleanedStr2 = cleanStrRev(s); 
  return cleanedStr1 === cleanedStr2; 
}

function cleanStr(str) {
  if(str.length === 0) return null; 
  let newStr = ""; 
  let alphaNumAllowed = "abcdefghijklmnopqrstuvwxyz0123456789"; 
  for(let i = 0; i < str.length; i++) {
    let lowerStr = str.toLowerCase(); 
    // only allow alphaNum to newStr 
    if(alphaNumAllowed.indexOf(lowerStr[i]) !== -1) {
      newStr += lowerStr[i]; 
    }
  };
  return newStr; 
}

function cleanStrRev(str) {
  if(str.length === 0) return null; 
  let newStr = ""; 
  let alphaNumAllowed = "abcdefghijklmnopqrstuvwxyz0123456789"; 
  for(let i = str.length - 1; i >= 0; i--) {
    let lowerStr = str.toLowerCase(); 
    // only allow alphaNum to newStr 
    if(alphaNumAllowed.indexOf(lowerStr[i]) !== -1) {
      newStr += lowerStr[i]; 
    }
  };
  return newStr; 
}

// Can we do better? 
// Optimal
// 1. use a cleanStr helper function to only allow alphanumeric characters; anything else doesn't belong to our string 
// 2. use a 2 pointer approach to check from opposite ends of the string; if NOT equal we return false rightaway 

// Time: O(n) 
// Space: O(n) 

function isPalindrome(s) {
  if(s.length === 0) return false 
  let cleanedStr = cleanStr(s); 
  let left = 0;
  let right = s.length - 1;
  while(left <= right) {
    // check: if s[left] === s[right] we know it's a palindrome 
    if(cleanedStr[left] !== cleanedStr[right]) {
      return false; 
    };
    left++
    right-- 
  }
  return true; 
}

function cleanStr(str) {
  let newStr = ""; 
  let alphaNumChars = "0123456789abcdefghijklmnopqrstuvwxyz"; 
  for(let i = 0; i < str.length; i++) {
    let lowerStr = str[i].toLowerCase(); 
    if(alphaNumChars.indexOf(lowerStr) !== -1) {
      newStr += lowerStr; 
    };
  }
  return newStr; 
}