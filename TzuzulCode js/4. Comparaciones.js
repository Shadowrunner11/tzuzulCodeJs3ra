// estrictamente igual
console.log(3 === 3) // -> true
console.log(3 === 4) // -> false
console.log(3 === '3') // -> false
console.log('3' === 3) // -> false

// flaky equal 
console.log(3 == 3) // -> true
console.log(3 == 4) // -> false
console.log(3 == '3') // -> true
console.log('3' == 3) // -> true


// Greater than
console.log(3 > 4) // -> false

// Less than
console.log(3 < 4) // -> true

// lequal
console.log(7 <= 10)
console.log(10 <= 10)

// gequal
console.log(9 >= 8) // -> true
conosle.log(8 >= 8) // -> true

// notEqual strict
console.log(7 !== 8) // -> true
console.log(10 !== 10) // -> false
console.log(10 !== '10') // -> true

console.log(10 != '10') // -> false
console.log('10' != 10) // -> false


