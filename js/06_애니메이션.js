$(function () {
  /* 1. 모달 팝업 */
  $("#openModal").click(function () {
    // HINT: #modalOverlay를 fadeIn(300)으로 나타내세요
    $("#modalOverlay").fadeIn(300);
  });

  $("#closeModal").click(function () {
    // HINT: #modalOverlay를 fadeOut(300)으로 사라지게 하세요
    $("#modalOverlay").fadeOut(300);
  });

  $("#modalOverlay").click(function (e) {
    // HINT: e.target이 자기 자신일 때만 닫기 (이벤트 버블링 방지)
    /*
        modalOverlay는 모달이 존재하는 전체 화면

        modal-content : 실제 모달 창

        e.target === this : 모달 modalOverlay의 배경 영역을 직접 클릭했을 때
        조건이 false 인 경우는 modal-content나 그 안의 요소를 클릭했을 때

        이벤트 버블링 : 자식 요소에서 발생한 이벤트가 부모 요소로 차례차례 전달되는 현상
    */
    if (e.target === this) {
      $("#modalOverlay").fadeOut();
    }
  });

  /* 2. 탭 메뉴 */
  $(".tab-btn").click(function () {
    /// data-tab 속성값을 가져와서
    const targetTab = $(this).data("tab");
    // 모든 탭 버튼에서 active 클래스를 제거한 후 현재 클릭한 버튼에만 .active 추가
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    // 모든 .tab-content를 slideUP하고, 해당 탭만 slideDown
    // 메서드  .slideUp()  .slideDown() 기본 속도 400ms
    $(".tab-content").slideUp();
    $("#" + targetTab).slideDown();
  });
});
