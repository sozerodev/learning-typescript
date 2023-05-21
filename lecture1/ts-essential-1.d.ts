/**
 * Typescript필수문법 10분 정리와 설치 셋팅
 */
declare let someName: string;
declare let nameList: string[];
declare let thisObject: {
    name: string;
    test1: number;
    test2?: string;
};
declare let severalType: string | number | string[];
declare type MyType = string | number;
declare let thisType: MyType;
declare function myFunc(x: number): number;
declare type Member = [number, boolean];
declare let james: Member;
declare type ObjectMember = {
    name: string;
    test?: number;
};
declare let kasadian: ObjectMember;
declare type ObjectMember2 = {
    [key: string]: string;
};
declare class User {
    name: string;
    constructor(name: string);
}
