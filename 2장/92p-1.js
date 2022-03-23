/**
 * 92p-1
 */

const log = console.log
function* gen() {
    yield 10
    if (false) yield 20
    yield 30
    return 90
    yield 30
}
let iter = gen()

log([...iter]) //[10, 30]

iter = gen()
for(const a of iter) {
    log(a) // 10, 30
}