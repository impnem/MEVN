/**
 * 95p-1
 */

// FxJS/Lazy/mapL.js
export default curry(function* map(f, iter){
    for (const a of toIter(iter)) yield go1(a, f)
})

// FxJS/Lazy/filterL.js
export default curry(function* filter(f, iter){
    for (const a of toIter(iter)) {
        const b = go1(a, f)
        if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop))
        else if (b) yield a
    }
})

// FxJS/Lazy/takeL.js
export default curry(function* takeL(l, iter){
    if (l < 1) return
    let prev = null
    for (const a of toIter(iter)) {
        if (a instanceof Promise) {
            a.catch(noop)
            yield prev = (prev || Promise.resolve())
                .then(_ => a)
                .then(a => --l > -1 ? a : Promise.reject(nop))
            prev = prev.catch(noop)
        } else {
            yield (--l, a)
        }
        if (!l) break
    }
})