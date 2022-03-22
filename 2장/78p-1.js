/**
 * 78p-1
 */

//Promise의 에러 처리
const a = (c = "네이버") => {
    return new Promise((resolve, reject) => {
        //비동기 함수로직
        throw new Error("[큰돌에러]")
        reject(new Error("[큰돌에러]"))
        reject("[큰돌에러]")
        setTimeout(() => {
            resolve(`${c}로부터 받은 사랑`)
        }, 1 * 1000)
    })
}

a().then(ret => {
    return a(`카카오`)
}).then(ret => {
    console.log(ret)
}).catch(e => {
    console.log(`${e}라는 에러가 발생했어..!`)
})
// Error: [큰돌에러]라는 에러가 발생했어..!