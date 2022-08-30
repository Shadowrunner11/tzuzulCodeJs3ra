// palabra reservada function seguido del nombre de la funcion (arbitrario)

function miPrimeraFuncion(){
    console.log('Hola')
    console.log('Mundo')
    console.log(90)
}

console.log('Linea 9')

// invcando funcion con ()
miPrimeraFuncion()

// funcion con parametros

function miSegundFuncion(x, y){
    return x + y 
}

console.log(miSegundFuncion(1, 2))
console.log(miSegundFuncion(34,5))