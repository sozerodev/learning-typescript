// if else in types
// 타입을 만들 때 if문을 써서 조건부로 타입을 만들어 낼 수 있다.

// 삼항연산자 개념 정리
// 파라미터로 string을 집어넣으면 string을 남겨주고, 그게 아니면 unknown을 남겨주세요!
type Age_2_16<T> = T extends string ? string : unknown; // <> 이건 일반타입 변수에도 사용 가능
// T extends string -> T가 string속성을 가지고 있는지 여부를 true, false로 뱉는다.
// 조건식은 무조건 extends가 들어간다 보면 됨

let a_2_16: Age_2_16<string>; // string
let a_2_17: Age_2_16<number>; // unknown

// 파라미터로 array타입을 입력하면 첫번째 자료의 타입을 남기는 것.. array타입말고 다른거면 any
type FirstItem<T> = T extends string[] ? T[0] : any;
let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

// infer 키워드
// 조건문에서 쓸 수 있는 infer 키워드 (infer는 타입을 왼쪽에서 추출한다. )
type Person2_16<T> = T extends infer R ? R : unknown;
// T extends infer R -> 왼쪽에서 타입을 뽑아주삼~ T에서 타입을 뽑아주삼~

// 굳이 타입을 왜 뽑냐? -> 뽑아서 쓰고 싶을 때가 있으니까~
type a_2_16_2 = Person2_16<string>;

// 실용성 있게 써보자~ 만약 aaray 내부의 타입만 뽑고 싶다면?
type 타입추출<T> = T extends (infer R)[] ? R : unknown; // R은 string이 됨
type a_2_16_3 = 타입추출<string[]>; // array에서 array가 가지는 타입 하나를 뽑고싶을 수 있음

// infer 키워드 예시3
// 함수를 넣으면 함수의 return 타입만 뽑고 싶다
type 타입추출2<T> = T extends () => infer R ? R : unknown;
type a_2_16_4 = 타입추출2<() => void>; // array에서 array가 가지는 타입 하나를 뽑고싶을 수 있음

// 사실 위에는 쓸모 없고 이게 낫다..
// 함수를 넣으면 함수의 return타입만 쓰고싶다면
// ReturnType이라는 기본 함수를 쓰면 알아서 해준다.
type b_2_16 = ReturnType<() => void>;

// 숙제1
type Homework2_16<T> = T extends [string, ...any] ? T[0] : unknown;
let age2_16_1: Homework2_16<[string, number]>;
let age2_16_2: Homework2_16<[boolean, number]>;
