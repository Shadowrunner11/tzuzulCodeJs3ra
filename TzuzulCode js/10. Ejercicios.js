// Hallar la suma de los numeros enteros desde el 20 hasta el 800

// 20+ 21+ 22+ 23+ 24 +..+ 800
// Podria empzar con el numero 20 e ir actualizandolo


//O(n)
var numero  = 20
var resultado = 0

while(numero <= 800){
    // el resultado acumula lentamente la adicion
    // por eos debemos actuaizar agregando a su valor previo el siguinte numero a sumar
    resultado+=numero //resultado = resultado + numero
    // actualizamos el numero
    numero++
}

console.log(resultado)


// O(1)
console.log((20+800)*(800-19)/2)

// Tarea averiguar que es un algoritmo