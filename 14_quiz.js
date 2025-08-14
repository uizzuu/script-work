const k_group = [
  {
    group : 'ive',
    name : ['장원영','안유진', '이서'],
    count : 5
  },
  {
    group : '에스파',
    name : ['카리나', '윈터','지젤','닝닝'],
    count : 4
  },
  {
    group : '케플러',
    name : ['최유진', '샤오팅','마시로'],
    count : 9
  },
]

// 0) 깊은 복사
// 위 내용을 group_copy 라는 이름으로 깊은 복사해서 
console.log('\n===============================================================')
console.log('0) 깊은 복사');

let group_copy = [...k_group];
console.log(group_copy);


/* 1-1) 데이터 추가: 브레이브걸스 */
// 1-1. 데이터 추가 (group : 브레이브걸스, name : 유나, 유정, 민영, count : 3)
console.log('\n===============================================================')
console.log('1-1) 데이터 추가: 브레이브걸스');

const braveGirls = {
  group : '브레이브걸스',
  name : ['유나', '유정', '민영'],
  count : 3
};

group_copy.push(braveGirls);
console.log(group_copy);


/* 1-2) 데이터를 맨 앞에 추가: 블랙핑크 */
// 1-2. 데이터를 맨 앞에 추가 (group : 블랙핑크, name : 제니, 리사, 로제, 지수 count : 4)
console.log('\n===============================================================')
console.log('1-2) 데이터 맨 앞 추가: 블랙핑크')

const blakPink = {
  group : '블랙핑크',
  name : ['제니', '리사', '로제', '지수'],
  count : 4
};

group_copy.unshift(blakPink);
console.log(group_copy);

/* 2-1) 데이터 삭제: 블랙핑크 삭제 */
// 2-1) 데이터 삭제: 블랙핑크 삭제
console.log('\n===============================================================')
console.log('2-1) 데이터 삭제: 블랙핑크 삭제')

group_copy.splice(0, 1);
console.log(group_copy);


/* 2-2) 데이터 삭제: 케플러 삭제 */
// 2-2. 데이터 삭제 : 케플러 삭제
console.log('\n===============================================================')
console.log('2) 데이터 삭제: 케플러 삭제')

group_copy.splice(3, 1);
console.log(group_copy);


/* 3) 데이터 수정: ive의 "이서" -> "가을" */
// 3. 데이터 수정 : group ive의 name 중 이서를 가을로 수정
console.log('\n===============================================================')
console.log('3) 데이터 수정: ive의 "이서" -> "가을"')

group_copy[0].name[2] = '가을';
console.log(group_copy);


/* 4) group 오름차순 정렬 (단순 문자 비교) */
// 4. group으로 오름차순 정렬
console.log('\n===============================================================')
console.log('4) group 오름차순');

group_copy.map((a, b) => {
  a.group > b.group? 1 : -1;
})
console.log(group_copy);

/* 5) group 내림차순 정렬 (단순 문자 비교) */
// 5. group으로 내림차순 정렬
console.log('\n===============================================================')
console.log('5) group 내림차순');

group_copy.map((a, b) => {
  a.group < b.group? 1 : -1;
})
console.log(group_copy);


/* 6) 각 group의 name 오름차순 정렬 (단순 문자 비교) */
// 6. 각 group name의 오름차순 정렬
console.log('\n===============================================================')
console.log('6) 각 group name 오름차순 정렬 반영된 group_copy');

group_copy.forEach(group => {
  group.name.sort((a, b) => {
  return a > b? 1 : -1;
  });
});
// group_copy.forEach(group => {
//   group.name.sort((a, b) => a.localeCompare(b));
// });
console.log(group_copy);

/* 7) name으로 검색: "카리나" */
/* 7. name으로 검색 : 카리나를 변수로
- group : 에스파, 멤버수 : 4
출력 */
console.log('\n===============================================================')
console.log('7) name으로 검색')

const findKarina = group_copy.find(group =>  group.name.includes('카리나'));
console.log(`group : ${findKarina.group}, 멤버수 : ${findKarina.count}`);


/* 8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력 */
/* 8. 에스파의 name 정보를
- 에스파 카리나
- 에스파 윈터
- 에스파 지젤
- 에스파 닝닝 */
console.log('\n===============================================================')
console.log('8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력');

group_copy[1].name.forEach(x => {
  console.log(`에스파 ${x}`);
});