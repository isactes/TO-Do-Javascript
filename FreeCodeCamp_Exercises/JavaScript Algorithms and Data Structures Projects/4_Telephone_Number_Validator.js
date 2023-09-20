/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

*/

// The result its with Regular Expresion 

//   1- ^ beginning of the string.
//   2- (1\s?)? allows for "1" or "1 " if there is one.
//   3- \d{n} checks for exactly n number of digits so \d{3}
//   checks for three digits
//   4. - x|y checks for either x or y so (\(\d{3}\)|\d{3}
//   checks for either three digits surrounded by parentheses or three digits by themselves with no parentheses
//   5. [\s\-]? checks for spaces or dashes between the groups of digits.
//   6. $ end of the string


function telephoneCheck(str) {
  const regExpr = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/

  const result = regExpr.test(str)
  return result;
}

console.log("✨",telephoneCheck("55555555"));