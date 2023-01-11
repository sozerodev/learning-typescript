/**
 * 타입스크립트 기본 타입 정리(primitive types)
 */
let thisName: string = "kim";

let age: number = 50;

let married: boolean = true;

// 크게 쓸데는 없고 걍 가능은 함
let isNull: null = null;
let isDefined: undefined = undefined;

// array자료에 타입 지정 가능
let members: string[] = ["kim", "park"];
let members2: [string, number, boolean] = ["kim", 3, true];

// 변수 하나에 여러 자료 집어넣고 싶으면 object자료형을 써도 가능
let members3: {
  member1: string;
  member2: string;
} = {
  member1: "kim",
  member2: "park",
};

// Question1
let whatMyName: string = "so";
let whatMyAge: number = 30;
let whereBorn: string = "U";

// Question2
const musicInfo: {
  title: string;
  singer: string;
} = {
  title: "anything",
  singer: "anywhom",
};

// Question3
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
