/**
 * 타입을 미리 정하기 애매할 때 (union type, any, unknown)
 */
// 문자 or 숫자가 들어오는 변수?
// Union Type
let member: number | string = 123;

// 숫자 or 문자가 가능한 array 타입지정?
let membersList: (string | number)[] = [1, "2", 3, "4"];

// 숫자 or 문자가 가능한 object 타입지정?
let thisObject2: {
  a: string | number; // a의 값으로 문자나 숫자가 가능
} = {
  a: "123",
};

let thisisAny: any; // any타입 -> 모든 자료형 허용 가능
thisisAny = 123;
thisisAny = [];
// 하지만 any타입을 쓰면 TS를 쓰는 의미가 없으니...웬만하면 쓰지 말라

// unknown타입이 any랑 비슷함.
let thisisUnknown: unknown;
thisisUnknown = 123;
thisisUnknown = {};
// any타입보단 조금 더 안전함

// 에러가 남! string만 들어갈 수 있기 때문
// let 변수1: string = thisisUnknown;

// 이건 에러가 안남! any타입이니까 어떤 변수든 될 수 있는 것. 그래서 unknown타입이 오염을 좀더 방지해주고 안전함
let 변수2: string = thisisAny;

let thisisUnknown2: unknown;
// thisisUnknown2 - 1; // unknown타입은 뺄셈이 불가!

// 타입스크립트는 간단한 수학 연산도 타입이 맞아야 함.
// 타입을 엄격하게 지켜야 한다.

let 나이: string | number;
// 나이 + 1; // 타입이 엄격해야 하기 때문에 나이라는 변수는 문자열이 들어갈 수도 있기 때문에 해당 연산은 금지

let 언노운: unknown = 1;
// 언노운 - 1; // 미리 타입검사를 했더니 숫자가 아니라 언노운임. 그래서 안됨! 숫자가 들어가도 언노운 타입이니까.

// 문제
var 어레이: (number | string)[] = [1, "2", 3];
var 오브젝트: { data: number | string } = { data: "123" };

let user: string = "kim";
let age5: undefined | number = undefined;
let married2: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
