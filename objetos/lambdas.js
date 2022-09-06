function miFuncion (){
  console.log('🚀 ',arguments[0])
  console.log('👨‍🚀 ',arguments[1])
}

miFuncion()

miFuncion(3,4)

miFuncion(2,3,4,5)

/* 
const miFuncion = {
  arguments: []
} */

// funciones anonimas

const funcionAnonima = function (){
  console.log(arguments)
  console.log('134rerfer')
}

funcionAnonima()
funcionAnonima(12312, 123122)

const arrowFunction = () => {
  // console.log(arguments) -> esto daria eeror porque las arrow functions no tienen arguments
  console.log('⤴ ')
}

arrowFunction()