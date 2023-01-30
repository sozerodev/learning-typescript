/**
 * public, private ?
 */
// 타입스크립트를 쓰면 자바스크립트에서 쓸 수 없는
// 객체 지향 언어 같은 문법도 제공함
// public private protected static 키워드
// class를 많이 만들어서 개발하려면 위의 키워드가 유용함
var User2 = /** @class */ (function () {
    function User2(a) {
        this.familyName = "kim"; // familyName은 중요해보이지..
        this.name = a + this.familyName;
    }
    User2.prototype.changeFamilyName = function (familyName) {
        this.familyName = familyName;
    };
    return User2;
}());
var user1 = new User2("민수");
console.log(user1);
// user1.familyName = "lee" // 이러면 큰일남. 그니까 앞에 private 키워드를 붙인 것
user1.changeFamilyName("Lee");
console.log(user1);
// ----------------------
// public키워드를 쓰면 this.어쩌구 생략 가능
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
        // 위의 public name은
        // 이 자리에 들어온 파라미터는 자식의 name속성에 기입해주세요
        // 라는 뜻
    }
    return Person1;
}());
var child = new Person1("kim");
console.log(child); // Person1 { name: 'kim' }
