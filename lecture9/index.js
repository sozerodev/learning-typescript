/**
 * 타입스크립트로 HTML 변경과 조작할 때 주의점
 */
// title은 Element이거나 null인 union type임
var title = document.querySelector("#title");
// 그러니까 narrowing 해준다.
// 1. null인지 아닌지 확인
if (title !== null) {
    title.innerHTML = "반가워요";
}
// 2. instanceof 연산자 사용 (가장 많이 사용)
if (title instanceof Element) {
    title.innerHTML = "반가워요";
}
// 3. as 로 거짓말치기 (assertion)
// as 왼쪽의 요소가 오른쪽에 있는 타입이라고 사기침
// 근데 잘쓰지않음. 이럴거면 TS 쓰는 이유가 없음
var title2 = document.querySelector("#title");
// title2.innerHTML = "반가워요~";
// 4. 오브젝트에 붙이는 ?. (optional chaining)
// 값이 없으면 undefined를 뱉음
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = "반가워요";
}
// 5.
// tsconfig.json에서 "strictNullChecks" 를 false로 바꿔버리기
// ------------
var thisLink = document.querySelector(".link");
// ts가 제공하는 기본 타입이 있는데 대표적으로 Element타입과 그 상속의
// HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement가 있음
// Element타입은 별거 없음. 그 밑의 세개들의 경우 href, style, class..등등 이런 것들을 쓸 수 있다.
if (thisLink instanceof HTMLAnchorElement) {
    // <button> 태그면 HTMLButtonElement
    // <h1> 태그면 HTMLHeadingElement
    // ... <태그>마다 정해져있다.
    thisLink.href = "https://www.kakao.com";
}
var button = document.querySelector("#button");
// ?. optional chaining으로도 narrowing이 인정됨
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("here!");
});
// 숙제1.
var imgButton = document.querySelector("#imgButton");
imgButton === null || imgButton === void 0 ? void 0 : imgButton.addEventListener("click", function () {
    var imgElement = document.querySelector("#homeworkImg");
    if (imgElement instanceof HTMLImageElement) {
        imgElement.src = "changeImg.jpg";
    }
});
// 숙제2.
var links = document.querySelectorAll(".naver");
if (links.length > 0 && links instanceof Object) {
    links.forEach(function (element) {
        if (element instanceof HTMLAnchorElement) {
            element.href = "https://kakao.com";
        }
    });
}
