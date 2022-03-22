/**
 * 69p-1
 */

console.log("Hi!")
setTimeout(function timeout() {
    console.log("async function1 complete")
}, 5000)
setTimeout(function timeout() {
    console.log("async function2 complete")
}, 5000)
console.log("kundol!")
/*
Hi!
kundol!
async function1 complete
async function2 complete
*/