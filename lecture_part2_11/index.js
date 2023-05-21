/**
 *
 *  js에 있는 변수를 .ts에서 그냥 이용하고 싶다면..?
 *  일반 html, css, js개발 할 때 처럼 그냥
 *  html파일에서
 * <script src ="data.js"></script>    <-- 여기 있던 변수 함수는
 * <script src ="index.js"></script>   <-- 여기서도 사용이 가능
 *
 * 로 해놓고 사용하면 된다..
 *
 */
// 다른 ts파일의 변수를 가져다 쓰고 싶으면 import export를 써야져
// import { ts_value } from "./data2";
// 근데..ts가 이상한 특징이 있는데.. 바로
// 모든 ts파일은 ambient module (글로벌 모듈)이 된다는 것...,
// 그래서 ts파일끼리는 사실 import, export가 없어도 다른 파일에 있던 var ts_value2를 쓸 수 있음
// 따라서 다른 파일에서 만든 모든 변수가 전역이 되어버린다는 것임.
// console.log(ts_value2 + 3);
// ts파일을 ambient모듈이 아니라 로컬 모듈로 만드는 방법은..
// import export 있으면 자동으로 로컬모듈이 된다.
var b_2_11 = "kim";
console.log("test");
console.log(a_2_11 + 1);
