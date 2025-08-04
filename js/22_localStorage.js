$(function () {
  $("a").click(signUp);
});

function signUp(e) {
  e.preventDefault(); // 기본 링크 동작 방지
  // 제출하기 일시정지 상태로 아래 정규식, 데이터 저장 여부등과 같은 규정을 모두 확인한 후 result.html으로 이동할 수 있도록 설정

  // 입력값 가져오기
  const username = $("#username").val();
  const userPw = $("#userPw").val();

  // 서버로 전송할 데이터
  // userData 형식 -> 추후 DB에 저장할 때 사용
  /*
  const userData = {
    username: username,
    password: userPw,
  };
  */
  // json 저장할 때 사용 예정 DB에 저장할 때 나중에 등장 예정! $.post()

  /* 
    username과 userPw는 맨 마지막에 가입된 사람의 정보로 덮어쓰기가 됨!
    그래서 기존 회원 목록 가져오기(없으면 빈 배열 형태)
    배열에 기존 회원 목록 뒤에 새로 가입한 유저의 목록 추가
    localStorage에 목록 리스트 형태로 저장
  */
  // 기존 회원 목록 가져오기(없으면 빈 배열 형태) 가져온 값을 userList 변수에 담아두기
  let userList = JSON.parse(localStorage.getItem("userList") || []);

  // 새 회원 정보를 담을 json 형태의 배열 생성
  const newUser = {
    username: username,
    password: userPw,
  };
  // 빈 배열이나 기존 배열에 새로운 유저 정보를 추가
  userList.push(newUser);

  // localStorage에 배열로 저장 -> userList.html에서 유저 목록을 확인하기 위한 배열 저장 형태
  localStorage.setItem("userList", JSON.stringify(userList));

  // localStorage에 개별 저장
  // result.html에서 개별 사용자가 본인이 회원가입을 무사히 했는지 확인하기 위한 변수이름 저장 형태
  localStorage.setItem("username", username);
  localStorage.setItem("userPw", userPw);

  // 모두 저장하고 나서 결과 페이지로 이동
  window.location.href = "22_result.html";
}
