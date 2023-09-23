/*
  Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.


*/
const arrayOfWords = ["For the purpose of this exercise"];

// function titleCase(str) {
//   let newString = [];
//   for (let i = 0; i < str.length; i++) {
//     const words = str[i].split(" ");
//     const newWords = []
//     for (let j = 0; j < words.length; j++) {
//       const word = words[j];
//       const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
//       newWords.push(capitalizeWord);
//     }
//     const capitalizeString = newWords.join(" ");
//     newString.push(capitalizeString)
//   }
//   return newString
// }
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
console.log("Title Case: ", titleCase(arrayOfWords));


