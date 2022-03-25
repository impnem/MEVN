/**
 * 107p-1
 */

const a = {"a" : 1}
const b = c => c.a = 2
b(a)
console.log(a)
/*
{ a: 2 }
*/