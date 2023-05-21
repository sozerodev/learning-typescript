/**
 * 타입 확정하기 Narrowing & Assertion
 */
declare function thisFunc(x: number | string): string | number;
declare function thisFunc2(x: number | string): void;
declare function thisFunc3(x: number | string): void;
declare function homework1(lst: (string | number)[]): number[];
declare function chkTeacherSubject(info: {
    subject: string | string[];
}): string | Error;
