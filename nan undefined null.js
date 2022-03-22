console.log(typeof NaN) // number  ошибка при раработке
console.log(typeof undefined) // undefined
console.log(typeof null) // obj

console.log(NaN === NaN)
console.log(undefined === undefined)
console.log(null === null)


const a = 1/2
let b
const c = null
console.log(a === NaN)
console.log(b === undefined)
console.log(c === null)