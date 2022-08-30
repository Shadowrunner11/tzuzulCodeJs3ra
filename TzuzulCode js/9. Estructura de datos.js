// Arrays, literal

var miArray = [1,2,3,4,5,6]

var misFrutas =["Papaya","Limon","Tomate","Manzana"]

//induccion

var perro1 = "Hachi"
var perro2 = "Pluto"
var perro3 = "Spike"

//mejor seria

var jauria = ["Hachi","Pluto","Spike"]
// indices     [0]      [1]     [2]

//console.log(jauria[0])
// clasica


var longitudDelArray = jauria.length
console.log("Longitud de la jauria", longitudDelArray)

for (let index = 0; index < longitudDelArray; index++){
  console.log(jauria[index])    
}