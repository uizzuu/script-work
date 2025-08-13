// 1) 기본적인 콜백 함수
console.log('1) 기본적인 콜백 함수')

function greet(name, callback){
  console.log(`안녕하세요~ ${name}입니다.`);
  callback(); // 나중에 실행될 함수
}

function afterGreeting(){
  console.log('행복한 하루 되세요~!');
}

greet('장원영', afterGreeting);

// 2) 익명함수로 콜백 전달하기
console.log('2) 익명함수로 콜백 전달하기')

// 익명함수 : 이름을 갖지 않는 함수
const processInput = (name, callback) => {
  console.log('입력한 이름 : ', name)
  callback(name);
}

processInput('안유진', x => console.log(`${x}님 환영합니다.`));
