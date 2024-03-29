/**
 * public, private ?
 */

// 타입스크립트를 쓰면 자바스크립트에서 쓸 수 없는
// 객체 지향 언어 같은 문법도 제공함

// public private protected static 키워드를 통해 객체지향처럼 쓰기 유용하다.
// class를 많이 만들어서 개발하려면 위의 키워드가 유용함

class User2 {
  // { familyName: 'kim', name: 'park' }
  // 을 복사해주는 class
  public name: string;
  private familyName: string = "kim"; // familyName은 중요해보이지.. // private은 자식들이 수정할 수 없게 됨
  constructor(a) {
    // constructor를 쓰면 파라미터를 받을 수 있음
    this.name = a + this.familyName;
  }

  changeFamilyName(familyName: string) {
    this.familyName = familyName;
  }
}

let user1 = new User2("민수");
console.log(user1);
// user1.name = "민수이름바꿈";
console.log(user1);

// user1.familyName = "lee" // 이러면 큰일남. 그니까 앞에 private 키워드를 붙인 것
user1.changeFamilyName("Lee");
console.log(user1);

// ----------------------
// public키워드를 쓰면 this.어쩌구 생략 가능
class Person2_4 {
  constructor(public name: string) {
    // 위의 public name은
    // 이 자리에 들어온 파라미터는 자식의 name속성에 기입해주세요
    // 라는 뜻
  }
}

let child = new Person2_4("kim");
console.log(child); // Person2_4 { name: 'kim' }
