/**
 * 94p-1
 */

const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")

const a = [1, 2, 3, 4, 5, 6, 7, 8]
const ret = _.go( // 1번)
    a,
    _.map(a => a), // 2번)
    _.filter(a => a % 2), // 3번)
    _.take(2) // 4번)
)
console.log(ret) // [1, 3]

const ret_lazy = _.go(
    a,
    L.map(a => a),
    L.filter(a => a % 2),
    L.take(2)
)
console.log([...ret_lazy]) // [1, 3]