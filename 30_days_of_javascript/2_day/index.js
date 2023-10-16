// Ejercicio: Nivel 1

//  1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.

var desafio = '30 dias de Javascript'
console.log("✨ 1. Ejercicio: ⚒", desafio)

//  2. Imprima la cadena en la consola del navegador usando console.log()

const cadena = "la caneda en la consola"
console.log("✨ 2. Ejercicio: ⚒", cadena.length)

//  3. Imprima la longitud de la cadena en la consola del navegador usando console.log()
const cadena2 = "la caneda en la consola"
console.log("✨ 3. Ejercicio: ⚒", cadena2.length)

//  4. Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()

const cadena3 = "isactes"
console.log("✨ 4. Ejercicio: ⚒", cadena3.toUpperCase())

// 5. Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()

const cadena4 = "ISACTES"
console.log("✨ 5. Ejercicio: ⚒", cadena4.toLowerCase())

//  6. Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()

//  use substr
const nameStr = "Isactes"
console.log("✨ 6. Ejercicio: ⚒", nameStr.substr(2,5))

//  use substring
const nameStr1 = "isactes"
console.log("✨ 6. Ejercicio: ⚒", nameStr1.substring(0,3))

//  7. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.

const phrase = " Days Of JavaScript de 30 Days Of JavaScript."

console.log("✨ 7. Ejercicio: ⚒", phrase.substring(7, 5))

// 8. Verifique si la cadena contiene una palabra Script usando el método includes()

const mockIncludes = "30 Days Of JavaScript"

console.log("✨ 8. Ejercicio: ⚒", mockIncludes.includes("Script"))

// 9. Divide la cadena en un array usando el método split()

const mockSplit = "30 Days Of JavaScript"

console.log("✨ 9. Ejercicio: ⚒", mockSplit.split())
console.log("✨ 9. Ejercicio: ⚒", mockSplit.split(" "))
console.log("✨ 9. Ejercicio: ⚒", mockSplit.split(""))

// 10. Divida la cadena 30 días de JavaScript en el espacio usando el método split()


const mockSplit10 = "30 días de JavaScript"

console.log("✨ 10. Ejercicio: ⚒", mockSplit10.split(" ")) // Dividir a una matriz en el espacio

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz. Se utiliza split(ve ejemplos)