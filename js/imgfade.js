$(document).ready(function(){
                  
    // 터널 클릭 이벤트 //
  $(".click_tunnel").on("click", function() {
    $(".cover").fadeIn();

    $(".cover .close").on("click", function() {
      $(".cover").fadeOut();
    });
  });
    // 해파리목장 클릭 이벤트 //
  $(".click_jell").on("click", function() {
    $(".cover2").fadeIn();

    $(".cover2 .close").on("click", function() {
      $(".cover2").fadeOut();
    });
  });
    // 수달이네 집 클릭 이벤트 //
  $(".click_sudal").on("click", function() {
    $(".cover3").fadeIn();

    $(".cover3 .close").on("click", function() {
      $(".cover3").fadeOut();
    });
  });
    // 상어보트 클릭 이벤트 //
  $(".click_shark").on("click", function() {
    $(".cover4").fadeIn();

    $(".cover4 .close").on("click", function() {
      $(".cover4").fadeOut();
    });
  });
    // 기념품 상점 클릭 이벤트 //
  $(".click_pengin").on("click", function() {
    $(".cover5").fadeIn();

    $(".cover5 .close").on("click", function() {
      $(".cover5").fadeOut();
    });
  });
    // 비디오 클릭 이벤트 //
  $(".video").on("click", function() {
    $(".cover6").fadeIn();

    $(".cover6 .close").on("click", function() {
      $(".cover6").fadeOut();
    });
  });
                  
})