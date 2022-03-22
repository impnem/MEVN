/**
 * 73p-1
 */

//Callback의 예 : 따라치지 마세요. 눈으로만 보세요.
$.get("네이버", function (res) {
    console.log("네이버로부터 받은 사랑")
    $.get("카카오", function (res) {
        console.log("카카오로부터 받은 사랑")
    })
})