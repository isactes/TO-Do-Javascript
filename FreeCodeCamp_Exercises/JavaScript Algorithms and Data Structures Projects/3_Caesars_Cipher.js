/*

Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


//  Officla soluction 
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13Off(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

console.log("✨", rot13Off("SERR CVMMN!"))


// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotChartArr = [];
  var regEx = /[A-Z]/;
  str = str.split("");

  for (var x in str) {
    if (regEx.test(str[x])) {
      rotChartArr.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65)
    } else {
      rotChartArr.push(str[x].charCodeAt())
    }
  }
  str = String.fromCharCode.apply(String, rotChartArr)
  return str;
}

console.log("✨",rot13("SERR CVMMN!"));