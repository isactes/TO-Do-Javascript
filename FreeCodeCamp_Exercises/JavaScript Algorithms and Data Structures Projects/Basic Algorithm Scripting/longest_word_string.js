/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    let newString = str.split(" ")
    let maxlength = 0
     for (let i = 0; i < newString.length; i++) {
        if (newString[i].length > maxlength) {
            maxlength = newString[i].length
        }
        
     }
    return maxlength
}

console.log("findLongestWordLength", findLongestWordLength("The quick brown fox jumped over the lazy dog"))


//este ejercicio es de numero mas grande al que estamos iterando
function greterThan(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

cos