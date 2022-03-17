/**
 * 52p-1
 */

//before - ES5
function a(){
    return 1
}
//after - ES6
const a_ES6 = () => 1

console.log(a())
console.log(a_ES6())
/*
1
1
 */