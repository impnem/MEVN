/**
 * 89p-1
 */

const log = console.log
function* gen() {
    yield 10
    if (false) yield 20 // 1번)
    yield 30
    return 90 // 2번)
    yield 30
}
console.log([...gen()]) // [10, 30]