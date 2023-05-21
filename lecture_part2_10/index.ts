/**
 * array 자료에 붙일 수 있는 tuple type
 */

// array에 타입 넣는 법 (union)
let 멍멍: (string | boolean)[] = ["dog", true];

// 위에보다 좀더 엄격하게 (tuple type)
// 첫번째 자료는 무조건 string, 두번째 자료는 무조건 boolean
let 멍멍2: [string, boolean] = ["dog", true];

// tuple에 옵션표시도 가능 (? 는 들어올 수도 있고 안들어올 수도 있고,,,)
let 멍멍3: [string, boolean?] = ["dog"];

// 단... 옵션 ?  는 무조건 맨 뒤에만 칠 수 있다. 두개 이상도 가능하나 항상 뒤에서부터 시작돼야 한다.
// let 멍멍3: [string, boolean?, number] = ["dog"];

// rest parameter
// 파라미터가 몇개가 들어올 지 모를 때 갖다 쓰는 것
function 함수(...x: number[]) {
  console.log(x);
}

함수(1, 2, 3, 4, 6, 3, 5); // rest parameter로 받으니 내가 원하는만큼 파라미터를 넣을 수 있다.

// rest parameter 타입 지정 시 tuple 가능
function 함수2_7_2(...x: [number, string, number, boolean, number?]) {
  console.log(x);
}

함수2_7_2(1, "2", 3, true);
함수2_7_2(1, "2", 3, true, 3);

// array를 합칠 때...
let arr2_10 = [1, 2, 3];
let arr2_10_2: [number, number, ...number[]] = [4, 5, ...arr2_10]; // spread연산자는 괄호를 벗기라는 의미를 가짐.
console.log(arr2_10_2); // [ 4, 5, 1, 2, 3 ]

// 숙제 1.
let myFood: [string, number, boolean] = ["초밥", 12000, true];

// 숙제 2.
let arr_homework: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// 숙제 3.
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
function 함수_homework3(
  ...parameter: [string, boolean, ...(number | string)[]]
) {}
함수_homework3("a", true, 6, 3, "1", 4);

// 숙제 4.
function homework_4(...parameter: (string | number)[]) {
  // parameter의 타입별로 리턴

  let result: [string[], number[]] = [[], []];

  parameter.forEach((element) => {
    if (typeof element == "string") {
      result[0].push(element);
    } else {
      result[1].push(element);
    }
  });

  return result;
}
