//로딩 마우스 효과
window.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});


//Nav 2차메뉴
$('.cabin li').click(function(e) {
    e.preventDefault();
});
$('.cabin li').mouseover(function(){
    $(this).find('.depth').stop().slideDown();
})
$('.cabin li').mouseout(function(){
    $(this).find('.depth').stop().slideUp();
})


