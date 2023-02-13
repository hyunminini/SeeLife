$(document).ready(function(){
    
        let onOff = true;
        
        $(".all_btn").click(function(){
            $(this).toggleClass("on");
            
            onOff = !onOff;

            if(onOff === false){
                $("nav").stop().animate({
                    "left" : 0
                })
            } else {
                $("nav").stop().animate({
                    "left" : "-100%"
                })
            }
        })
    
    
        $('.insect_ul li').on('click', function(){
            var i = $(this).index()
                console.log(i)
           
           $('.bug').eq(i).fadeIn(500).siblings().fadeOut(500)
       })
    
        var h = $('section').height();
        var scr = $(window).scrollTop()
        console.log(scr)
        $('.sub li').on('click', function(){
        var i = $(this).index()
        
        console.log(i)
        
        $('html, body').animate({
            'scrollTop' : h * i
        })
        
        $(this).addClass('on').siblings().removeClass('on');
    })
    
    $('.insect_ul li').on('click', function(){
        $(this).addClass('op').siblings().removeClass('op')
    })
    
     $(window).on('scroll', function() {
        var scr = $(window).scrollTop()
        
        for(i=0; i<$('li').length; i++){
            if(scr >= h * i && scr < h * (i+1)){
                $('.sub li').removeClass('on');
                $('.sub li').eq(i).addClass('on');
            }
        }
         
         
         var sectionHeight =  $(".s4").height() / 5;
         var sectionOffset = $(".s4").offset().top;
         
         for(i=0; i<5; i++){
            if(scr >= sectionOffset + sectionHeight * i && scr < sectionOffset + sectionHeight * (i+1)){
                $(".s4_btnWrap div").eq(i).addClass("view").siblings().removeClass("view");

            }
         }
         
         for(i=0; i<5; i++){
            if(scr >= sectionOffset + sectionHeight * i && scr < sectionOffset + sectionHeight * (i+1)){
                $(".s4_txt").eq(i).addClass("block").siblings().removeClass("block");

            }
         }        
         
        for(i=0; i<5; i++){
            if(scr >= sectionOffset + sectionHeight * i && scr < sectionOffset + sectionHeight * (i+1)){
                $(".ani").eq(i).addClass("aniblock").siblings().removeClass("aniblock");

            }
         }
         
         for(i=0; i<5; i++){
            if(scr >= sectionOffset + sectionHeight * i && scr < sectionOffset + sectionHeight * (i+1)){
                $(".dot").eq(i).addClass("dotblock").siblings().removeClass("dotblock");

            }
         }        

    })

    gsap.registerPlugin(MotionPathPlugin);
    gsap.to(".mo_wrap", {
        duration: 6,
        repeat: -1,
        repeatDelay: 1,
        ease: "Power1.easeOut",
        rotation: -30,
        motionPath: {
            type: "cubic",
            path: [
                {x: 0, y: 0},
                {x: -10, y: -90},
                {x: 70, y: 0},
                {x: 60, y: -90},
            ]
        }
    });
    
        gsap.to(".ant_wrap", {
        duration: 6,
        repeat: -1,
        repeatDelay: 1,
        ease: "Power1.easeOut",
        rotation: 5,
        motionPath: {
            type: "cubic",
            path: [
                {x: 30, y: 0},
                {x: -20, y: -90},
                {x: -60, y: 0},
                {x: -40, y: -120},
            ]
        }
    });
    
        gsap.to(".cock_wrap", {
        duration: 6,
        repeat: -1,
        repeatDelay: 1,
        ease: "Power1.easeOut",
        rotation: 5,
        motionPath: {
            type: "cubic",
            path: [
                {x: 100, y: 0},
                {x: 40, y: -90},
                {x: 60, y: 0},
                {x: -20, y: -100},
            ]
        }
    });

    $(".insect_ul li").on('click', function(d){
        d.preventDefault();
    })
    
    $(".txt a").on('click', function(c){
        c.preventDefault();
    })
    
    $('.ser_btn').on('click', function(e){
        e.preventDefault(); 
    })
    
    $(window).scroll(function(){
        var height = $(document).scrollTop;
        console.log(height);
    })
    
    $(window).scroll(function(){
        if($(window).scrollTop() > $('.sub li').height() + 400) {
            $('.sub li').addClass('down')
        } else if($(window).scrollTop() < $('.sub li').height() + 400) {
            $('.sub li').removeClass('down');
        }   if($(window).scrollTop() > $('.s1_logo').height() + 750) {
            $('.whitelogo').addClass('c')
        } else if($(window).scrollTop() < $('.s1_logo').height() + 750) {
            $('.whitelogo').removeClass('c');
        }   if($(window).scrollTop() > $('.s1_logo').height() + 750) {
            $('.bluelogo').addClass('b')
        } else if($(window).scrollTop() < $('.s1_logo').height() + 750) {
            $('.bluelogo').removeClass('b')
        }   if($(window).scrollTop() > $('.all_btn').height() + 700) {
            $('.all_btn span').addClass('d')
        } else if($(window).scrollTop() < $('.all_btn').height() + 700) {
            $('.all_btn span').removeClass('d')
        }   if($(window).scrollTop() > $('.s1_logo').height() + 3200) {
            $('.whitelogo').addClass('f');
        } else if($(window).scrollTop() < $('.s1_logo'). height() + 3200) {
            $('.whitelogo').removeClass('f');
        }   if($(window).scrollTop() > $('.s1_logo').height() + 3100) {
            $('.bluelogo').addClass('g')
        }   else if($(window).scrollTop() < $('.s1_logo').height() + 3100) {
            $('.bluelogo').removeClass('g')
        }   if($(window).scrollTop() > $('.s1_logo').height() + 4000) {
            $('.whitelogo').addClass('i');
        }   else if($(window).scrollTop() < $('.s1_logo'). height() + 4000) {
            $('.whitelogo').removeClass('i');
        }   if($(window).scrollTop() > $('.s1_logo').height() + 4000) {
            $('.bluelogo').addClass('h')
        }   else if($(window).scrollTop() < $('.s1_logo').height() + 4000) {
            $('.bluelogo').removeClass('h')
        }   if($(window).scrollTop() > $('.all_btn').height() + 3050) {
            $('.all_btn span').addClass('v')
        }   else if($(window).scrollTop() < $('.all_btn').height() + 3050) {
            $('.all_btn span').removeClass('v')
        }   if($(window).scrollTop() > $('.all_btn').height() + 3950) {
            $('.all_btn span').addClass('n')
        }   else if($(window).scrollTop() < $('.all_btn').height() + 3950) {
            $('.all_btn span').removeClass('n')
        }   
    })
    
   
    

})
    
    