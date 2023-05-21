/**
 * public, private ?
 */
declare class User2 {
    name: string;
    private familyName;
    constructor(a: any);
    changeFamilyName(familyName: string): void;
}
declare let user1: User2;
declare class Person2_4 {
    name: string;
    constructor(name: string);
}
declare let child: Person2_4;
