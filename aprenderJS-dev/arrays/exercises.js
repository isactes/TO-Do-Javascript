/*

Métodos y propiedades de Array

En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:

*/

function ProcesoPedidos(pedidos){
  const newPedido = pedidos.shift()
  pedidos.unshift("bebidad");
  pedidos.push(newPedido)
  return pedidos
}

/*
  Iteración de Arrays en JavaScript

  Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.

*/

function sumarPares(numeros) {
  let suma = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  
  return suma;
}

console.log("numerosPAres: ", sumarPares([1,2,3,4,56,,7,6,7,8,5,4,9]))

/*
Búsqueda en Arrays con sus métodos

Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".

Usa el método endsWith() de string para resolverlo.
*/

function acabanEnA(words) {
  for(const word of words){
    if(!word.endsWith("a")){
      return false
    }
  }
  return true
}

console.log("acaban en a", acabanEnA(["acbada", "acbass", "acute", "haber", " coerced", "abacaron"]))


/*
Ordenamiento de Arrays en JavaScript

Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.


Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].


Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
*/
function sortAbsoluteNumbers(numbers) {
  let newArrays = []
  for (let i = 0; i < numbers.length; i++) {
    const element = Math.abs(numbers[i]);
    newArrays.push(element)
  }
  newArrays.sort((a, b) => a -b);
  return newArrays
}

console.log("Este no tiene el valor absoluto", sortAbsoluteNumbers([5, -10, -2, -25, -7]))


// Correcto
function sortAbsoluteNumds(numbers) {
  let ansoluteArra = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = {
      value: numbers[i],
      absoluteValue: Math.abs(numbers[i])
    }
    ansoluteArra.push(element)
  }
  ansoluteArra.sort((a, b) => a.absoluteValue - b.absoluteValue)
  return ansoluteArra.map( element => element.value);
}

console.log("Este tiene el valor absoluto", sortAbsoluteNumds([5, -10, -2, -25, -7]))
/*

Transformación de Arrays en JavaScript


Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.


Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
*/

function buscaPalabrasWithFor(words, word) {
  // Tu codigo
  const wordIndex = words.indexOf(word)
  const wordLength = word.length;
  const longestWords = [];
  for (let i = 0; i < words.length; i++) {
    if (i !== wordIndex && words[i].length > wordLength) {
      longestWords.push(words[i]);
    }
  }
  return longestWords;
}
function buscaPalabrasfilterMap(words, word) {
  // Tu codigo
  const wordIndex = words.indexOf(word)
  const wordLength = word.length;
  const longestWords = words
  .filter((w, index) => index !== wordIndex && w.length > wordLength);
  return longestWords;
}



const words = ["apple", "banana", "orange", "grapefruit", "mango"];
const word = "orange";

const resultFor = buscaPalabrasWithFor(words, word);
const resultFilterMap = buscaPalabrasfilterMap(words, word);
console.log("Longer words:", result); 
console.log("Longer words:", resultFilterMap); 

// NO SE POR QUE NO LO HAGGARA EN SU CONSOLOA DE MIDU DE LA PRUEBA Transformación de Arrays en JavaScript

/*
      Matrices

      Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
*/



const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {    
      if (matrix[i][j] === "JavaScript") {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]

/*
  Algoritmos con Arrays

  En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.


Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.
*/

function minAndMaxWord(words) {
  // codigo
}