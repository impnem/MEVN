/**
 * 65p-2
 */

//const d = () => { return {"name" : "최주원", "job" : "마케터"} }
const d = () => ({"name" : "최주원", "job" : "마케터"}) // 1번) 위와 같은 뜻입니다. 둘 중에 하나만을 선택해 쓰면 됨.
const { name } = d()
console.log(name)

const a2 = [1, 2] // 2번)
const [b, c] = a2
console.log(b, c) // 1, 2

const a3 = {"name2" : "큰돌", "노래" : "자취방좋아"} // 3번) 제일 위 예제와 name이 겹쳐서 name2로 변경함.
const { name2, 노래 } = a3
console.log(name2, 노래) // 큰돌, 자취방좋아