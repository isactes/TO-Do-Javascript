/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...steamrollArray(arr[i]))
    } else {
      newArr.push(arr[i])
    }
    
  }
  return newArr;
}

console.log("✨",steamrollArray([1, [2], [3, [[4]]]]));