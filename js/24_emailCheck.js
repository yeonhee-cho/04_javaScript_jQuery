$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val();

    // - localStorage에서 users 가져오기
    // - 중복 확인
    let userList = JSON.parse(localStorage.getItem("users") || "[]");

    /*
     .includes() : 문자열이나 배열에서 특정 값이 포함되어 있는지 확인하는 메서드
                  filter보다 더 많이 검색에서 사용
     .filter() : 조건에 맞는 모든 요소를 배열로 반환 결과가 목록, 배열 검색/수정 할 때 많이 사용
                 filter는 배열로 데이터를 가져오기 때문에 .length로 값이 한 개라도 존재하는가 비교해야함

     .some() : 조건에 맞는 요소가 하나라도 있으면 true 결과가 BOOLEAN

     .find() : 조건에 맞는 첫 번째 요소만 반환
    */
    const isDup = userList.some((u) => u.email === email);

    // if (isDup.length > 0) { filter를 사용할 때는 length와 비교 필요
    if (isDup) {
      $("#result").html(
        `<span style="color:red;">이미 사용 중인 이메일입니다.</span>`
      );
      $("#send").prop("disabled", true);
    } else {
      $("#result").html(
        `<span style="color:green;">사용 가능한 이메일입니다.</span>`
      );
      $("#send").prop("disabled", false);
    }
    // - 결과 메시지 표시
    // - 중복되지 않으면 "사용하기" 버튼 활성화
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {
    // 부모창의 이메일 입력란에 값 전달
    // 순수 자바스크립트와 jquery랑 언제든지 혼용해서 사용 가능하다.
    // 순수 자바스크립트 조합                                    jquery조합
    // opener.document.getElementById("inputEmail").value = $("#childEmail").val();

    // jquery 조합                      jquery조합
    // opener.$("#inputEmail").val() = $("#childEmail").val();
    opener.$("#inputEmail").val($("#childEmail").val());
    // 팝업창 닫기
    window.close();
  });
});
