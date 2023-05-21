// export var ts_value = 10;

// ts파일을 ambient모듈이 아니라 로컬 모듈로 만드는 방법은..
// import export 있으면 자동으로 로컬모듈이 된다.
export {}; // 이게 있으면 무조건 로컬 모듈이 된다.

// 근데 갑자기 글로별 변수를 만들고 싶어졌다면?
// export{} 가 있어서 글로벌이 아닌 로컬모듈이 된 파일에서
// declare global{} 을 쓰면 해당 변수만 글로벌로 사용이 가능해진다.
declare global {
  type Dog = string;
}

var ts_value2 = 11;
