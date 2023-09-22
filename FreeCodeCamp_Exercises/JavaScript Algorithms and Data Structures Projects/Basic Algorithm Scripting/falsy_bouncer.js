/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
  let newArrays = []
  
  for (let i = 0; i < arr.length; i += 1) {
    let element = arr[i];
    console.log(element)
    if (element) {
      newArrays.push(arr[i])
    }
    
  }

  return newArrays;
}

console.log("Falsy Boucer", bouncer([7, "ate", "", false, 9]));