// Descomponer un numeor entero positivo en sus cifras

// Ejemplo
// Input : 647
// Output: [6, 4, 7]

// 1) Obtener el 7? 647%10 -> 7
// 2) Quitar la cifra de las unidades (647-7)/10 = 64
// Repetir el paso 1) y 2) con el 64
// Para cuando lleguemos a cero

// f(x) = x + 1
// f(10) = 10 +1 = 11
// f(23) = 23 + 1 = 24

function descomponer(numero){
  // const no permite redeclarar, pero nadie dice que no puedo mutar el array
  // es decir no puedo cmabiar de direccion mi casa, pero si puedo cambiar
  // lo que hay dentro de la casa
  const cifras = [] 
  while(numero > 0){
    const cifra = numero%10
    // unshift se encgar de introducir elementos al PRINCIPIO del array
    cifras.unshift(cifra)
    numero = (numero-cifra)/10
  }
  
  alert(cifras)
}

let number = Number(prompt("Ingrese un numero"))

descomponer(number) // -> [3, 6, 4, 5]

// Tarea Diseño por contrato

