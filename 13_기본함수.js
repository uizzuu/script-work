let ive = [
  '장원영',
  '안유진',
  '리즈',
  '가을'
];

// java의 스트림에서 사용한 함수와 기능이 동일

// 1) map() : ★중요★ 원래 배열을 변형 -> 새로운거 만듦
console.log('\n===========================================')
console.log('1) map()');

console.log(ive.map(x => x));
// 아이브 : 장원영... <- 이런 형식으로 출력
console.log(ive.map(x => `아이브 : ${x}`));
// 아이브 멤버 중에 안유진만 아이브 : 안유진으로 출력
console.log(ive.map(x => {
  if(x == '안유진'){
    return `아이브 :  ${x}`;
  } else{
      return x;
  }
}));

// 리액트에서 반복문 돌리는 유형
// 아이브 각 멤버를 다음의 형식으로 출력 
// 1 : 장원영, 2 : 안유진 ...
ive.map((x, index) => {
  console.log(`${index + 1} : ${x}`);
});


// 2) 필터처리
console.log('\n===========================================')
console.log('2) 필터처리');

numbers = [1, 9, 8, 5, 3];
console.log('=> 짝수만 출력');
console.log(numbers.filter(x => (x % 2 == 0)));


// 3) findIndex() : 해당하는 인덱스 반환
console.log('\n===========================================')
console.log('3) findIndex()');

console.log(ive.findIndex(x => (x == '리즈')) + '번째 인덱스');