/**
 * class에서 사용 가능한 protected, static 키워드
 *
 */

class User2_5 {
  x = 10;
}

// class를 복사하고 싶다면?
class NewUser2_5 extends User2_5 {
  // 여기에 User2_5에 있던 내용들이 복붙된다.
}

const person2_5 = new NewUser2_5();
console.log(person2_5);

// ---------------------------------------------------------------------------------

class User2_5_1 {
  // class안에서 쓸 수 있는 키워드! private은 class안에서만 쓸 수 있는 필드값을 만들고 싶을 때 사용한다.
  private x = 10;

  // protected
  // private과 유사하다. 이걸 붙이면 class안에서만 사용가능한데.. 좀더 확장성이 있다.
  // extends된 클래스에서도 사용할 수 있게 해준다.
  protected y = 11;
}

class NewUser2_5_1 extends User2_5_1 {
  // User2_5_1의 x를 쓸 수 없다. private이기 때문...
  doThis() {
    // this.x = 20; x는 private이라 못써
    this.y = 20;
  }
}

console.log(new NewUser2_5_1());
const test = new NewUser2_5_1();
test.doThis();
console.log(test);

// ---------------------------------------------------------------------------------
// static 키워드
// static을 붙이면 부모class에 직접 부여됨 ( +자식에게 안물려줌 )
class User2_5_2 {
  static x = 10; // static을 붙여서 부모만 쓸 수 있음. extends하면 static도 잘 따라감.
  private static_x_2 = 10; // private/protected/public + static이 가능하다.
  y = 20; // 자식 object만 쓸 수 있는 것.
}

let 자식 = new User2_5_2();
console.log(자식);
// console.log(자식.x);
console.log(User2_5_2.x);

// static 활용
class User2_5_3 {
  static skill = "js"; // 못물려받게 감추고 싶음
  intro = User2_5_3.skill + "전문가입니다.";
}

let 철수2 = new User2_5_3();
console.log(철수2);

// 여기서 skill을 다른걸로 바꾸고 싶다..!
User2_5_3.skill = "ts";

let 민지 = new User2_5_3();
console.log(민지);

// Homework 2
class Homework2_5 {
  private static x = 10;
  public static y = 20;

  static addOne(num) {
    Homework2_5.x += num;
  }

  static printX() {
    console.log(Homework2_5.x);
  }
}

Homework2_5.addOne(3); // 이렇게 하면 x가 3 더해져야 함
Homework2_5.addOne(4); // 이렇게 하면 x가 4 더해져야 함
Homework2_5.printX(); // 이렇게 하면 콘솔창에 x값이 출력

// Homework 3
class Square_2_5 {
  width = 0;
  height = 0;
  color = "black";

  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    document.createElement("div");
  }
}

let 네모 = new Square_2_5(30, 30, "red");
