// 타입을 프로그래밍 스럽게 만들어 낼 수도 있다.
// 예를 들어 조건식을 이용해 조건부로 타입을 생성하는 것도 가능
// 아니면 매핑을 통해 한꺼번에 타입지정도 가능

let obj_2_15 = {
  name: "kim",
  age: 20,
};

// Object.keys(obj_2_15); // ['name', 'age']

// object의 key값을 전부 가져오는 `keyof` 가 존재함
interface Person2_15 {
  age: number;
  name: string;
}

// 오브젝트의 key값을 이용해서 타입체크를 하고싶을 때 사용하는 연산자임.
type PersonKeys = keyof Person2_15; // Person2_15에 있는 key들을 다 가져와 union타입을 만든다. 'age'|'name'
let a_2_15: PersonKeys = "name"; //
// let a_2_15: PersonKeys = "name1"; //이건 안됨

// index signature에다가 keyof를 쓰면?
// index signature는 모든 key값이기 때문에.. keyof를 붙이면 string|number 를 의미함..
interface Person2_15_2 {
  [key: string]: number;
}
type PersonKeys_2 = keyof Person2_15_2; // string|number

let a_2_15_2: PersonKeys_2 = "name3";

//
type Car_2_15 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

// 타입을 만들었는데.. 전부 string으로 바꾸려면? 타입 변환을 자동으로 해주는 변환기를 만들어보자..
type TypeChanger<MyType> = {
  [key in keyof MyType]: string; // 파라미터로 들어온 object타입의 key값인 color, model, price의 타입을 string으로 바꾼다.
};

type 새로운타입 = TypeChanger<Car_2_15>; // 타입이 모두 string으로 바뀌어 있다.

// 근데.. price속성만 string|number로 바꾸고 싶다면? 조건문을 써야 한다. 다음시간에..

// 숙제1. 다음 타입을 변환기 돌려보기
type Bus = {
  color: string;
  model: boolean;
  price: number;
};
// color, model, price 속성은 전부 string 또는 number 타입이어야합니다.
// 1. 변환기 하나 만드시고
// 2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.

type NewChanger_2<MyType> = {
  [key in keyof MyType]: string | number;
};

type NewBus = NewChanger_2<Bus>;

// 숙제2. 이런 변환기는 어떻게 만들어?
// object안에 들어있는 모든 속성을
// string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오
type NewChanger_3<MyType, T> = {
  [key in keyof MyType]: T;
};
type NewBus2 = NewChanger_3<Bus, boolean>;
type NewBus3 = NewChanger_3<Bus, string[]>;
