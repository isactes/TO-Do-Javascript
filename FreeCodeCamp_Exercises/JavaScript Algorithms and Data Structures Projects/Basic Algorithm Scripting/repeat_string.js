/*
Repeat a String Repeat a String


Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    let newString = ""
    for (let i = 0; i < num; i++) {
        newString += str;
    }

    return newString;
  }
  
  console.log("Repeat string",repeatStringNumTimes("abc", 3));