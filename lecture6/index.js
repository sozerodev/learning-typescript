/**
 * 타입도 변수에 담아 쓰기
 * type키워드를 써서 & readonly
 */
var animal;
animal = "kim";
animal = 9;
animal = undefined;
var animal2 = {
    name: "kim",
    age: 3,
};
// type변수 작명 관습
// 영어 대문자로 시작해야 함. 일반 변수랑 차별을 둬야 하니까
// 뒤에 type을 붙여줘도 좋음
// typescript를 쓰면 object자료의 수정도 막을 수 있음
var anythingPerson = {
    name: "amber",
};
// 바뀔 수 있으나..
anythingPerson.name = "jane";
var anythingPerson2 = {
    name: "amber",
    age: 3,
};
// type NewPosition = PositionX & {y: number} // 요런 식도 가능함
var position = {
    x: 3,
    y: 6,
};
var position2 = {
    x: 4,
    y: 3,
};
var myList;
// myList = ["a", "c"];
myList = ["a"];
myList = ["b"];
var myType2;
myType2 = "a";
myType2 = "b";
myType2 = "c";
