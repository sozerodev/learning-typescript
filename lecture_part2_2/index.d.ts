/**
 * Narrowing 할 수 있는 방법 더 알아보기
 */
declare function myFunc2(a: string | undefined): void;
declare type Fish = {
    swim: string;
};
declare type Bird = {
    fly: string;
};
declare function myFunc4(animal: Fish | Bird): void;
declare let thisDate: Date;
declare type Car1 = {
    wheel: "4개";
    color: string;
};
declare type Bike = {
    wheel: "2개";
    color: string;
};
declare function thisFunc_3(x: Car1 | Bike): void;
