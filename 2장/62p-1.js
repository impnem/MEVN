/**
 * 62p-1
 */

const a = (b, ...rest) => { // 1번
    console.log(rest)
}
a(1, 2, 3) // [2, 3]

const b = [1, 2, 3]
const a2 = (a, b, c) => console.log(a, b, c) // 2번
a2(...b) // 1 2 3

const a3 = [1, 2, 3, 4, 5]
const [head, ...rest] = a3 // 3번
console.log(head, rest)
//1 [2, 3, 4, 5]