$(document).ready(function(){

    $(".board_wrap").stop().animate({ 
        "top" : 137
    }, 1700, "easeOutBounce");
    
    $(window).scroll(function() {   // 스크롤 txt 페이드아웃 페이드인
        if ($(this).scrollTop() < 50) {
            if ($(this).scrollTop() > 0)
                $('.main_txt').stop().fadeOut();
            else
                $('.main_txt').stop().fadeIn();
        }
    });
    
    gsap.to(".board_wrap", {
        scrollTrigger : {
            trigger : "#wrap",
            markers: true,
            start : "top top",
            end : "bottom bottom",
            scrub : true
        },
        y : -237
    })
})