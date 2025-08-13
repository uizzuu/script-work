let number = 5;
// number가 짝수면 '짝수입니다.' 출력
// '홀수입니다.' 출력
if(number % 2 == 0){
  console.log('짝수입니다.')
}else{
  console.log('홀수입니다.')
}

// number 값이 2의 배수, 3의 배수, 4의 배수, 5의 배수인지
// 확인하고, 출력
// 그렇지 않으면 '2,3,4,5의 배수가 아니에요'
if(number % 5 == 0){
  console.log('5의 배수')
} else if(number % 4 == 0){
  console.log('4의 배수')
} else if(number % 3 == 0){
  console.log('3의 배수')
} else if(number % 2 == 0){
  console.log('2의 배수')
} else {
  console.log('2,3,4,5의 배수가 아니에요')
}
// switch 구문
// gender : 1 => 남자 출력
// gender : 2 => 여자 출력
// gender : 3 => 혼성 출력
// gender : 이외 값 => 모름 출력
let gender = 2;
switch (gender) {
  case 1:
    console.log('남자');
    break;
  case 2:
    console.log('여자');
    break;
  case 3:
    console.log('혼성');
    break;
  default:
    console.log('모름');
    break;
}