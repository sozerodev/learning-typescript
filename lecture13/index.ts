/**
 * Object에 타입을 지정하려면 interface도 있다.
 */

type typeName = string;

// Object타입의 경우 choice가 두개.
// type키워드도 가능하고 interface키워드도 가능

// class 만드는 법과 유사
interface Square {
  color: string;
  width: number;
}

let square: Square = {
  color: "red",
  width: 100,
};

// Q1.
interface Student {
  name: string;
}

// interface Teacher {
//   name: string;
//   age: number;
// }
interface Teacher extends Student {
  // interface의 장점: extends로 복사 가능
  // Student인터페이스에 있는 name속성을 가져온다.
  age: number;
}

let 학생: Student = {
  name: "kim",
};

let 선생: Teacher = {
  name: "kim",
  age: 20,
};

// type alias는 이런거 안되냐? 된다. 비슷한거 있음 & 로 말이야 (intersection이라 함)
type Animal2 = {
  name: string;
};

// type Cat = {
//   name: string;
//   age: number;
// };

// 교차 타입 (intersection type)
type Cat = {
  age: number;
} & Animal2;

// type vs interface
// type은 중복선언 불가
// interface는 중복선언 가능
interface Student {
  // 위에 Student에 대해 정의했지만 여기서 또 정의해도
  // 에러가 나지 않음 (자동 extends가 된다)
  // score: number; // 위에서 Student를 타입으로 지정한 변수에서 score를 필요로 하므로 잠시 주석처리
}

// 타입은 중복선언 불가!
// interface는 유연하고 type은 엄격함
// 외부 라이브러리의 경우 interface를 많이 쓴다.
// 추후에 타입에 뭐 더하는게 쉽다.

// 다른 사람이 많이 이용할 것 같으면 Object타입을 정의할 때 interface를 쓰는게 좋다.
interface Teacher extends Student {
  name: string;
}

// & 쓸 때 중복속성 발생하면?
type Animal3 = { name: string };
type Cat2 = { name: number } & Animal; // 여기선 에러가 안남

// let 야옹이: Cat = { name: "kim" }; // 여기선 에러가 남.
// & 는 합치는게 아니라 왼쪽 오른쪽 둘다 만족하는 타입임

// 숙제1.
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 숙제2.
interface Cart {
  product: string;
  price: number;
}
let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// 숙제3.
interface Cart2 extends Cart {
  card: boolean;
}
let 장바구니2: Cart2 = { product: "청소기", price: 7000, card: false };

// 숙제4.
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며
//    plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며
//    minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
interface Plus {
  plus: (a: number, b: number) => number;
}
interface Minus {
  minus: (a: number, b: number) => number;
}

let homework4: Plus & Minus = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

// 모범답안
// let 오브젝트 :MathObj = {
//   plus(a,b){
//     return a + b
//   },
//   minus(a,b){
//     return a - b
//   }
// }
