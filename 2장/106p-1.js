/**
 * 106p-1
 */

const f1 = obj => { // 1번)
    obj = null
}
let b1 = {"a" : 1}
f1(b1)
console.log(b1) // {"a" : 1}
const f2 = array => { // 2번)
    array = null
}
let b2 = []
let a2 = b2
f2(b2)

console.log(b2) // []

const swap = (a, b) => { // 3번)
    let temp = a
    a = b
    b = temp
}
let x = 1
let y = 2
swap(x, y)
console.log(x, y) // 1 2