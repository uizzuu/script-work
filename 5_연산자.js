// 1) 산술연산자: + , - , * , /, %
console.log(1 + 1);
console.log(10 % 3);

// 2) 증감연산자
let number = 1;
number ++;
let sum = 0;
sum += number;  // sum = sum + number;
console.log(number, sum)

--sum;  // 이런건 안씁니다.
// sum ++, sum --
console.log('===================');
// 연산자로 타입을 변경
let sample = '99';
console.log(typeof sample)
console.log(+sample);
console.log(typeof +sample);

console.log('===================');
// true : 1, false : 0 으로...
sample = true;
console.log(typeof sample)
console.log(+sample);
console.log(typeof +sample);

console.log('===================');
sample = '안유진';
console.log(typeof sample)
// NaN : Not a Number
console.log(+sample)

console.log('===================');
// 비교연산자
console.log(5 == 5);
// 자바스크립트는 1만 true, 나머지는 false
console.log(2 == true)
console.log(0 == false)
console.log('===================');
// === : 값과 타입을 동시에 비교
console.log(0 == false)
console.log(0 === false)

// 관계연산 : >, <, >=, <=, !=, !==
// 삼항연산
console.log(10>0? '크다' : '작다');
// 논리연산자 : && (and), || (or)
console.log('===================');
console.log('단축평가 - 실무서 많이 씀');
console.log(true || '아이브')
console.log(false || '아이브')

console.log(true && '아이브')
console.log(false && '아이브')

console.log('===================');
console.log(true && true && '아이브');
console.log(true && false && '아이브');

// 지수연산자 : ** 
console.log(2**10);

// null 연산자
console.log('===================');
let value;
console.log(value)
// value 값이 undefined or null 이면 뒤에 값을 할당
value = value??'장원영'
console.log(value)

value = value && '아이브'
console.log(value)