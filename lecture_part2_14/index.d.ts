interface StringOnly {
    [key: string]: string;
}
interface StringOnly2 {
    age: number;
    location: "seoul";
    [key: string]: string | number;
    [key: number]: string;
}
declare let user2_14: StringOnly2;
interface MyType2_14 {
    "font-size": {
        "font-size": {
            "font-size": number;
        };
    };
}
declare let css: MyType2_14;
interface MyType2_14_2 {
    "font-size": MyType2_14_2 | number;
}
declare let css2: MyType2_14_2;
interface homework2_14_1 {
    [key: string]: string | number;
}
declare let obj: homework2_14_1;
interface homework2_14_2 {
    "font-size": number;
    [key: string]: homework2_14_2 | number;
}
declare let obj2: homework2_14_2;
