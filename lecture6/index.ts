/**
 * 타입도 변수에 담아 쓰기
 * type키워드를 써서 & readonly
 */

// type alias: type이 너무 길고 복잡하다면 변수에 담아 쓴다

// let animal: string | number | undefined;
type Animal = string | number | undefined;
let animal: Animal;
animal = "kim";
animal = 9;
animal = undefined;

// object형태의 type변수도 가능
type Animal2Type = {
  name: string;
  age: number;
};

let animal2: Animal2Type = {
  name: "kim",
  age: 3,
};

// type변수 작명 관습
// 영어 대문자로 시작해야 함. 일반 변수랑 차별을 둬야 하니까
// 뒤에 type을 붙여줘도 좋음

// typescript를 쓰면 object자료의 수정도 막을 수 있음
const anythingPerson = {
  name: "amber",
};
// 바뀔 수 있으나..
anythingPerson.name = "jane";

// 이름 바꾸기를 막고 싶다면?
type PersonType = {
  readonly name: string; // 읽기 전용이란 뜻. 수정하면 에러 남
  age?: number | undefined; // ?는 옵션 파라미터 지정. 써도 되고 안써도 되게 됨
};
const anythingPerson2: PersonType = {
  name: "amber",
  age: 3,
};
// anythingPerson2.name = "jane"; // Cannot assign to 'name' because it is a read-only property.

// 근데 타입스크립트 에러는 에디터 & 터미널에서만 가능함. 실제 실행하면 또 괜찮긴함.
// 실제 변환된 js파일은 에러 없음. 바꿔줄 수 있음.

// type키워드를 여러개로 합칠 수도 있음
type Typethis = string;
type Typethis2 = number;
type TypeSum = Typethis | Typethis2; // string과 number가 들어올 수 있게 됨

// 타입변수에 들어가있는게 object라면?
type PositionX = {
  x: number;
};

type PositionY = {
  y: number;
};

type NewPosition = PositionX & PositionY; // extend Object
// type NewPosition = PositionX & {y: number} // 요런 식도 가능함
const position: NewPosition = {
  x: 3,
  y: 6,
};

// type변수 쓸 때 주의 점
// 재정의 불가!
// type NewPosition = number;

// 숙제 1
// object타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있다면?
// 같은 속성에 다른 타입이면 never라는 속성이 들어가는 듯
type PositionYY = {
  y: string;
};
type NewPosition2 = PositionX & PositionY & PositionYY;

const position2: NewPosition2 = {
  x: 4,
  y: 3,
};

// 숙제 2
type homework2Type = {
  color?: string;
  size: number;
  readonly position: number[];
};

// 숙제 3
type StudentType = {
  name: string;
  phone: number;
  email: string;
};

// 내가 헷갈려서 잠시 써봄
type MyList1 = ["a" | "b" | "c"];
let myList: MyList1;
// myList = ["a", "c"];
myList = ["a"];
myList = ["b"];
// myList = ["d"]; // Type '"d"' is not assignable to type '"a" | "b" | "c"'.

type MyType2 = "a" | "b" | "c";
let myType2: MyType2;
myType2 = "a";
myType2 = "b";
myType2 = "c";
// myType2 = "d";

// 숙제 4
type Person2Type = StudentType & {
  minor: boolean;
};
