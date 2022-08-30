// TEOREMA DEL PROGRAMA ESTRUCTURADO 

// Estrcutras de control

// 1. Secuencia: Se ejecuta una instruccion una despues de otra
// 2. Seleccion: Permita decidir entre varias opciones cual se ejecutara
// 3. Iteracion: Repetir un bloque codigo varias veces

// Asginar a username el resultado de lo que introduzca el usario en el prompt
var username = prompt('Dime tu nombre')
alert('Hola '+ username)

var lastName = prompt('Tambien dime tu apellido')

alert('Response con S si es afirmativo y sino con cualquier otra letra')
var lavarLaRopa = prompt('Lavaste la ropa?') === 'S' // Si mi usario responde S 
//entonces evalua 'S' === 'S' -> true, sino no es S, te va dar false
var hacerLaTarea = prompt('Hiciste la tarea') === 'S'

if(lavarLaRopa && hacerLaTarea){
    alert('Puedes salir a jugar 😊 '+ username)
}else{
    alert('Te quedas castigado en casa 😢 '+username + lastName)
}

