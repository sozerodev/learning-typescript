declare let obj_2_15: {
    name: string;
    age: number;
};
interface Person2_15 {
    age: number;
    name: string;
}
declare type PersonKeys = keyof Person2_15;
declare let a_2_15: PersonKeys;
interface Person2_15_2 {
    [key: string]: number;
}
declare type PersonKeys_2 = keyof Person2_15_2;
declare let a_2_15_2: PersonKeys_2;
declare type Car_2_15 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
declare type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
declare type 새로운타입 = TypeChanger<Car_2_15>;
declare type Bus = {
    color: string;
    model: boolean;
    price: number;
};
declare type NewChanger_2<MyType> = {
    [key in keyof MyType]: string | number;
};
declare type NewBus = NewChanger_2<Bus>;
declare type NewChanger_3<MyType, T> = {
    [key in keyof MyType]: T;
};
declare type NewBus2 = NewChanger_3<Bus, boolean>;
declare type NewBus3 = NewChanger_3<Bus, string[]>;
