/**
 * 함수에 사용하는 never 타입
 */
// function return 값에 붙일 수 있는 never type
// 조건1. return값이 없어야 함
// 조건2. endpoint가 없어야 함
function myFunc5_2() {
    // 끝나지 않는 함수가 뭘까? endpoint가 없는 함수?
    // 1.
    //   throw new Error();
    // throw new Error() 문법은 그냥 강제로 에러내라~ 라는 뜻인데
    // 에러가 나면 전체 코드실행이 중단되니까 2번 조건도 나름 충족하는 것이기 때문에
    // never를 사용가능합니다.
    // 2.
    while (true) { }
}
// never타입은 실제로 거의 쓸 일이 없음. void로 대체가 가능함
// never타입을 알아야 하는 것은.. 코드를 이상하게 짜면 간혹가다 등장한다.
// 어떨때..?
function myFunc6(parameter) {
    if (typeof parameter === "string") {
        console.log(parameter);
    }
    else {
        // string이 아니면 실행?
        console.log(parameter); // 이 경우 parameter의 타입이 never가 된다.
        // 여기서의 never는 있을 수 없다는 것을 의미함!
        // 이 조건에 들어올 일이 절대 없음. 애초에 받을 때 string으로 받기 때문
        // 그래서 여기서 parameter의 타입이 never가 되어버린 것
    }
}
// never타입 등장하는 경우 2.
// 어떤 함수표현식은 return타입이 자동으로 never가 됨
var myFunc7 = function () {
    throw new Error();
};
