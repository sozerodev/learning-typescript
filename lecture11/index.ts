/**
 * prototype이해하기
 * prototype을 통해 자식 object에게 데이터를 물려줄 수 있다
 */

function Machine1() {
  // 여기에 쓰면 자식이 직접 가진다.
  this.q = "strike";
  this.w = "snowball";
}

// prototype에 뭔가를 추가하면.. 자식들이 사용 가능해짐
Machine1.prototype.name = "kim"; // <-- 유전자에 추가. 부모만 가지며 자식이 끌어쓸 수 있음

var nunu = new Machine1();
