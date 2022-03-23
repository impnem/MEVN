/**
 * 90p-2
 */

const log = console.log
function *map(f, list){
    for(const a of list){
        yield f(a)
        //return f(a)
    }
}
const add = a => a + 10
const a = [1, 2, 3]
const customGenerator = map(add, a)
log(customGenerator.next())
log(`어떤 로직 1`)
log(customGenerator.next())
log(`어떤 로직 2`)
log(customGenerator.next())
/*
{ value: 11, done: false }
어떤 로직 1
{ value: 12, done: false }
어떤 로직 2
{ value: 13, done: false }
*/