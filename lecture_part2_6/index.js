"use strict";
/**
 * typescript에서도 다른 파일의 타입들을 가져다 쓸 수 있다!
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// a.ts에 있는걸 index.ts에서 가져다 쓰려고 한다!
var a_1 = require("./a");
console.log(a_1.name_2_6);
var 변수 = "park";
var 변수2 = "park";
console.log(변수2);
var myCar2_6 = {
    wheel: 4,
    model: "test",
};
var dog1 = "bark";
var dog2 = { name: "paw" };
