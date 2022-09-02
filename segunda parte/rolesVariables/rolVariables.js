// Estructura de datos

// Array -> arreglo
const miArray = [1, 4, 6, 37, 51, 6, 7, 21, 12]

// var
// alcance es a nivel de la funcion que lo contiene
// esta variable estara disponible en la funcion que la contenga

// let y const
// su alcance es de bloque
/* 
  {
    let miVariable = 10
    console.log(miVariable) -> esto si se puede xq esta en el bloque
  } 

  console.log(miVariable) -> esto daria un error xq estoy fuera del bloque
*/

// la diferencia entre let y const, es que const NO es reasignable
// miArray = [6, 7 ,7, 31, 2] -> me dara un error xq no se puede reasignar

