/**
 * class만들 때 타입 지정 가능
 */
var Person = /** @class */ (function () {
    function Person(name) {
        if (name === void 0) { name = "no name"; }
        // class 필드값
        // 모든 자식들이 해당 데이터를 가질 수 있다.
        this.data = 0;
        // default파라미터 설정 가능
        // constructor타입에는 return타입 지정 안해도 됨. 복제되는게 항상 Object이니까
        // constructor를 통해 Object안에 각각 독립되는 property속성을 만들 수 있음
        this.name = name; // 위의 필드 부분에 미리 name을 선언해놔야 쓸 수 있다.
    }
    // Prototype함수 넣어보기
    Person.prototype.myFunction = function (a) {
        // return타입도 넣을 수 있음. 없으면 안넣고.
        console.log("hello " + a);
        return a;
    };
    return Person;
}());
var person1 = new Person("kim");
var person2 = new Person("park");
var person3 = new Person();
console.log(person1.data); // 0
console.log(person3.myFunction("안녕하세요~"));
// 숙제 1.
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
// 숙제 2.
var Word = /** @class */ (function () {
    function Word() {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var _this = this;
        var num_arr = []; // 타입지정을 해도 초기화는 해줘야 함
        var str_arr = [];
        input.forEach(function (element) {
            if (typeof element === "number") {
                // this.num.push(element);
                num_arr.push(element);
            }
            else if (typeof element === "string") {
                // this.str.push(element);
                str_arr.push(element);
            }
            _this.num = num_arr;
            _this.str = str_arr;
        });
    }
    return Word;
}());
