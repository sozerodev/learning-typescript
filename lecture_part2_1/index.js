/**
 * 함수 rest 파라미터, destructuring할 때 타입 지정
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest parameter?
// 몇 개의 파라미터가 들어올 지 아직 모를 때?
function myFunc1() {
    // ... 을 붙이면 rest parameter임
    // 다른 파라미터 있으면 맨 뒤에만 사용 가능
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    // rest parameter 타입 지정은 어떻게?
    // array 타입 지정 해주듯이 하면 됨
    console.log(a);
}
myFunc1(1, 2, 3);
myFunc1(1, 2, 3, 4);
//----------------------------------
// ... 을 array나 object 뒤에 넣을 수도 있음 (spread operator) - 괄호를 벗겨주세요 문법
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3); // [ 1, 2, 3, 4, 5 ]
// spread와 rest는 다른 문법임
//----------------------------------
// destructuring 개념 설명
// 자료 두 개를 각각의 변수로 빼고 싶다면?
var arr_des = ["안녕", 100];
// let arr_des_0 = arr[0];
// let arr_des_1 = arr[1];
var _a = ["안녕", 100], arr_des_0 = _a[0], arr_des_1 = _a[1];
console.log(arr_des_0); // 안녕
console.log(arr_des_1); // 100
// object자료형도 마찬가지
// let sth = { student: true, age: 20 };
var _b = { student: true, age0: 20 }, student = _b.student, age0 = _b.age0;
// 속성명을 맞춰줘야 함
// 정확히는 이렇게
// let { student: student, age0: age0 } = { student: true, age0: 20 }; // 근데 이름이 같으면 위에처럼 생략 가능
console.log(student); // true
console.log(age0); // 20
// 함수 파라미터에 Destructuring 가능
function myFunc5(a, b) {
    console.log(a, b);
}
myFunc5(1, 2);
// object안에 있던 자료를 파라미터로 집어넣고 싶을 때, 함수 파라미터에 destructuring 가능
var objectParam = { student: true, age0: 20 };
myFunc5(objectParam.student, objectParam.age0);
// 위에 방식이 귀찮다면?
function myFunc5_1(_a) {
    var student = _a.student, age0 = _a.age0;
    console.log(student, age0);
}
myFunc5_1({ student: true, age0: 20 });
myFunc5_1(objectParam);
// 숙제1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수
// 조건1. 넣을 수 있는 숫자 갯수 제한 X, 0이상
// 조건2. Math.max() 사용 금지
function myFunc_sum() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    var max = 0;
    number.forEach(function (value) {
        if (max < value)
            max = value;
    });
    return max;
}
console.log("숙제1", myFunc_sum(1, 2, 8, 4, 3));
// 숙제2.
function myFunc_homework(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
myFunc_homework({ user: "kim", comment: [3, 5, 4], admin: false });
// 숙제3.
function myFunc_homework3(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
myFunc_homework3([40, "wine", false]);
