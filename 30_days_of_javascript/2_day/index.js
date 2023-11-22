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

const mockSocials = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log("✨ 11. Ejercicio: ⚒", mockSocials.split(", "))

// 12. Cambie 30 días de JavaScript a 30 días de Python usando el método replace().

const mockReplace = "30 días de JavaScript";

console.log("✨ 12. Ejercicio: ⚒", mockReplace.replace("JavaScript", "Python"))

// 13. ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().

const mockCharAt = "30 días de JavaScript";

console.log("✨ 13. Ejercicio: ⚒", mockCharAt.charAt(15))

// 14. ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()

const mockCharCodeAt = "30 días de JavaScript";

console.log("✨ 14. Ejercicio: ⚒", mockCharCodeAt.charCodeAt(15)) // primer intento 
console.log("✨ 14. Ejercicio: ⚒", mockCharCodeAt.charCodeAt(11)) //  correcion 

// 15. Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript

const mockIndex = "30 Days Of JavaScript";

console.log("✨ 15. Ejercicio: ⚒", mockIndex.indexOf("a"))


// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.

const mockLastIndex = "30 Days Of JavaScript";

console.log("✨ 16. Ejercicio: ⚒", mockLastIndex.lastIndexOf("a"))

// 17. Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

const mockIndex1 = "No puedes terminar una oración con porque porque porque es una conjunción"

console.log("✨ 17. Ejercicio: ⚒", mockIndex1.indexOf("porque"))

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

const mockLastIndex1 = "No puedes terminar una oración con porque porque porque es una conjunción";

console.log("✨ 18. Ejercicio: ⚒", mockLastIndex1.lastIndexOf("porque"))

// 19. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

const mockFind = "No puedes terminar una oración con porque porque porque es una conjunción"
const finWord = /porque/gi
console.log("✨ 19. Ejercicio: ⚒", mockFind.match(finWord))

// 20. Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.

const mockTrim = "30 días de JavaScript"

console.log("✨ 20. Ejercicio: ⚒", mockTrim.trim(" "))
console.log("✨ 20. Ejercicio: ⚒", mockTrim.trim())

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

const mockStarWith = "30 días de JavaScript"

console.log("✨ 21. Ejercicio: ⚒", mockStarWith.startsWith("30 días de JavaScript"))

// 22. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

const mockEndsWith = "30 días de JavaScript"

console.log("✨ 20. Ejercicio: ⚒", mockEndsWith.endsWith("30 días de JavaScript"))

//23. Usa el método match() para encontrar todos los a en 30 días de JavaScript

const mockMacth = "30 días de JavaScript"
const macthMock = /a/gi

console.log("✨ 23. Ejercicio ⚒", mockMacth.match(macthMock))

// 24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'

const mockConcat1 = "30 días de "
const mockConcat2 = "JavaScript"

console.log("✨ 24. Ejercicio ⚒", mockConcat1.concat(mockConcat2))

// 25. Use el método repeat() para imprimir 30 días de JavaScript 2 veces

const repeatMock = "30 días de JavaScript, "

console.log("✨ 25. Ejercicio ⚒", repeatMock.repeat(2))

// Ejercicio: Nivel 2

// 1. Usando console.log() imprima la siguiente declaración:

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// 2. Usando console.log() imprima la siguiente cita de la Madre Teresa:

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

if (typeof "10" === typeof 10) {
  console.log("Es lo mismo")
} else {
  console.log("No es lo mismo")
}
 // 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.

 let num = "9.81";
let numFloat = parseFloat(num);

if (numFloat === typeof 10) {
    console.log("si es lo mismo")
} else {
  console.log("No es lo mismo")
}

console.log(numFloat); // 9.81

// 5. Verifique si 'on' se encuentra tanto en Python como en la jerga

const textPyton = "Python"
const textJerga = "Jerga"

if (textPyton.includes("on") && textJerga.includes("on")) {
  console.log("lo encluye en los dos")
} else {
  console.log("no lo incluye en los dos")
}


// 6. Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

const textJergas = "jerga"
const textJargon = "jargon"

if (textJargon.includes(textJergas)) {
  console.log("si lo incluye")
} else {
  console.log("no lo incluye")
}


// 7. Genere un número aleatorio entre 0 y 100 inclusive.

const numG = Math.floor(Math.random() * 100)

console.log("✨", numG)
