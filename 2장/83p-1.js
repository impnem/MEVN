/**
 * 83p-1
 */

const async = (message, ret) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            console.log(new Date())
            resolve(ret)
        }, 2000)
    })
}

const promises = [async("비동기함수1발동", 1), async("비동기함수2발동", 2)]
Promise.all(promises)
.then(data => {
    console.log(data)
})
/*
비동기함수1발동
2022-03-22T12:57:55.905Z
비동기함수2발동
2022-03-22T12:57:55.907Z
[ 1, 2 ]
*/