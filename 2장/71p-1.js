/**
 * 71p-1
 */

class Queue{
    constructor(){
        this.a = []
    }
    front(){
        if(this.a.length === 0){
            console.log("큐가 비었습니다. ")
            return
        }else return this.a[0]
    }
    enqueue(value){
        this.a.push(value) // 뒤에서부터 요소가 추가됨 
    }
    dequeue(){
        if(this.a.length === 0){
            console.log("큐가 비었습니다. ")
            return
        }
        this.a.shift() // 첫번째 요소를 제거하고 제거된 요소를 반환함
    }
}
const q = new Queue()
q.enqueue(1)    // 1 추가
q.enqueue(2)    // 그뒤에 2 추가
q.enqueue(3)    // 그뒤에 3 추가
q.enqueue(4)    // 그뒤에 4 추가
for(let i = 0; i < 4; i++){
    console.log(q.front())
    q.dequeue() // 첫번째 요소인 1부터 큐에서 제거 후 반환함.
}
/*
1
2
3
4
*/