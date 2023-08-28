/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

*/

function destroyer(arr) {
  let newArr = []
  const firstPosition = Object.values(arguments)
  const lastPosition = Object.values(arguments).slice([1])
  for (let i = 0; i < firstPosition.length; i++) {
    const element = firstPosition[i];
    if (lastPosition.indexOf(element) === -1) {
      newArr.push(element)
    }
    
  }
  return newArr;
}

console.log("🚧",destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function destroyer2(arr) {
  const valuesToremove = Array.from(arguments).slice(1)
  const newResults = arr.filter(function (val) {
    return !valuesToremove.includes(val);
  })
  return newResults
}

console.log("🚧",destroyer2([1, 2, 3, 1, 2, 3], 2, 3));