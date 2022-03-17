/**
 * 54p-1
 */

function arrow(){
    setTimeout(() => {      // 일정 시간이 지난 후에 함수를 실행 - 시간 지연 함수
        console.log(this)   // arrow {}
    }, 1000)                // 1000밀리초 = 1초
}

function not_arrow(){
    setTimeout(function(){
        console.log(this) // Node.js에서는 Timeout || 브라우저에서는 Window
    }, 1000)
}
const p1 = new not_arrow()
const p2 = new arrow()
