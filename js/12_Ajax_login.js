// 사용자 샘플 데이터
// DB -> JAVA -> 프론트엔드로 데이터를 가져오거나
// 프론트엔드 -> JAVA -> DB 에서 소비자가 요청한 데이터가 존재하는지 확인
// 존재한다면 DB -> JAVA -> 프론트엔드로 데이터 전달 / 없으면 전달할 것이 없음

$(function () {
  // 로그인 버튼을 클릭했을 때 ajax를 작동!
  $("#로그인기능").click(function (e) {
    // 1. button 제출 방지
    e.preventDefault(); // submit 잠시 멈춤 -> 정규식이나 비밀번호 아이디 일치하는지 // TODO
    const abc = $("#username").val();
    const password = $("#password").val();

    $.ajax({
      url: "../json/data.json", // data.json 파일이 위치한 곳으로 url 주소 설정
      method: "GET",
      dataType: "json",
      success: function (data) {
        console.log("성공적으로 json에서 가져온 데이터 확인하기 : ", data);
        // 1. 데이터를 무사히 url에 접속해서 가져왔는데 데이터가 존재하지 않을 경우
        // 2. 데이터가 사용자가 작성한 아이디 비밀번호와 일치하지 않기 때문에 // TODO 가져올 수 없을 경우 -> 일치하는 고객이 존재하지 않습니다.
        // 3. 데이터가 존재할 경우

        // 만약에 json에서 확인한 데이터와 소비자가 작성한 데이터가 일치한다면
        /*
          javascript에서 [] . 으로 데이터를 주고 받을 때의 차이
          users[abc] = abc의 변수의 값이 admin인 속성을 찾을 때 사용
          
          users.abc = 속성명이 고정된 문자열 일 때 사용
          -> users 안에 abc라는 id가 존재하는가?

          users[abc]
          -> users 안에 abc라는 변수 이름으로 가져온 값이 존재하는가?

          예를 들어 username.value값으로 admin이 들어왔을 경우
          users[abc] -> user[admin] 으로 변경되어 admin과 일치하는 아이디를 검색
        */

        // abc가 존재하는가 확인 먼저 하기!!
        if (data.users[abc]) {
          // 사용자가 존재할 때
          if (data.users[abc].password === password) {
            $("#result").html(
              `로그인 성공! 환영합니다. ${data.users[abc].name} 님`
            );
            $("#로그인기능").hide();
            $("#로그아웃기능").show();
          } else {
            // 사용자가 존재하지만, 비밀번호가 일치하지 않을 때
            $("#result").html("일치하는 아이디나 비밀번호가 없습니다.");
          }
        } else {
          // 사용자가 존재하지 않을 때
          $("#result").html("존재하는 아이디가 없습니다.");
        }
      },
      error: function () {
        alert("데이터 가져오는데 실패했습니다.");
      },
    });
  });

  $("#로그아웃기능").click(function (e) {
    // 로그아웃을 진행할 경우
    // 로그인기능 show 보여주기
    // 로그아웃기능 hide 숨기기 설정
    e.preventDefault(); // 로그아웃 button 태그 내부에 type = submit 로 설정되어 있어, 제출방지
    $("#로그인기능").show();
    $("#로그아웃기능").hide();
    $("#username").val("");
    $("#password").val("");
    $("#result").html("로그아웃이 완료되었습니다.");
  });
});
