$(function () {
  $("#로그인기능").click(function (e) {
    e.preventDefault();
    const abc = $("#username").val();
    const password = $("#password").val();

    $.get("../json/data.json", function (data) {
      console.log("성공적으로 json에서 가져온 데이터 확인하기 : ", data);
      if (data.users[abc]) {
        if (data.users[abc].password === password) {
          $("#result").html(
            `로그인 성공! 환영합니다. ${data.users[abc].name} 님`
          );
          $("#로그인기능").hide();
          $("#로그아웃기능").show();
        } else {
          $("#result").html("일치하는 아이디나 비밀번호가 없습니다.");
        }
      } else {
        $("#result").html("존재하는 아이디가 없습니다.");
      }
    }).fail(function () {
      alert("데이터 가져오는데 실패했습니다.");
    });
  });

  $("#로그아웃기능").click(function (e) {
    e.preventDefault(); // 로그아웃 button 태그 내부에 type = submit 로 설정되어 있어, 제출방지
    $("#로그인기능").show();
    $("#로그아웃기능").hide();
    $("#username").val("");
    $("#password").val("");
    $("#result").html("로그아웃이 완료되었습니다.");
  });
});
