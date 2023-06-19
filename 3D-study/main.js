let stageElement = document.querySelector('.stage');
let houseElement = document.querySelector('.house');
let maxScrollVal;
let mousePos = {x:0, y:0};


function resizeHand (){
    maxScrollVal = document.body.offsetHeight - window.innerHeight;
//maxScrollVal : 현재 페이지에서 스크롤이 가능한 최대 픽셀 거리를 저장하는 변수
//문서(body)전체화면 높이값 - 현재 보이는 화면 높이값
}



//🎀 내린만큼 스크롤값 계산
window.addEventListener("scroll",function(){
    let scrollPer = pageYOffset / maxScrollVal;
    // scrollPer : 전체화면 스크롤값-현재스크롤값 비율구하기
    let zMove = scrollPer * 1000 - 480; 
    //zMove : houseElement 요소를 얼마나 움직일지 결정하는 역할
    houseElement.style.transform = `translateZ(${zMove}vw)`;
})
//✔ 페이지가 스크롤될 때마다 스크롤 위치에 비례하여 zMove 값을 계산하고, 이를 사용하여 houseElement 요소를 Z 축을 따라 움직이게 함 (스크롤에 따라 houseElement가 3D 공간에서 움직이는 효과)


//현재화면에서 마우스 x,y값 추출
window.addEventListener("mousemove",function(e){
    mousePos.x = (e.clientX / window.innerWidth) * 25;
    mousePos.y = -(e.clientY / window.innerWidth) * 7;

    stageElement.style.transform = `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`;
})

window.addEventListener("resize", resizeHand);
resizeHand();
