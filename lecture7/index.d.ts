/**
 * Literal Types로 만드는 const 변수 유사품
 */
declare let myName: "kim";
declare let itisme: "대머리" | "솔로";
declare function myFunc2_2(a: "hello"): 1 | 0;
declare function playGame(hand: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[];
declare let literalTypeVar: "1" | "2";
declare var 자료: {
    name: string;
};
declare function 내함수(a: "kim"): void;
declare var 자료2: {
    readonly name: "kim";
};
