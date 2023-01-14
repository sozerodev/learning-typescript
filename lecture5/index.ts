/**
 * 타입 확정하기 Narrowing & Assertion
 */

function thisFunc(x: number | string) {
  // 다음과 같이 x가 number와 string이 가능한 Union type인 경우
  // x의 조건을 따지는 것을 통해 Type Narrowing을 써야 한다.

  // type narrowing
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function thisFunc2(x: number | string) {
  let array: number[] = [];
  // array[0] = x; // x라는 변수는 string도 가능한 union type이니 에러가 남
  if (typeof x === "number") {
    array[0] = x;
  } else {
    // 주의!
    // if문 썼으면 끝까지 써야 안전. else, else if 를 안쓰면 에러로 잡을 수도 있음
  }
}

// Narrowing쓰기가 귀찮다면.. assertion
function thisFunc3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // 왼쪽 변수를 number로 인식해주세요
}

function homework1(lst: (string | number)[]) {
  const new_lst: number[] = lst.map((element) => {
    if (typeof element === "string") {
      return parseInt(element);
    } else if (typeof element === "number") {
      return element;
    } else {
      return null;
    }
  });

  return new_lst;
}

function chkTeacherSubject(info: { subject: string | string[] }) {
  if (typeof info.subject === "string") {
    return info.subject;
  } else if (
    Array.isArray(info.subject) &&
    info.subject.length > 0 &&
    info.subject.every((value) => typeof value === "string")
  ) {
    return info.subject[info.subject.length - 1];
  } else {
    return Error();
  }
}
