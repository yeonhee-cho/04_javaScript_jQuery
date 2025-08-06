$(function () {
  $("#closePopup").click(closePopup);
  $("#login").click(login);
  $("#goToSignup").click(goToSignup);
});

/* 팝업 닫기 */
function closePopup() {
  // 팝업 닫기
  window.close();
}

/* 로그인 */
function login(e) {
  e.preventDefault();
}

/* 회원가입 */
function goToSignup() {
  closePopup();
  // 이전 창에서 열리게 -> window 대신 opener
  //   opener.location.href = "register.html";
}
