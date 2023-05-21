/**
 * class에서 사용 가능한 protected, static 키워드
 *
 */
declare class User2_5 {
    x: number;
}
declare class NewUser2_5 extends User2_5 {
}
declare const person2_5: NewUser2_5;
declare class User2_5_1 {
    private x;
    protected y: number;
}
declare class NewUser2_5_1 extends User2_5_1 {
    doThis(): void;
}
declare const test: NewUser2_5_1;
declare class User2_5_2 {
    static x: number;
    private static_x_2;
    y: number;
}
declare let 자식: User2_5_2;
declare class User2_5_3 {
    static skill: string;
    intro: string;
}
declare let 철수2: User2_5_3;
declare let 민지: User2_5_3;
declare class Homework2_5 {
    private static x;
    static y: number;
    static addOne(num: any): void;
    static printX(): void;
}
declare class Square_2_5 {
    width: number;
    height: number;
    color: string;
    constructor(width: any, height: any, color: any);
    draw(): void;
}
declare let 네모: Square_2_5;
