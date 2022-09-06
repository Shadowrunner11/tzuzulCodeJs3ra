function descomponerNumero(numeroEntero){
  const cifras = []

  while(numeroEntero > 0){
    const cifra = numeroEntero%10
    numeroEntero = (numeroEntero-cifra)/10
    cifras.unshift(cifra) 
  }

  return cifras
}

const resultado = descomponerNumero(12312) //-> [1,2,3,1,2]
console.log(resultado)

