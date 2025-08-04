$(function () {
  showUsers();
});

function showUsers() {
  // localStorage에서 모든 데이터를 담을 수 있는 리스트 변수이름 생성
  const user = []; // localStorage에 저장된 정보를 목록 형태로 user 내부에 담아둘 것

  // username, userPw가 있으면 배열에 추가
  const username = localStorage.getItem("username");
  const userPw = localStorage.getItem("userPw");

  if (username && userPw) {
    user.push({
      id: username,
      pw: userPw,
    });
  }

  // 사용자 총 회원 수 표시 users.length
  // 사용자가 없으면 (users.length === 0) no-user 보이게!
  // map 사용해서 HTML로 소비자가 유저 리스트 목록을 확인할 수 있도록 설정
  const userHTML = user.map(
    (u) => `
        <div class="user-item">
            <div class="user-id">아이디 : ${u.id}</div>
            <div class="user-pw">비밀번호 : ${u.pw}</div>
        </div>
    `
  );

  $("#userList").html(userHTML);
}
