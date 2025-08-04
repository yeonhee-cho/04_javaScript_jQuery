$(function () {
  // localStorage에서 데이터 가져오기
  // setItem 안에서 ("첫 번째", "") 첫 번째 큰 따옴표 내부에 있는 명칭을 그대로 작성!
  const username = localStorage.getItem("username");
  const userPw = localStorage.getItem("userPw");

  // 데이터가 있으면 표시
  if (username) {
    $("#resultId").text(username);
  } else {
    $("#resultId").text("회원가입에서 작성한 아이디를 찾을 수 없습니다.");
  }
  if (userPw) {
    $("#resultPw").text(userPw);
  } else {
    $("#resultPw").text("회원가입에서 작성한 비밀번호를 찾을 수 없습니다.");
  }
});
