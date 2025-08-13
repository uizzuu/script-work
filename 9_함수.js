// 1) 단일함수의 사용
console.log('1) 단일함수의 사용');

// 단순히 함수를 정의
function calculate(number){
  console.log(number * 100);
  return true;
}
// 함수 호출
calculate(3);
console.log(calculate(4));

// 2) 여러개의 파라미터 사용
console.log('2) 여러개의 파라미터 사용');

// add라는 함수를 선언하고 
// 두 수 x,y를 받아서 더한 결과를 리턴하는 함수 작성
function add(x, y){
  return x + y;
}

let result = add(3,4);
console.log(result);

// 3) default 파라미터 사용
console.log('3) default 파라미터 사용');

function minus(x, y = 1){
  return x - y;
}
console.log(minus(3));
console.log(minus(3, 2));

// 4) 화살표 함수
console.log('4) 화살표 함수');

const multiply = function(x, y) {
  return x * y;
}
console.log(multiply(3, 4));

// 4-1) 함수의 간편 표기법
console.log('4-1) 함수의 간편 표기법');

const divide1 = function(x, y){
  return x / y;
}
const divide2 = (x, y) => x / y;
console.log(divide2(6, 2));

// 4-2) 인자가 1개일 때
console.log('4-2) 인자가 1개일 때');

// 제곱을 하는 함수
const power = x => x * x;
console.log(power(9));


// 5) 즉시 실행함수
console.log('5) 즉시 실행함수');

// 어떤 기능을 수행하는데 
// 함수를 정의함과 동시에 실행해야 하는 경우

// 나머지를 구하는 함수 
(function mod(x, y){
  console.log(x % y);
})(7, 3)

// 6) 함수의 연습
console.log('6) 함수의 연습');
// 두 수를 입력받아
// 두 수 사이의 짝수값만 더해서 결과를 리턴하는 함수
// 화살표 함수를 이용
const myFunction = (x, y) => {
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  let sum = 0;
  for(let i = min; i <= max; i++){
    if(i % 2 == 0){ 
      sum = sum + i;
    }
  }
  return sum;
}
console.log(myFunction(3, 9));

const myFunction2 = (x, y) => {
  // 두 변수를 비교해서 y가 크면 두 수를 바꾼다
  // if(x > y){
  //   let temp = x;
  //   x = y;
  //   y = temp;
  // }
  if(x > y) [x, y] = [y, x];
  // for loop 돌리면서 짝수만 계산
  let sum = 0;
  for(let i = x; i <= y; i++){
    if(i % 2 == 0) sum += i; 
  }
  return sum;
}
console.log(myFunction2(7,3));