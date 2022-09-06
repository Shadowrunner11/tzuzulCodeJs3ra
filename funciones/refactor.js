
/**
 * Esta funcion descompone un numero entero en un
 * array con sus cifras
 * @param {Number} numero - un numero entero
 */
function descomponer(numero){
  const cifras = []

  while(numero > 0){
    const cifra = numero%10
    numero = (numero-cifra)/10
    cifras.unshift(cifra) 
  }

  return cifras
}






























