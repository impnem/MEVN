/**
 * 73p-2
 */

const job_1 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(1)
        job_2()
    }, b)
}
const job_2 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(2)
        job_3()
    }, b)
}
const job_3 = () => {
    const b = Math.random() * 100
    setTimeout(() => {
        console.log(3)
    }, b)
}
job_1()
/*
1
2
3
*/