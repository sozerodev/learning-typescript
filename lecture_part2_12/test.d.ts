/**
 * 프로젝트에서 사용하는 타입정의 보관용 파일
 * 인터페이스든 타입이든 뭐든 타입 정의용!
 *
 * 진짜 그냥 타입정의 보관용 파일일 뿐..
 * 다른 ts파일에서 import가 가능함.
 *
 *
 * ts 파일에 타입 정의가 너무 길면 d.ts 파일을 만들기도 함.
 * 근데 import/export할게 너무 많다면
 * namespace를 쓰든지,, import * as 어쩌구 쓰든지.
 *
 */

export type Age = number;
export interface Person {
  name: string;
}
