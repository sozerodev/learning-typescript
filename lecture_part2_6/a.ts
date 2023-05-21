// export를 해야 다른 파일에서 import해서 사용할 수 있다.
export var name_2_6 = "kim";
export var age_2_6 = 20;

export type Name = string;

// 하나의 object 자료형이라 생각하면 됨
export namespace 네임스페이스 {
  export type Name2 = string | number;
}

let 변수: 네임스페이스.Name2 = "kim";

namespace 네임스페이스2 {
  export type Name2 = string | number;
}

export interface 인터페이스 {}

// 숙제 1.
export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

// homework 2
export type homework2_6_2 = (parameter: object) => void;
