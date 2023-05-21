/**
 * array 자료에 붙일 수 있는 tuple type
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
// array에 타입 넣는 법 (union)
var 멍멍 = ["dog", true];
// 위에보다 좀더 엄격하게 (tuple type)
// 첫번째 자료는 무조건 string, 두번째 자료는 무조건 boolean
var 멍멍2 = ["dog", true];
// tuple에 옵션표시도 가능 (? 는 들어올 수도 있고 안들어올 수도 있고,,,)
var 멍멍3 = ["dog"];
// 단... 옵션 ?  는 무조건 맨 뒤에만 칠 수 있다. 두개 이상도 가능하나 항상 뒤에서부터 시작돼야 한다.
// let 멍멍3: [string, boolean?, number] = ["dog"];
// rest parameter
// 파라미터가 몇개가 들어올 지 모를 때 갖다 쓰는 것
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수(1, 2, 3, 4, 6, 3, 5); // rest parameter로 받으니 내가 원하는만큼 파라미터를 넣을 수 있다.
// rest parameter 타입 지정 시 tuple 가능
function 함수2_7_2() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수2_7_2(1, "2", 3, true);
함수2_7_2(1, "2", 3, true, 3);
// array를 합칠 때...
var arr2_10 = [1, 2, 3];
var arr2_10_2 = __spreadArray([4, 5], arr2_10, true); // spread연산자는 괄호를 벗기라는 의미를 가짐.
console.log(arr2_10_2); // [ 4, 5, 1, 2, 3 ]
// 숙제 1.
var myFood = ["초밥", 12000, true];
// 숙제 2.
var arr_homework = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
// 숙제 3.
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
function 함수_homework3() {
    var parameter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameter[_i] = arguments[_i];
    }
}
함수_homework3("a", true, 6, 3, "1", 4);
// 숙제 4.
function homework_4() {
    // parameter의 타입별로 리턴
    var parameter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameter[_i] = arguments[_i];
    }
    var result = [[], []];
    parameter.forEach(function (element) {
        if (typeof element == "string") {
            result[0].push(element);
        }
        else {
            result[1].push(element);
        }
    });
    return result;
}
