$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val();

    // TODO:
    // - localStorage에서 users 가져오기
    // - 중복 확인
    // - 결과 메시지 표시
    // - 중복되지 않으면 "사용하기" 버튼 활성화
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {
    // TODO:
    // - 부모창의 이메일 입력란에 값 전달
    // - 팝업창 닫기
  });
});
