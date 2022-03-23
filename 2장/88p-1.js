/**
 * 88p-1
 */

const log = console.log
function* gen() {
    yield 10
    if (false) yield 20 // 1번)
    yield 30
    return 90 // 2번)
    yield 30
}
let iter = gen()
console.log(iter)
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())
/*
Object [Generator] {}
{ value: 10, done: false } // 3번)
{ value: 30, done: false }
{ value: 90, done: true }
{ value: undefined, done: true }
*/