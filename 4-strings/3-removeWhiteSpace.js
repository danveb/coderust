// Remove White Spaces from String 
// given a non-null string remove all white spaces 

// str = "all greek to me"
// output = "allgreektome" 

/*

idx   0   1   2   3   4   5   6   7   8   9
str       a   l   l       g   r   e   e   k
      i                                       => i === " "; we skip
          i                                   => i === "a"; newStr += "a"
              i                               => i === "l"; newStr += "l"
                  i                           => i === "l"; newStr += "l"
                      i                       => i === " "; skip 
                          i                   => i === "g"; newStr += "g" 
                              i               => i === "r"; newStr += "r"
                                  i           => i === "e"; newStr += "e"
                                      i       => i === "e"; newStr += "e"
                                          i   => i === "k"; newStr += "k"

*/ 

// Brute Force
// - initialize newStr as empty "" 
// - iterate over input string once 
// - check: if there is a space we continue loop 
// - else we'll add to newStr 
// - return newStr 

// Time: O(n) where "n" is length of input string
// Space: O(n) because STRINGS IN JAVASCRIPT ARE IMMUTABLE...

function removeWhiteSpaces(str) {
  let cleanStr = "";
  for(let i = 0; i < str.length; i++) {
    // check: if current element is a space
    // we continue the loop without doing anything 
    if(str[i] === " ") {
      continue
    // check: if current element is a character 
    } else {
      // build cleanStr 
      cleanStr += str[i]; 
    };    
  };
  return cleanStr; 
}