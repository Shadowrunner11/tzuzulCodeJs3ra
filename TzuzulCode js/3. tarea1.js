for (var index = 1; index !==11; index++) {
    var producto = 5*index
    console.log("El resultado de 5 por",index,"es", producto)
}

for (let index = 1; index < 12; index+=2) {
    if(index<10)
        console.log(" ".repeat((9-index)/2)+"*".repeat(index))
    else
        console.log("  *****")
}
