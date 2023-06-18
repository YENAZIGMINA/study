//querySelector는 css형식으로 부를 수 있다, 이것도 getelement~처럼 배열로 들어온다
let stageEle = document.querySelector(".stage");
let houseEle = document.querySelector(".house");
let maxScrollValue; //실제 스크롤이 움직이는 높이값
let mousePos = {
  x: 0,
  y: 0,
}; //객체형식

function resizeHandler() {
  //현재 .world를 fixed 시켜놔서 world가 보이는 상황인데 body의 높이값을 찾는방법
  //전체 스크롤값
  maxScrollValue = document.body.offsetHeight - window.innerHeight;
  //maxScrollVal : 현재 페이지에서 스크롤이 가능한 최대 픽셀 거리를 저장하는 변수
  //문서(body)전체화면 높이값 - 현재 보이는 화면 높이값
}

//내린만큼의 스크롤값 / window scrollTop값
window.addEventListener("scroll", function () {
  let scrollPer = pageYOffset / maxScrollValue;
  //console.log(scrollPer) //최대1
  let zMove = scrollPer * 970 - 480; //-480하는 이유는 튕기지 말라고??
  houseEle.style.transform = `translateZ(${zMove}vw)`;
});

window.addEventListener("mousemove", function (e) {
  //console.log(e.clientX)

  //e.clientX/ : 현재 화면에서 마우스의 x값을 추출
  //e.clientY/ : 현재 화면에서 마우스의 y값을 추출
  //window.innerWidth : 현재화면의 넓이값
  //window.innerHeight : 현재화면의 높이값
  mousePos.x = (e.clientX / window.innerWidth) * 10;
  mousePos.y = -(e.clientY / window.innerHeight) * 5;

  stageEle.style.transform = `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`;
});

window.addEventListener("resize", resizeHandler);
resizeHandler();