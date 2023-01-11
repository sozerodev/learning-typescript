/**
 * Typescript필수문법 10분 정리와 설치 셋팅
 */
var someName = "kim";
var nameList = ["kim", "park"];
var thisObject = {
    name: "kim",
    test1: 3,
    test2: "wow",
};
// 다양한 타입이 들어오려면? Union Type
var severalType = "kim"; // 문자열이나 숫자
severalType = 3;
severalType = ["1", "2", "3"];
var thisType = "test";
thisType = 4;
// 함수를 만들 때도 타입 지정 가능 (파라미터도, 리턴도 타입 지정 가능)
function myFunc(x) {
    return x * 2;
}
var james = [123, true];
var kasadian = {
    name: "kim",
    test: 3,
};
// 클래스도 마찬가지
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
