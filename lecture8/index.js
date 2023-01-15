/**
 * methods에 type alias 지정하는 법
 */
// 함수 type alias를 부착하려면
// 함수 표현식을 써야 한다.
var myFunc3 = function () {
    // 함수 표현식에만 type alias가능
    return 3;
};
myFunc3("3");
// myFunc3(3);
// Object안에 함수를 만들 수 있음!
var memberInfo = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changNAme: function (name) {
        return name + " to new name";
    },
};
memberInfo.plusOne(2);
var ABC = function (x, y) {
    return x + y;
};
var memberInfo1 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (name) {
        console.log(name + " to new name");
    },
};
var cutZero = function (inputString) {
    // 이것도 가능
    // let result = x.replace(/^0+/, "");
    // return result
    if (inputString.substring(0, 1) === "0") {
        return inputString.substring(1, inputString.length + 1);
    }
    else {
        return inputString;
    }
};
var removeDash = function (inputString) {
    return parseInt(inputString.split("-").join()); // x.replace(/-/g, ""); 이것도 가능
};
// 숙제 3
var homework3Function = function (userNum, cutZero, removeDash) {
    // 1.
    var first_result = cutZero(userNum);
    // 2.
    var second_result = removeDash(first_result);
    // 3.
    console.log(second_result);
};
