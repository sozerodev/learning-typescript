/**
 * array 자료에 붙일 수 있는 tuple type
 */
declare let 멍멍: (string | boolean)[];
declare let 멍멍2: [string, boolean];
declare let 멍멍3: [string, boolean?];
declare function 함수(...x: number[]): void;
declare function 함수2_7_2(...x: [number, string, number, boolean, number?]): void;
declare let arr2_10: number[];
declare let arr2_10_2: [number, number, ...number[]];
declare let myFood: [string, number, boolean];
declare let arr_homework: [string, number, ...boolean[]];
declare function 함수_homework3(...parameter: [string, boolean, ...(number | string)[]]): void;
declare function homework_4(...parameter: (string | number)[]): [string[], number[]];
