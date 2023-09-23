/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  const camelCasae = str.replace(/([a-z])([A-Z])/g, "$1 $2")
  const spaces = camelCasae.replace(/\s|_/g, "-")
  const newArray = spaces
  .toLowerCase()
  return newArray;
}

console.log("✨",spinalCase('The_Andy_Griffith_Show"'));