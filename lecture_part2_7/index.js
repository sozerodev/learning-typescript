/**
 * 타입을 파라미터로 입력하는 Generic
 */
// 함수에 타입도 파라미터로 입력 가능
// <> 로 타입을 파라미터로 입력받음. 타입만 입력 가능!
function 함수2_7_1(x) {
    return x[0];
}
var a = 함수2_7_1([4, 2]);
console.log(a);
// -------------------------------
function 함수2(x) {
    return x[0];
}
var b = 함수2([4, 2]);
console.log(a);
// -------------------------------
function 함수3(x) {
    return x[0];
}
var c = 함수3([4, "2"]);
console.log(a);
// -------------------------------
function 함수4(x) {
    return x[0];
}
var d = 함수4(["4", "2"]);
var e = 함수4([4, 2]);
console.log(a);
// -------------------------------
// 타입파라미터 제한두기
function 함수5(x) {
    // MyType이 number의 속성을 가지는지 확인한다. 복사가 아니라 체크개념으로 보면 됨.
    // 오른쪽엔 커스텀 타입으로도 타입파라미터 제한이 가능하다.
    return x - 1;
}
function 함수6(x) {
    // MyType이 number의 속성을 가지는지 확인한다. 복사가 아니라 체크개념으로 보면 됨.
    // 오른쪽엔 커스텀 타입으로도 타입파라미터 제한이 가능하다.
    return x.length;
}
var f = 함수5(100);
var f2 = 함수6(["100"]);
// 숙제1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
function homework2_7_1(parameter) {
    return parameter.length;
}
var data = '{"name" : "dog", "age" : 1 }';
function homework2(x) {
    return JSON.parse(x);
}
var result = homework2(data);
console.log(result);
// 숙제 3.
var Person2_7 = /** @class */ (function () {
    function Person2_7(a) {
        this.name = a;
    }
    return Person2_7;
}());
var a2 = new Person2_7("어쩌구");
console.log(a2.name); //any 타입이 되었넹
