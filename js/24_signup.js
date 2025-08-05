$(function () {
  // 1. 중복확인 버튼 클릭 시 팝업 열기
  $("#emailCheck").click(function () {
    // 팝업 설정
    const popupWidth = 450;
    const popupHeight = 450;
    // 화면 중앙에 팝업 띄우기
    const popupLeft = (window.screen.width - popupWidth) / 2;
    const popupTop = (window.screen.height - popupHeight) / 2;

    const options = `
    width = ${popupWidth},
    height = ${popupHeight},
    left = ${popupLeft},
    top = ${popupTop},
    `;
    // 팝업
    window.open("24_emailCheck.html", "_blank", options.toString());
  });

  // 2. 회원가입 폼 제출
  $("#signupForm").submit(function (e) {
    e.preventDefault();

    // TODO:
    // - 입력값 가져오기
    // - localStorage에 저장
    // - 성공 메시지 표시
  });
});
