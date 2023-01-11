/**
 * Typescript필수문법 10분 정리와 설치 셋팅
 */
let someName: string = "kim";
let nameList: string[] = ["kim", "park"];

let thisObject: {
  name: string;
  test1: number;
  test2?: string; // ?는 name속성이 들어올 수도 있고 아닐 수도 있고를 의미함
} = {
  name: "kim",
  test1: 3,
  test2: "wow",
};

// 다양한 타입이 들어오려면? Union Type
let severalType: string | number | string[] = "kim"; // 문자열이나 숫자
severalType = 3;
severalType = ["1", "2", "3"];

// 타입 지정하는 문법이 길다면 변수에 넣어 쓸 수도 있다. (타입은 보통 대문자로 시작)
type MyType = string | number;
let thisType: MyType = "test";
thisType = 4;

// 함수를 만들 때도 타입 지정 가능 (파라미터도, 리턴도 타입 지정 가능)
function myFunc(x: number): number {
  return x * 2;
}

// array자리에도 지정이 가능
type Member = [number, boolean]; // 튜플 타입
let james: Member = [123, true];

// object에 타입지정해야 할 속성이 너무 많으면?
type ObjectMember = {
  name: string;
  test?: number;
};

let kasadian: ObjectMember = {
  name: "kim",
  test: 3,
};

// Object에 타입 지정해야 할 속성이 너무 많으면?
type ObjectMember2 = {
  [key: string]: string; // 문자로 들어오는 속성들은 모두 문자열
};

// 클래스도 마찬가지
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
