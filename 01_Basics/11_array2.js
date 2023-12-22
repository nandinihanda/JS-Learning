const heros=["thor","spiderman","ironman"]
const heros1=["superman", "flash","batman"]

heros.push(heros1)
console.log(heros)

console.log(heros[3][1])

heros.concat(heros1)
console.log(heros)

const allheros=heros.concat(heros1)
console.log(allheros);

console.log(Array.isArray("Nandini"))
console.log(Array.from("Nandini"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
