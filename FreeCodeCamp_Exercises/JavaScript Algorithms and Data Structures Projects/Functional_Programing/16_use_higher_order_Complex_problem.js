/*
Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

*/

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = arr => {
  // Only change code below this line
  const newArray = arr
  // .filter(item => item > 0)
  // .reduce((a, current) => a.concat(current*current), [])
  // .filter(num =>  Number.isInteger(num)) 
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2))
  return newArray;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log("✨",squaredIntegers);