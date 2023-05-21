/**
 * 타입도 변수에 담아 쓰기
 * type키워드를 써서 & readonly
 */
declare type Animal = string | number | undefined;
declare let animal: Animal;
declare type Animal2Type = {
    name: string;
    age: number;
};
declare let animal2: Animal2Type;
declare const anythingPerson: {
    name: string;
};
declare type PersonType = {
    readonly name: string;
    age?: number | undefined;
};
declare const anythingPerson2: PersonType;
declare type Typethis = string;
declare type Typethis2 = number;
declare type TypeSum = Typethis | Typethis2;
declare type PositionX = {
    x: number;
};
declare type PositionY = {
    y: number;
};
declare type NewPosition = PositionX & PositionY;
declare const position: NewPosition;
declare type PositionYY = {
    y: string;
};
declare type NewPosition2 = PositionX & PositionY & PositionYY;
declare type homework2Type = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare type StudentType = {
    name: string;
    phone: number;
    email: string;
};
declare type MyList1 = ["a" | "b" | "c"];
declare let myList: MyList1;
declare type MyType2 = "a" | "b" | "c";
declare let myType2: MyType2;
declare type Person2Type = StudentType & {
    minor: boolean;
};
