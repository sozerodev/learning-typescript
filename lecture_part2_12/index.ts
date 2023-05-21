/**
 * d.ts파일?
 * 프로젝트에서 사용하는 '타입정의 보관용 파일' 이다. (test.d.ts파일 참고)
 *
 * d.ts파일을 모든 타입을 정리해놓은 레퍼런스용으로 쓰기도 한다.
 */

// import { Age, Person } from "./test.d";
// let age: Age;
let 이름: string = "김"; // index.d.ts에 자동으로 생성된다.
type Age = number;

// d.ts파일은 자동으로 생성되기 때문에 d.ts파일을 별도로 수정할 필요는 없다.

let 나이_2_12: Age2_12 = 30; // types/common/test.d.ts파일의 타입을 가져옴
// 근데 좀 위험할 수 있으니 그냥 import export쓰는게 좋다.

// 제이쿼리의 $ 같은 경우.. index.html에 설치해도 타입정의가 안돼있으니 제이쿼리 문법은 에러가 난다.
// 동작은 잘해도 빨간줄 그이니까..
// 따라서 $를 알아서 정의하든지. 아니면 타입정의를 가져다 쓰면 된다.

// Definitely Typed github repository참고!
// 아니면 https://www.typescriptlang.org/ 에서 원하는 라이브러리 명..예를들면 jquery를 치면 된다.
