/**
 * 75p-1
 */

//Promise를 이용한 예
const a = (c = "네이버") => {
    return new Promise((resolve, reject) => {
        //비동기 함수로직
        setTimeout(() => {
            resolve(`${c}로부터 받은 사랑`)
        }, 1 * 1000)
    })
}
a().then(ret => {
    console.log(ret)
    return a (`카카오`)
}).then(ret => {
    console.log(ret)
    return a (`야후`)
}).then(ret => {
    console.log(ret)
})