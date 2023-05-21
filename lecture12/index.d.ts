/**
 * class만들 때 타입 지정 가능
 */
declare class Person {
    data: number;
    name: string;
    constructor(name?: string);
    myFunction(a: string): string;
}
declare let person1: Person;
declare let person2: Person;
declare let person3: Person;
declare class Car {
    model: string;
    price: number;
    constructor(model: string, price: number);
    tax(): number;
}
declare class Word {
    num: number[];
    str: string[];
    constructor(...input: (number | string)[]);
}
