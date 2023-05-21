/**
 * methods에 type alias 지정하는 법
 */
declare type FunctionType = (a: string) => number;
declare let myFunc3: FunctionType;
declare const memberInfo: {
    name: string;
    plusOne: (a: number) => number;
    changNAme: (name: string) => string;
};
declare type NumOut = (x: number, y: number) => number;
declare let ABC: NumOut;
declare type Member1 = {
    name: string;
    plusOne: (a: number) => number;
    changeName: (name: string) => void;
};
declare const memberInfo1: Member1;
declare type first = (inputString: string) => string;
declare const cutZero: first;
declare type second = (inputString: string) => number;
declare const removeDash: second;
declare const homework3Function: (userNum: string, cutZero: first, removeDash: second) => void;
