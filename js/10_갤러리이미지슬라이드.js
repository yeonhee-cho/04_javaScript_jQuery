$(function () {
  let 현재페이지 = 0;
  const width = 300;
  const 이미지총갯수 = $(".slide").length;

  /*
    left: -width * 현재페이지,
    첫 번째 이미지(현재페이지 = 0)
    left: -300px * 0 = 0
    슬라이드 위치가 0 원래 위치에 존재

    두번째 이미지(현재페이지 = 1)
    left: -300px * 1 = -300px
    슬라이드 래퍼가 왼쪽으로 300px 이동
    
    두번째 이미지(현재페이지 = 2)
    left: -300px * 2 = -600px
    슬라이드 래퍼가 왼쪽으로 600px 이동
  */

  $("#next").click(function () {
    // 1. 현재 페이지가 이미지 총 갯수보다 적을 때
    if (현재페이지 < 이미지총갯수 - 1) {
      현재페이지++;
      $(".slide-wrap").animate(
        {
          // 이미지를 왼쪽으로, 0.5초 동안 교체할 것
          left: -width * 현재페이지,
        },
        500
      );
    } else {
      alert("마지막 이미지입니다.");
    }
  });

  $("#prev").click(function () {
    // 2. 이전 페이지가 0보다 클 때
    if (현재페이지 > 0) {
      현재페이지--;
      $(".slide-wrap").animate(
        {
          left: -width * 현재페이지,
        },
        500
      );
    }
  });
});
