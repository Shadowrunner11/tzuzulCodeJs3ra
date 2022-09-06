// Built in

// accediendo a una constante adentro de Math
/* console.log(Math.PI)

console.log(Math.random())
 */
/**
 * Funcion que emula el lanzamiento de un dado de 6 caras
 */
function lanzarDado(){
  const rango05 = Math.random()*5
  const rango16 = rango05 + 1
  const redondeado = Math.round(rango16)
  return redondeado
}

/**
 * Funcion que emula el lanzamiento de un dado de 6 caras
 */
function lanzarDadoV2(){
  return Math.round(Math.random()*5+1)
}

const resultado = lanzarDadoV2()
console.log("📊",resultado)
