/**
 * 타입을 파라미터로 입력하는 Generic
 */
declare function 함수2_7_1<Type>(x: unknown[]): unknown;
declare let a: unknown;
declare function 함수2<MyType>(x: MyType[]): MyType;
declare let b: number;
declare function 함수3<MyType, MyType2>(x: (MyType | MyType2)[]): MyType | MyType2;
declare let c: string | number;
declare function 함수4<MyType>(x: MyType[]): MyType;
declare let d: string;
declare let e: number;
declare function 함수5<MyType extends number>(x: MyType): number;
interface LengthCheck {
    length: number;
}
declare function 함수6<MyType extends LengthCheck>(x: MyType): number;
declare let f: number;
declare let f2: number;
declare function homework2_7_1<MyType extends string | string[]>(parameter: MyType): number;
interface Animal2_7 {
    name: string;
    age: number;
}
declare let data: string;
declare function homework2<Type>(x: string): Type;
declare let result: Animal2_7;
declare class Person2_7<T> {
    name: any;
    constructor(a: T);
}
declare let a2: Person2_7<string>;
