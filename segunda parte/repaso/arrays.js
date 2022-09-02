const frutas = [
  "manzana 🍎 ",// 0
  "uvas 🍇 ",   // 1
  "fresa 🍓",   // 2
  "durazno 🍑 ",// 3
  "mango 🥭 "   // 4
]

console.log(frutas[4])// -> 🥭
console.log(frutas[1])// -> 🍇 

for (let index = 0; index < frutas.length; index++) {
  const fruta = frutas[index];
  console.log("🚀 ",fruta)
}

console.log(index)