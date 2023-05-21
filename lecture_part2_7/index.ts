/**
 * 타입을 파라미터로 입력하는 Generic
 */

// 함수에 타입도 파라미터로 입력 가능
// <> 로 타입을 파라미터로 입력받음. 타입만 입력 가능!
function 함수2_7_1<Type>(x: unknown[]) {
  return x[0];
}

let a = 함수2_7_1<number>([4, 2]);
console.log(a);

// -------------------------------

function 함수2<MyType>(x: MyType[]): MyType {
  return x[0];
}

let b = 함수2<number>([4, 2]);
console.log(a);

// -------------------------------

function 함수3<MyType, MyType2>(x: (MyType | MyType2)[]): MyType | MyType2 {
  return x[0];
}

let c = 함수3<number, string>([4, "2"]);
console.log(a);

// -------------------------------

function 함수4<MyType>(x: MyType[]): MyType {
  return x[0];
}

let d = 함수4<string>(["4", "2"]);
let e = 함수4<number>([4, 2]);
console.log(a);

// -------------------------------
// 타입파라미터 제한두기
function 함수5<MyType extends number>(x: MyType) {
  // MyType이 number의 속성을 가지는지 확인한다. 복사가 아니라 체크개념으로 보면 됨.
  // 오른쪽엔 커스텀 타입으로도 타입파라미터 제한이 가능하다.
  return x - 1;
}

interface LengthCheck {
  length: number;
}

function 함수6<MyType extends LengthCheck>(x: MyType) {
  // MyType이 number의 속성을 가지는지 확인한다. 복사가 아니라 체크개념으로 보면 됨.
  // 오른쪽엔 커스텀 타입으로도 타입파라미터 제한이 가능하다.
  return x.length;
}

let f = 함수5<number>(100);
let f2 = 함수6<string[]>(["100"]);

// 숙제1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
function homework2_7_1<MyType extends string | string[]>(parameter: MyType) {
  return parameter.length;
}

// 숙제2.
interface Animal2_7 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function homework2<Type>(x: string): Type {
  return JSON.parse(x);
}
let result = homework2<Animal2_7>(data);
console.log(result);

// 숙제 3.
class Person2_7<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a2 = new Person2_7<string>("어쩌구");
console.log(a2.name); //any 타입이 되었넹
