/*
Reverse a String

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

*/

function reverseString(str) {
  const newReverse = str.split("").reverse().join("");
  return newReverse
}

console.log("Reverse String:", reverseString("Hello") )

// split serpaa cada uno de mi string que estoy iterando
// Reverse los pone del lado contrario mi etaracion que estoy realizando con el split 
// join me esta uniendo mi nuevo string que itere previamente