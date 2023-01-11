/**
 * 타입스크립트 기본 타입 정리(primitive types)
 */
var thisName = "kim";
var age = 50;
var married = true;
// 크게 쓸데는 없고 걍 가능은 함
var isNull = null;
var isDefined = undefined;
// array자료에 타입 지정 가능
var members = ["kim", "park"];
var members2 = ["kim", 3, true];
// 변수 하나에 여러 자료 집어넣고 싶으면 object자료형을 써도 가능
var members3 = {
    member1: "kim",
    member2: "park",
};
// Question1
var whatMyName = "so";
var whatMyAge = 30;
var whereBorn = "U";
// Question2
var musicInfo = {
    title: "anything",
    singer: "anywhom",
};
// Question3
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
