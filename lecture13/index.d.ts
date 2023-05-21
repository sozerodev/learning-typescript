/**
 * Object에 타입을 지정하려면 interface도 있다.
 */
declare type typeName = string;
interface Square {
    color: string;
    width: number;
}
declare let square: Square;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
declare type Animal2 = {
    name: string;
};
declare type Cat = {
    age: number;
} & Animal2;
interface Student {
}
interface Teacher extends Student {
    name: string;
}
declare type Animal3 = {
    name: string;
};
declare type Cat2 = {
    name: number;
} & Animal;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface Cart {
    product: string;
    price: number;
}
declare let 장바구니: Cart[];
interface Cart2 extends Cart {
    card: boolean;
}
declare let 장바구니2: Cart2;
interface Plus {
    plus: (a: number, b: number) => number;
}
interface Minus {
    minus: (a: number, b: number) => number;
}
declare let homework4: Plus & Minus;
