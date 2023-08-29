/*
Objetos

Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

name con el valor del parámetro name
subscribers con el valor del parámetro subs
hash, con el valor de la longitud del string name multiplicado por el parámetro subs
Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.
*/

function createObject(name, subs) {
    // tu código aquí
    const newInfo = {
      name: name,
      subscribers: subs,
      hash: name.length * subs,
      getStatus: function() {
        return `El canal de ${this.name} tiene ${this.subscribers} suscriptores`
      }
    }
    return newInfo    
  }

  const sunsds = createObject("Miguel", 100)
  console.log("new", sunsds.getStatus())


  /*
  Atajos para trabajar con objetos


  
  */

  // ¿Qué se imprimirá en la consola al ejecutar el siguiente código:

  const person1 ={
    name: "isactes",
    age: 29,
    hobbies: [ "reading", "play Videogames", "music"]
    }

    const { age: personAge} = person

    console.log("Atajos de objectos", age)
    // Imprime age is not defined 

    // ¿Qué se imprimirá en la consola al ejecutar el siguiente código:

    const person2 = {
      name: "isactes",
      age: 29,
      hobbies: [ "reading", "play videogames", "music"]
    }

    const { weigth = 70, heigth =180 } = person2

    console.log("Atajos de objectos", weigth, heigth)
    // imprime los valores que le asignamos a las const ya que no existen en nuestro array person2

    /*
    Iterando Objetos en JavaScript
    */

    // ejemplos 
    const spidermanKeys = {
      name: 'Spidey',
      universe: 42,
      powers: ['web', 'invisibility', 'spider-sense']
    }
    const properties = Object.keys(spidermanKeys)
    console.log("el numeor de mis propiedas", properties.length)
    properties.forEach(p => {
      console.log("propiedadaes", p)
    })

    // ejmplos
    const spidermanValues = {
      name: 'Spidey',
      universe: 42,
      powers: ['web', 'invisibility', 'spider-sense']
    }

    const values = Object.values(spidermanValues)

    console.log("valores de nuestra propiedades", values)

    values.forEach(v => {
      console.log("values", v)
    })

    // ejmplos 
    const spidermanEntries = {
      name: 'Spidey',
      universe: 42,
      powers: ['web', 'invisibility', 'spider-sense']
    }

    const entries = Object.entries(spidermanEntries)

    console.log("nos trae tanto las propiedades y valores de nuestro array", entries)

    entries.forEach(e => {
      console.log("nuestros entries", e)
    })


    /*
    Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
    
    Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
    */
    function getKeysOfBooleanValues(obj) {
      const newObj = []
      for (const val in obj) {
        console.log("🤔 keys", val)
        if (typeof obj[val] === "boolean") {
          newObj.push(val)
        }
        console.log("✨ newObj", newObj)
      }
      return newObj
    }

    console.log("❤️", getKeysOfBooleanValues({ a: true, b: 42, c: false }))

    /*
    Operador de Encadenamiento Opcional

    Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

Un objeto con la información del fondo marino
Una cadena de texto con el nombre del lugar que queremos explorar
Una cadena de texto con el nombre del objeto que queremos encontrar
Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. Así que intentaríamos acceder a ocean.deep.treasure.


Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.


Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido. Así que vamos a usar el operador de encadenamiento opcional para evitar errores.

Pista: ¡Recuerda que en una clase anterior hemos visto cómo podemos acceder a una propiedad de un objeto usando una variable! Por ejemplo, si tenemos un objeto person y una variable key con el valor name, podemos acceder a la propiedad name del objeto person usando person[key] y sería como hacer person.name.
    */

function searchInOcean(ocean, section, item) {
  // tu código aquí
  return ocean?.[section]?.[item] !== undefined;
}

const ocean = {
  deep: {
    treasure: "gold",
    wreckage: "ship",
  },
};

const place = "deep";
const targetItem = "treasure";

const found = searchInOcean(ocean, place, targetItem);