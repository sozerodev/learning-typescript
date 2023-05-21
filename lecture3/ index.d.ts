/**
 * 타입을 미리 정하기 애매할 때 (union type, any, unknown)
 */
declare let member: number | string;
declare let membersList: (string | number)[];
declare let thisObject2: {
    a: string | number;
};
declare let thisisAny: any;
declare let thisisUnknown: unknown;
declare let 변수2: string;
declare let thisisUnknown2: unknown;
declare let 나이: string | number;
declare let 언노운: unknown;
declare var 어레이: (number | string)[];
declare var 오브젝트: {
    data: number | string;
};
declare let user: string;
declare let age5: undefined | number;
declare let married2: boolean;
declare let 철수: (string | undefined | number | boolean)[];
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
};
