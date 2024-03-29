/*
Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "..."
    }else {
        return str
    }
  }

  function truncateStringTernary(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
  
  console.log("truncateString",truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log("truncateString",truncateStringTernary("A-tisket a-tasket A green and yellow basket", 8));