/**
 * 함수에 타입 지정하는 법 & void 타입
 */
function func1(x: number): number {
  return x * 2;
}

// 함수에서 void타입 활용 가능
function func2(x: number): void {
  console.log(x);

  // 실수로 뭔가를 리턴하는 것을 방지 가능
}

// TS에서는 JS와 달리 함수 파라미터가 사용되면 필수로 넣어주어야 함.
// func2();

// 파라미터가 옵션일 경우
// 파라미터변수?: 타입
function func3(x?: number): void {}
func3();
func3(2);

// 근데 여기서 주의
// (변수?: number) === (변수 : number | undefined) 임

function func4(x: number | string): void {
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

// 숙제1
function sayHello(name?: string): void {
  if (name) {
    console.log(name + "안뇽");
  } else {
    console.log("이름이 없어");
  }
}

// 숙제2
function numbering(inputNum: number | string): number {
  if (typeof inputNum === "number") {
    return inputNum.toString().length;
  } else {
    return inputNum.length;
  }
}

// 숙제3
function homewk3(salary: number, ownHouse: boolean, attrP: string) {
  let score: number = 0;
  score += salary;

  if (ownHouse) score += 500;

  if (attrP === "상") score += 100;

  score > 599 ? "결혼가능" : null;
}
