/**
 * typescript에서도 다른 파일의 타입들을 가져다 쓸 수 있다!
 *
 */

// a.ts에 있는걸 index.ts에서 가져다 쓰려고 한다!
import { Name, name_2_6, age_2_6, 네임스페이스, Car, Bike } from "./a";

console.log(name_2_6);

let 변수: Name = "park";

let 변수2: 네임스페이스.Name2 = "park";
console.log(변수2);

let myCar2_6: Car = {
  wheel: 4,
  model: "test",
};

// 숙제3. 타입중복 없애기
// type Dog_2_6 = string;
// interface Dog_2_6 {
//   name: string;
// }

// let dog1: Dog_2_6 = "bark";
// let dog2: Dog_2_6 = { name: "paw" };
namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
