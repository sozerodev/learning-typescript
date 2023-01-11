/**
 * 함수에 타입 지정하는 법 & void 타입
 */
function func1(x) {
    return x * 2;
}
// 함수에서 void타입 활용 가능
function func2(x) {
    console.log(x);
    // 실수로 뭔가를 리턴하는 것을 방지 가능
}
// TS에서는 JS와 달리 함수 파라미터가 사용되면 필수로 넣어주어야 함.
// func2();
// 파라미터가 옵션일 경우
// 파라미터변수?: 타입
function func3(x) { }
func3();
func3(2);
// 근데 여기서 주의
// (변수?: number) === (변수 : number | undefined) 임
function func4(x) {
    //   console.log(x + 3);  // 에러 발생
    // TS는 엄격한걸 좋아하니..
    // string + number (가능)
    // number + number (가능)
    // 이외엔 불가능
    // narrowing?
    if (typeof x === "number") {
        console.log(x + 3);
    }
}
