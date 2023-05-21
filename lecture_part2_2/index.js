/**
 * Narrowing 할 수 있는 방법 더 알아보기
 */
// typeof 연산자로 부족하다면?
// null & undefined 타입체크 하는 경우 매우 잦음
function myFunc2(a) {
    // 만약에 a가 undefined면? string이면?
    // if문을 하나로 줄일 수 있다!
    //   if (typeof a === "string") {
    //   } else {
    //   }
    if (a && typeof a === "string") {
        // 1. && 연산자로 narrowing
        // a가 Undefined이면 조건식이 자동으로 Undefined가 되어 여기에 실행이 안됨
        // a가 undefined이면 if문 실행 X
        // a가 string이면 if문 실행 O
    }
}
function myFunc4(animal) {
    // animal변수가 Fish타입이면?
    // typeof연산자는 number, string, boolean, object 이런 식으로만 판정 가능
    // 2. in 키워드로 object narrowing 가능 (속성명 in 오브젝트자료)
    if ("swim" in animal) {
        // Fish타입인지 검사
        console.log(animal.swim);
    }
}
// ------------------------------------------------
// 3. instanceof 연산자로 object narrowing 가능
// 오브젝트 instanceof 부모class
// object 두개가 비슷하면 부모class가 누군지 물어봐서 narrowing 가능
var thisDate = new Date();
if (thisDate instanceof Date) {
}
function thisFunc_3(x) {
    // 둘다 똑같은 속성이므로
    // 속성명 in 오브젝트자료 -> 불가
    // 오브젝트 instanceof 부모class -> 불가
    // literal type 강제로 만든 것을 이용 (wheel 속성값이 각각 다름)
    if (x.wheel === "4개") {
        console.log("the car is " + x.color);
    }
    else {
        console.log("the bike is " + x.color);
    }
}
