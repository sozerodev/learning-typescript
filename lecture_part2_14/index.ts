// object 타입지정할 때 index signature를 쓰면
// object 타입지정을 한번에 가능

interface StringOnly {
  //   name: string;
  //   age: string;
  //   location: string;

  // 모든 속성은 어차피 stirng..인데.. 이렇게 하나하나 타입지정하는 게 귀찮다면? index signature!
  [key: string]: string; // 모든 string타입의 속성은 string 타입이다. 물론 string|number 도 가능.
  //   age2_14: number; // 이런건 불가. age도 모든 문자에 걸리기 때문.
}

interface StringOnly2 {
  //   이런 방식은 가능하다.
  age: number; // age는 어차피 string이거나 number중 하나인데 이걸 여기서 age는 number라고 지정해둔거라 위와 다르게 가능하다.
  location: "seoul"; // 리터럴타입 지정도 가능하다.
  [key: string]: string | number;
  [key: number]: string; // key값이 number이면 string으로 받게 해주라
}

let user2_14: StringOnly2 = {
  name: "kim",
  age: 20,
  location: "seoul",

  // 속성 이름이 숫자인 경우?
  0: "kim",
};

// 이런 object 자료 타입 지정은?
interface MyType2_14 {
  "font-size": {
    "font-size": {
      "font-size": number;
    };
  };
}
let css: MyType2_14 = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// recursive 하게 타입 만드는 법
interface MyType2_14_2 {
  "font-size": MyType2_14_2 | number; // font-size안의 속성은 MyType2_14_2 이거나 number가 들어온다.
}
let css2: MyType2_14_2 = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// 숙제 1.
interface homework2_14_1 {
  [key: string]: string | number; // 유연한 타입지정이 가능하지만 엄격하지 않아서 버그를 잡아준다는 장점이 없어질 우려가 있다.
}
let obj: homework2_14_1 = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// 숙제2.
interface homework2_14_2 {
  "font-size": number;
  [key: string]: homework2_14_2 | number;
}
let obj2: homework2_14_2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
