/**
 * 64p-2
 */

let a = 1;
let b = 2;  // 세미콜론을 붙이지 않으면 Cannot access 'b' before initialization 에러가 뜸
[a, b] = [b, a]
console.log(a, b) // 2 1