$(function () {
  // .click() 내부에 함수를 작성할 때 : 기능 명칭만 작성하고 () 제외
  // 특별히 메서드 내부에 함수를 작성하지 않고, 단독으로 함수를 작성 할 때
  // 기능명칭();

  // 로그아웃 버튼이 html에 존재한다는 가정
  $("#loginBtn").click(loginCheck);
  $("#loginBtn").click(logoutCheck);

  // 로그인 버튼이 html에 존재하지 않는다는 가정
  //   let isLoggedIn = false;

  //   $("#loginBtn").click(function () {
  //     if (isLoggedIn) {
  //       loginCheck();
  //     } else {
  //     }
  //   });
});

function loginCheck() {
  // 1. html 내부에 소비자가 작성한 값을 가져오기 위해서 val() 메서드 활용
  const username = $("#username").val();
  const password = $("#password").val();

  if (!username || !password) {
    // username과 password 가 아무것도 적혀있지 않은데 맞다면
    $("loginResult").html(` 
        <div class="error">아이디와 비밀번호를 입력하세요.</div>
        `);
    return; // if문을 탈출한 후 아래에 작성된 코드를 실행하지 못하도록 돌려보내기
  }

  $("#loginResult").html(`<div class="loading">로그인 중입니다...</div>`);

  if (
    (username === "admin" && password === "1234") ||
    (username === "user" && password === "1234")
  ) {
    $(".form-group").hide();
    $("#logInBtn").show();
    $("#logoutBtn").show(); // TODO

    $("#loginResult").html(
      `
    <div class="success">
        <p><strong>로그인 성공!</strong></p>
        <p>${username}님, 환영합니다.</p>
    </div>
    `
    );
  } else {
    $("#loginResult").html(`
        <div class="error">아이디 또는 비밀번호가 일치하지 않습니다.</div>
        `);
  }
}

// 1.form-group 숨김처리 loginBtn -> 로그아웃 버튼으로 변경
// 2. 로그아웃 버튼 클릭했을 경우 form-group 보이고 로그인 버튼으로 변경
function logoutCheck() {
  // 입력필드 초기화
  $("#username").val("");
  $("#password").val("");

  // UI원래대로 복구
  $(".form-group").show();
  $("#logInBtn").show();
  $("#logoutBtn").hide(); // -> 2번 방법을 사용했을 떄는 사용하지 않는다
  // $("#loginBtn").text("로그인"); // -> 2번 방법을 사용했을 때 사용하는 방법

  // 로그아웃 메세지 표시
  $("#loginResult").html(
    `<div class="success">로그아웃이완료되었습니다. </div>`
  );

  // 1초 후에 로그아웃 메세지 사라지게 하기 - timeout
  // 1000 = 1초
  setTimeout(function () {
    $("#loginResult").html("");
  }, 1000);
}
