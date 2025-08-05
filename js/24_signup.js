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

    // - 입력값 가져오기
    // 이메일 확인
    const email = $("#inputEmail").val();
    if (!email) {
      alert("이메일 중복확인을 먼저 해주세요.");
      return;
    }

    // 전화번호 확인
    const phone = $("#phone").val();
    if (!phone) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    // - localStorage에 저장
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = {
      email: email,
      phone: phone,
    };

    users.push(users);
    localStorage.setItem("users", JSON.stringify(users));

    // - 성공 메시지 표시
    alert("회원가입 성공!", username, password);
  });
});
