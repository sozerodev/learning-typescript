/**
 * Literal Types로 만드는 const 변수 유사품
 */

// 더 엄격한 타입 지정 가능
// 이런 문자만 들어올 수 있다! (Literal types)

let myName: "kim"; // 이 변수에는 'kim'만 들어올 수 있음

myName = "kim";
// myName = "lee";

let itisme: "대머리" | "솔로";
itisme = "대머리";
itisme = "솔로";
// itisme = '머털';

function myFunc2_2(a: "hello"): 1 | 0 {
  //   return 3;
  return 1;

  // return 되는 요소도 제한 가능
}

myFunc2_2("hello");
// myFunc("hello0");
// 함수 파라미터에 들어올만한 요소를 제한할 수도 있다.

function playGame(hand: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  let result: ("가위" | "바위" | "보")[];

  result = ["가위", "바위"];

  return result;
}

// Literal type은 const변수와 유사하게 사용이 가능
// 자료를 여러개 쓸 수 있는 const변수의 업그레이드 느낌
let literalTypeVar: "1" | "2";

// literalTypeVar = "3";

// Literal Type의 문제점
var 자료 = {
  name: "kim",
};

function 내함수(a: "kim") {
  // 여기 a는
  // kim이라는 자료만 들어올 수 있다 (X)
  // kim이라는 타입만 들어올 수 있다 (O)
}
내함수("kim"); // 여기 파라미터로는 kim으로 고정된 것
// 내함수(자료.name); //Argument of type 'string' is not assignable to parameter of type '"kim"'.

// 자료.name의 타입은 kim이 아닌 string임.
// a에 들어갈 수 있는 건 string이 아닌 kim임

// 해결책1.
// var 자료 = ({ name: "kim" } = {
//   name: "kim",
// });
// 이런 식으로 지정을 해주든지

// 해결책 2. assertion 사용
내함수(자료.name as "kim");

// 해결책 3.
// as const   사용
// literal type을 알아서 지정해줌
// 1. object value값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌
var 자료2 = {
  name: "kim",
} as const;
