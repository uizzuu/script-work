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
// 에스파 그룹의 팀원출력
console.log(k_group[1].name)
// 에스파 그룹의 인원수 출력
console.log(k_group[1].count)

// 문제 1. group 이름을 for 구문으로 출력
// ive
// 에스파
// 케플러

// 문제 2. 각 그룹 이름 출력 후
//    멤버의 이름을 출력

for(let x in k_group){
  console.log(k_group[x].group)
}

// 1. 그룹명 : ive
// ive 멤버 : 장원영, 안유진, 이서

// 2. 에스파
// 에스파 멤버 : 카리나, 윈터, 지젤 , 닝닝

// 3. 케플러
// 케플러 멤버 : 최유진, 샤오팅, 마시로

console.log("=====================")
for(let x in k_group){
  let group = k_group[x].group;
  let member = ''
  console.log(`${+x +1}. 그룹명 : ${group}`)
  for(let y of k_group[x].name){
    member = member + y + ' '
  }
  console.log(`${group} 멤버 : ${member}`)
}
 