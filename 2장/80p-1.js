/**
 * 80p-1
 */

const async1 = param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2)
    })
}
const async2 = param => {
    return new Promise((resolve, reject) =>{
        throw "에러"
        resolve(param * 2)
    })
}
async1(1)
.then(async2)
.then(result => {
    console.log(result) // 4
}, reason => {
    console.log(`이 Promise는 이 ${reason}으로 종료가 되었습니다.`)
})