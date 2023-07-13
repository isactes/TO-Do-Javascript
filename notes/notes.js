// NOTEs of my JS terminal


// Arrays
const nums = [ 1,2,3,4,5,6]
nums[0] = 10
nums[2] = 30
console.log("nums", nums)
function suma(n) {
  if(n === 0 || n === 1){
    return 1
  }else {
    return n + suma(n -1)
  }
}
console.log("Suma",suma(3))

function recursiva(n) {
  if(n === 0){
    return 0
  }else {
    return n + recursiva(n - 1)
  }
}
console.log("recusriva", recursiva(3))

// funcion fibonaci
function Fibonacci(n1) {
  if(n1 === 0 || n1 === 1){
    return n1
  }
  let initialValues = [0,1]
  for(let i = 2; i <= n1; i ++){
    initialValues.push(initialValues[i-1] + initialValues[i-2])
  }
  return initialValues[initialValues.length -1]
}
console.log(Fibonacci(6))

// Arrays 
const numbers = [1,2,3,4,5]
numbers[0] = 10
numbers[2] = 30
console.log(numbers)
// Ejercicio de Arrays

function ProcesoPedidos(pedidos){
  const newPedido = pedidos.shift()
  pedidos.unshift("bebidad");
  pedidos.push(newPedido)
  return pedidos
}

// numeros inpares
let numeros = [1,2,3,4,5,6,7,8,9]
function sumarPares(numeros) {
  let suma = 0
  // tu código aquí
  for(let i = 0; i < numeros.length; i ++) {
    if(numeros[i] % 2 === 0){
      suma += numeros[i]
    }
  }
  return suma
}

console.log("inpar", sumarPares(numeros))

// freeecodeacamp
// Iterate Through All an Array's Items Using For Loops

// example
function greaterThan(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i ++){
    if(arr[i] > 10){
      newArr.push(arr[i])
    }
  }
  return newArr;
}
console.log("greaterThan",greaterThan([2,10,1,2,43,23,6,4,89]));
// este funcion retorna el numero mayor del array que estoy iterando
function findMaxAlgorinthm(arr){
  let max = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max
}
// aqui termina 
// arrays midu un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a"
const worda = [
  "casa",
  "oso",
  "almohada"
]
function acabanEnA(words) {
  for(const word of words){
    if(!word.endsWith("a")){
      return false
    }
  }
  return true
}

console.log("Hoas", acabanEnA(worda))

// Funcion de clima celcius a faranjai
function convertCtoF(celsius) {
  let fahrenheit;
    fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}

console.log("Clima", convertCtoF(1))