/**
 * methods에 type alias 지정하는 법
 */

// function myFunc3(a: string): number {
//   return 3;
// }

// 함수 type alias
// string을 넣고 number 리턴
// 함수를 만드 ㄹ때 type alias를 지정해서 쓰고 싶다면 () => {}  모양으로
type FunctionType = (a: string) => number;

// 함수 type alias를 부착하려면
// 함수 표현식을 써야 한다.
let myFunc3: FunctionType = function () {
  // 함수 표현식에만 type alias가능
  return 3;
};

myFunc3("3");
// myFunc3(3);

// Object안에 함수를 만들 수 있음!
const memberInfo = {
  name: "kim",
  plusOne: (a: number): number => {
    return a + 1;
  },
  changNAme: (name: string): string => {
    return name + " to new name";
  },
};

memberInfo.plusOne(2);

// 이것도 가능
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

// 숙제1.
type Member1 = {
  name: string;
  plusOne: (a: number) => number;
  changeName: (name: string) => void;
};
const memberInfo1: Member1 = {
  name: "kim",
  plusOne: (a) => {
    return a + 1;
  },
  changeName: (name) => {
    console.log(name + " to new name");
  },
};

// 숙제 2
type first = (inputString: string) => string;
const cutZero: first = (inputString) => {
  // 이것도 가능
  // let result = x.replace(/^0+/, "");
  // return result

  if (inputString.substring(0, 1) === "0") {
    return inputString.substring(1, inputString.length + 1);
  } else {
    return inputString;
  }
};

type second = (inputString: string) => number;
const removeDash: second = (inputString) => {
  return parseInt(inputString.split("-").join()); // x.replace(/-/g, ""); 이것도 가능
};

// 숙제 3
const homework3Function = (
  userNum: string,
  cutZero: first,
  removeDash: second
): void => {
  // 1.
  let first_result = cutZero(userNum);

  // 2.
  let second_result = removeDash(first_result);

  // 3.
  console.log(second_result);
};
