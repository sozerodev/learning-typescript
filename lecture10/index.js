/**
 * (JS문법시간) class 키워드 알아보기
 * 객체지향문법 이해하기
 */
/**
 
// {object} 자료형으로 정보등를 정리하기
var nunu = {
    q: "consume",
    w: "snowball",
};

var garen = {
    q: "strike",
    w: "courage",
};

*/
// 이렇게 하나하나 쓰면 날밤새잖아요...
// 비슷한 Object를 만들 일이 많으면 class를 씁시다!
// Class는 Object를 뽑는 기계다!
// function으로 만들 수도 있음
function Machine() {
    this.q = "consume";
    this.w = "snowball";
}
// 여기서 this란?
// 기계로부터 생성되는 Object (멋진 말로 instance)
// Object뽑는 기계로 객체지향문법의 핵심
var nunu = new Machine();
// 이것과 동일함
// var nunu = {
//     q: "consume",
//     w: "snowball",
// };
// ES6
// class Hero {
//   constructor(input_q, input_w) {
//     this.q = input_q;
//     this.w = input_w;
//   }
// }
