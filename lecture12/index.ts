/**
 * class만들 때 타입 지정 가능
 */

class Person {
  // class 필드값
  // 모든 자식들이 해당 데이터를 가질 수 있다.
  data: number = 0;
  name: string;
  constructor(name: string = "no name") {
    // default파라미터 설정 가능
    // constructor타입에는 return타입 지정 안해도 됨. 복제되는게 항상 Object이니까
    // constructor를 통해 Object안에 각각 독립되는 property속성을 만들 수 있음
    this.name = name; // 위의 필드 부분에 미리 name을 선언해놔야 쓸 수 있다.
  }

  // Prototype함수 넣어보기
  myFunction(a: string): string {
    // return타입도 넣을 수 있음. 없으면 안넣고.
    console.log("hello " + a);
    return a;
  }
}

let person1 = new Person("kim");
let person2 = new Person("park");
let person3 = new Person();

console.log(person1.data); // 0
console.log(person3.myFunction("안녕하세요~"));

// 숙제 1.
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }

  tax(): number {
    return this.price / 10;
  }
}

// 숙제 2.
class Word {
  num: number[];
  str: string[];
  constructor(...input: (number | string)[]) {
    let num_arr: number[] = []; // 타입지정을 해도 초기화는 해줘야 함
    let str_arr: string[] = [];
    input.forEach((element) => {
      if (typeof element === "number") {
        // this.num.push(element);
        num_arr.push(element);
      } else if (typeof element === "string") {
        // this.str.push(element);
        str_arr.push(element);
      }

      this.num = num_arr;
      this.str = str_arr;
    });
  }
}
