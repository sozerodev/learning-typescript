/**
 * class에서 사용 가능한 protected, static 키워드
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2_5 = /** @class */ (function () {
    function User2_5() {
        this.x = 10;
    }
    return User2_5;
}());
// class를 복사하고 싶다면?
var NewUser2_5 = /** @class */ (function (_super) {
    __extends(NewUser2_5, _super);
    function NewUser2_5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser2_5;
}(User2_5));
var person2_5 = new NewUser2_5();
console.log(person2_5);
// ---------------------------------------------------------------------------------
var User2_5_1 = /** @class */ (function () {
    function User2_5_1() {
        // class안에서 쓸 수 있는 키워드! private은 class안에서만 쓸 수 있는 필드값을 만들고 싶을 때 사용한다.
        this.x = 10;
        // protected
        // private과 유사하다. 이걸 붙이면 class안에서만 사용가능한데.. 좀더 확장성이 있다.
        // extends된 클래스에서도 사용할 수 있게 해준다.
        this.y = 11;
    }
    return User2_5_1;
}());
var NewUser2_5_1 = /** @class */ (function (_super) {
    __extends(NewUser2_5_1, _super);
    function NewUser2_5_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // User2_5_1의 x를 쓸 수 없다. private이기 때문...
    NewUser2_5_1.prototype.doThis = function () {
        // this.x = 20; x는 private이라 못써
        this.y = 20;
    };
    return NewUser2_5_1;
}(User2_5_1));
console.log(new NewUser2_5_1());
var test = new NewUser2_5_1();
test.doThis();
console.log(test);
// ---------------------------------------------------------------------------------
// static 키워드
// static을 붙이면 부모class에 직접 부여됨 ( +자식에게 안물려줌 )
var User2_5_2 = /** @class */ (function () {
    function User2_5_2() {
        this.static_x_2 = 10; // private/protected/public + static이 가능하다.
        this.y = 20; // 자식 object만 쓸 수 있는 것.
    }
    User2_5_2.x = 10; // static을 붙여서 부모만 쓸 수 있음. extends하면 static도 잘 따라감.
    return User2_5_2;
}());
var 자식 = new User2_5_2();
console.log(자식);
// console.log(자식.x);
console.log(User2_5_2.x);
// static 활용
var User2_5_3 = /** @class */ (function () {
    function User2_5_3() {
        this.intro = User2_5_3.skill + "전문가입니다.";
    }
    User2_5_3.skill = "js"; // 못물려받게 감추고 싶음
    return User2_5_3;
}());
var 철수2 = new User2_5_3();
console.log(철수2);
// 여기서 skill을 다른걸로 바꾸고 싶다..!
User2_5_3.skill = "ts";
var 민지 = new User2_5_3();
console.log(민지);
// Homework 2
var Homework2_5 = /** @class */ (function () {
    function Homework2_5() {
    }
    Homework2_5.addOne = function (num) {
        Homework2_5.x += num;
    };
    Homework2_5.printX = function () {
        console.log(Homework2_5.x);
    };
    Homework2_5.x = 10;
    Homework2_5.y = 20;
    return Homework2_5;
}());
Homework2_5.addOne(3); // 이렇게 하면 x가 3 더해져야 함
Homework2_5.addOne(4); // 이렇게 하면 x가 4 더해져야 함
Homework2_5.printX(); // 이렇게 하면 콘솔창에 x값이 출력
// Homework 3
var Square_2_5 = /** @class */ (function () {
    function Square_2_5(width, height, color) {
        this.width = 0;
        this.height = 0;
        this.color = "black";
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square_2_5.prototype.draw = function () {
        document.createElement("div");
    };
    return Square_2_5;
}());
var 네모 = new Square_2_5(30, 30, "red");
