console.log(name)
// ReferenceError: name is not defined
var name = '홍길동'
console.log(name)
// let과 const도 hoisting 이 된다.
console.log(jang);
// ReferenceError: jang is not defined
const jang = '장원영';