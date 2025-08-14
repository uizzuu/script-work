console.log('<원본 수정 하는 함수>')

let iveMember = [
  '장원영',
  '안유진',
  '리즈'
];
console.log('<for ~ of>');
for(let x of iveMember){
  console.log(x);
}

// array에서 사용되는 함수 : 원본을 수정
// 1) push() : array 맨 끝에 추가
console.log('\n1) push()');
iveMember.push('가을');
console.log(iveMember.push('이서'));
console.log(iveMember);

// 2) pop() : array에서 맨 마지막자료 삭제
console.log('\n2) pop()');
let removeMember = iveMember.pop();
console.log(removeMember);
console.log(iveMember);

// 3) unshift() : array 맨 앞에 추가
console.log('\n3) unshift()');
iveMember.unshift('레이');
console.log(iveMember);

// 4) shift() : array 맨 앞자료 삭제
console.log('\n4) shift()');
let deleteMember = iveMember.shift();
console.log(deleteMember);
console.log(iveMember);

// 5) splice(시작위치, 몇개) : 중간부터 삭제 가능
console.log('\n5) splice(시작위치, 몇개)');
iveMember.splice(2, 2);
console.log(iveMember);

// 리셋
let ive = [
  '장원영',
  '안유진',
  '리즈',
  '가을'
];

console.log('\n==========================================');
console.log('<원본 수정 안하는 함수>');

// 6) concat() : 새 아이템을 뒤에 삽입
console.log('\n6) concat()');
console.log(ive.concat('이서'));
console.log(ive);

// 7) slice(어디부터, 어디까지) : 검색
// 끝 위치 : 어디까지 - 1
// ive.slice(0,3) : 0~2까지 검색
console.log('\n7) slice(어디부터, 어디까지)');
console.log(ive.slice(0,3));
console.log(ive);

// 8) spread operator : ★중요★ 
// 배열의 내용을 펼쳐서 처리
// 하드카피 할 때 많이 사용
console.log('\n8) spread operator');


console.log('(8-1) 얕은 복사');
// 얕은 복사 (주소 공유) - 원본 훼손됨
let ive2 = ive; 
console.log(`ive : ${ive}`);
console.log(`ive2 : ${ive2}`);
// ive2만 앞에 홍길동 추가하기 - 불가
ive2.unshift('홍길동');
console.log(`ive : ${ive}`);
console.log(`ive2 : ${ive2}`);

// 하드 카피 (주소 공유하지 않음)
console.log('(8-2) 배열 또는 오브젝트 하드카피');
let ive3 = [...ive];
ive3.unshift('이순신');
console.log(`ive : ${ive}`);
console.log(`ive3 : ${ive3}`);

let obj = {name : '아무개'};
let obj2 = {...obj};

// 9) join()함수
// 배열 내 자료를 ,(콤마)로 구분한 후 문자열로 반환
// ive를 iveMembers로 하드카피
console.log('\n9) join()함수');

let iveMembers = [...ive];
console.log(iveMembers.join(' | '));

// 10) sort() - 정렬하기
// 원본을 수정함, 항상 사본을 만들어서 사용해야한다.
// 정렬방식 : 숫자, 문자 모두 문자로 변환하여 utf-8(유니코드)로 비교
// 그래서 숫자 정렬 시 문제 & 언어마다 정렬방식 다른 것 적용x
console.log('\n10) sort() - 정렬하기');

let sortIve = [...ive];
sortIve.sort();
console.log(sortIve);

// 11) reverse() - 역순정렬하기
// 원본수정함
console.log('\n11) reverse() - 역순정렬하기');

sortIve.reverse();
console.log(sortIve);

// 12) sort() 함수로 오름차순, 내림차순 정렬
console.log('\n12) sort() 함수로 오름차순, 내림차순 정렬');

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);
// numbers.sort();
// console.log(numbers);

// 반환값 규칙
// 삼항연산으로
// 양수(1) : a가 b 뒤로 가야함
// 음수(-1) : a가 b 앞으로 가야함
// 0 : 현재 순서 유지

// 오름차순 정렬
numbers.sort((a, b) => {
  return a > b? 1: -1;
})
console.log(numbers);
// 내림차순 정렬
numbers.sort((a, b) => {
  return a < b? 1: -1;
})
console.log(numbers);


// 13) 배열 중 기준잡아서 정렬하기
console.log('\n13) 배열 중 기준잡아서 정렬하기');
const k_group = [
  {
    group : '아이브',
    name : ['장원영','안유진', '이서'],
    count : 5
  },
  {
    group : '케플러',
    name : ['최유진', '샤오팅', '마시로'],
    count : 9
  },
  {
    group : '에스파',
    name : ['카리나', '윈터','지젤','닝닝'],
    count : 4
  },
]
console.log(k_group);
let copyGroup = [...k_group];
// 1. 아이브 -> ive
// copyGroup[0].group = 'ive';
// console.log(copyGroup);
// 2. 이서 -> 가을
// copyGroup[0].name[2] = '가을';
// console.log(copyGroup);

// (13-1) 그룹이름으로 오름차순 정렬하기
console.log('\n(13-1) 그룹이름으로 오름차순 정렬하기');

copyGroup.sort((a, b) => {
  return a.group > b.group? 1 : -1;
})
console.log(copyGroup);

// (13-2) 그룹이름으로 내림차순 정렬하기
console.log('\n(13-2) 그룹이름으로 내림차순 정렬하기');

copyGroup.sort((a, b) => {
  return a.group < b.group? 1 : -1;
})
console.log(copyGroup);
