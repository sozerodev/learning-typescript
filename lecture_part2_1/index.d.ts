/**
 * 함수 rest 파라미터, destructuring할 때 타입 지정
 */
declare function myFunc1(...a: number[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let arr_des: (string | number)[];
declare let arr_des_0: string, arr_des_1: number;
declare let student: boolean, age0: number;
declare function myFunc5(a: any, b: any): void;
declare let objectParam: {
    student: boolean;
    age0: number;
};
declare function myFunc5_1({ student, age0 }: {
    student: boolean;
    age0: number;
}): void;
declare function myFunc_sum(...number: number[]): number;
declare function myFunc_homework({ user, comment, admin, }: {
    user: string;
    comment: number[];
    admin: boolean;
}): void;
declare function myFunc_homework3([a, b, c]: (number | string | boolean)[]): void;
