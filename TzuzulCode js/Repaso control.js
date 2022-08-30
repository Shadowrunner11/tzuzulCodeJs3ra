// Algoritmo para definir si puedes manejar

// Pedir la edad al usuario

// Comparar la edad del usuario con la edad legal para conducir

// Informarle al usario si ya puede aplicar para una licencia

// prompt devuelve string || null

let nacionalidad = prompt('Ingresa el codigo de tu pais, ejemplo estados unidos es USD')
let edadString = prompt('Ingrese su edad')

// let edadNumber = parseInt(edadString)

let edadNumber = Number(edadString)

let legalDriveAge

switch (nacionalidad) {
    case 'USD':
        legalDriveAge = 16
        break
    default:
        legalDriveAge = 18       
}

let response

// si es una sola instruccio no necesito las llaves para identificar el bloque
if(edadNumber<0)
    response = 'Por favor no se pase de bromista joven, me compra una loncherita si quiere que lo atienda'
else if(edadNumber >= 60)
    response = 'No le podemos dar licencia sin una evaluacion fisica previa por su edad'
else if(edadNumber >= legalDriveAge)
    response = 'Puedes aplciar para una licencia'
else
    response = 'No puedes aplciar una licencia'

alert(response)
