/*

Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function converCharacter(letter) {
  switch (letter) {
    case "&":
      return "&amp;"
    case "<":
    return "&lt;"
    case ">":
      return "&gt;"
    case '"':
    return "&quot;" 
    case "'":
      return "&apos;"
  }
}

console.log("❤️‍🔥", converCharacter("<"))

function convertHTML(str) {

  let characterCheck = ["&", "<", ">", "'", '"']
  for (let i = 0; i < str.length; i++) {
    if (characterCheck.indexOf(str[i]) != -1) {
      str = str.slice(0, i) + converCharacter(str[i]) + str.slice(i + 1)
      console.log("🚧",str.slice(0, i) + converCharacter(str[i]) + str.slice(i + 1))
    }
  }
  return str;
}

console.log("✨",convertHTML("<>"));