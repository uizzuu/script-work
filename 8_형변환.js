// 명시적 형변환 (함수를 이용해서 변환)
let age = 22;
let strAge = age.toString();
console.log("age : " + typeof age);
console.log("strAge : " + typeof strAge);

// 암묵적(묵시적) 형변환
console.log("+strAge : " + typeof +strAge);

// 문자를 숫자로 명시적 형변환
let strNumber = '99';
console.log("strNumber : " + typeof strNumber);
let number = parseInt(strNumber);
console.log("number : " + typeof number);