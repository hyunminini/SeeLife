$(document).ready(function() {
  // 여기서부터 click_nav event //
    
  let onOff = true;

  $(".click_btn").click(function() {
    $(this).toggleClass("on");

    onOff = !onOff;

    if (onOff === false) {
      $(".click_nav")
        .stop()
        .animate({
          right: 0
        });
    } else {
      $(".click_nav")
        .stop()
        .animate({
          right: "-100%"
        });
    }
  });
    
  // 여기서부터 조개 이미지 on off //
    
  $("#img1").show();
  $("#img2").hide();

  $("#img1").click(function() {
    $("#img1").hide();
    $("#img2").show();
  });

  $("#img2").click(function() {
    $("#img1").show();
    $("#img2").hide();
  });
    
  // 여기서부터 모듈팝업 img click event //
    
   
}); ///종료
