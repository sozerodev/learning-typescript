/**
 * Object에 타입을 지정하려면 interface도 있다.
 */
var square = {
    color: "red",
    width: 100,
};
var 학생 = {
    name: "kim",
};
var 선생 = {
    name: "kim",
    age: 20,
};
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var 장바구니2 = { product: "청소기", price: 7000, card: false };
var homework4 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
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
