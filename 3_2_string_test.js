/*
*** 백틱(`) : 여러줄에 걸쳐서 출력, 백틱으로 감싸서 입력
* 백틱 내에서 변수명의 사용은 ${변수명} 으로 한다.
*/

const myCode = "내가 만든 \t \\코드";
console.log(myCode);
// 문자열 안에 작은 따옴표와 큰 따옴표 처리
const ive = "장원영";
console.log(ive);

// template literal에서 백틱과 변수 사용하기
const groupName = "아이브";
console.log(groupName + "\t" + "장원영");
console.log(`내가 좋아하는 걸그룹은 ${groupName}이고, 좋아하는 아이돌은 ${ive}이랍니다.`);

var group;
