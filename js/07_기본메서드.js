$(document).ready(function () {
  // ========================================
  // 여기에 jQuery 코드를 작성하세요
  // ========================================

  // 과제 1: 로그인 모달 기능 구현
  // HINT: #myPageBtn 클릭 시 #loginModal을 fadeIn(300)
  // HINT: #closeModal 클릭 시 #loginModal을 fadeOut(300)
  // HINT: 모달 배경 클릭 시에도 fadeOut (이벤트 버블링 주의!)

  $("#myPageBtn").click(function () {
    // 여기에 모달 열기 코드 작성
    $("#loginModal").fadeIn(300);
  });

  $("#closeModal").click(function () {
    // 여기에 모달 닫기 코드 작성
    $("#loginModal").fadeOut(300);
  });

  $("#loginModal").click(function (e) {
    // 여기에 배경 클릭 시 모달 닫기 코드 작성
    // HINT: e.target === this 조건 사용

    if (e.target === this) {
      $("#loginModal").fadeOut(300); // 기본이 400
    }
  });

  // 모달 내용 클릭 시 이벤트 버블링 방지
  $(".modal-content").click(function (e) {
    // 여기에 이벤트 버블링 방지 코드 작성
    console.log(".modal-content", e);

    // if (e.target === this) {
    //   $("#loginModal").fadeOut(300);
    // }
    // 혹은 stop Pro pa ga tion
    /* 
        둘 다 모두 모달 내부를 클릭했을 때 꺼짐 방지 설정
        방법 1. 조건부로 ~~식으로 처리하겠다 어디만 하겠다와 같은 형식 설정이 가능하다.
        if (e.target === this) {
           $("#loginModal").fadeOut(300);
        }
        방법 2. 조건부 형식 설정 없이 모달 내부를 클릭했을 때 꺼짐 방지 설정
        e.stopPropagation();
        특정 행동이 전달되지 않도록 설정
    */
    e.stopPropagation();
  });

  // 과제 2: 애니메이션 탭 메뉴 구현
  // HINT: .tab-btn 클릭 시 data-tab 속성값 읽기
  // HINT: 모든 .tab-content를 slideUp(300)하고 해당 탭만 slideDown(300)
  // HINT: active 클래스도 적절히 추가/제거

  $(".tab-btn").click(function () {
    // 여기에 탭 메뉴 코드 작성
    const targetTab = $(this).data("tab"); // data-tab 속성값
    $(".tab-content").slideUp(300);
    $("#" + targetTab).slideDown(300);
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
  });

  // 과제 3: 3D 카드 플립 효과 구현
  // HINT: .card 클릭 시 toggleClass("flipped")
  // HINT: CSS는 이미 작성되어 있음

  $(".card").click(function () {
    // 여기에 카드 플립 코드 작성
    $(this).toggleClass("flipped");
  });

  // 추가 기능: 폼 제출 처리 (선택사항)
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    alert("로그인 기능은 데모용입니다!");
  });

  // 기타 네비게이션 버튼들
  $("#homeBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $("#contactBtn").click(function () {
    alert("📞 연락처: contact@thejoheunnara.com");
  });
});
