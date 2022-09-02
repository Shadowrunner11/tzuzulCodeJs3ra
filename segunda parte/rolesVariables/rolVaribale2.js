// Hallar el valor mas grande de un array de numeros enteros positivos

// array de ejemplo
const miArray = [1, 4, 6, 37, 51, 6, 7, 21, 12]
// index         0  1  2   3  4   5  6  7   8

console.log("🚀 ~ miArray", miArray)

let index = 0
const longitudArray = miArray.length
let mayor = 0
// recorrer el array
/* while(stepper < longitudArray){
  console.log(miArray[stepper])
  stepper++
}
 */

// anidamos un if
while(index < longitudArray){
  const elemento = miArray[index]
  console.log("🚀 temporal, ↕ mayor", elemento, mayor)

  if(elemento > mayor) 
    mayor = elemento 

  index++
}


console.log("mayor", mayor)