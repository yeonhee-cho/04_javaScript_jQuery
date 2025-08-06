$(function () {
  $("#changeImage").click(imgFn);
  $("#changeAlt").click(altFn);
  $("#changeLink").click(linkFn);
  $("#disableInput").click(disInputFn);
  $("#enableInput").click(enIntFn);
  $("#checkAttr").click(attrFn);
  $("#checkProp").click(propFn);
  $("#setData").click(setFn);
  $("#getData").click(getFn);
});

/* 이미지 변경 */
function imgFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("src", "../img/pumkin.png");
}

/* alt 텍스트 변경 */
function altFn(e) {
  e.preventDefault();
  $("#moviePoster").attr("alt", "변경된 alt 설명 속성 테스트");
  alert("alt속성이 변경되었습니다. F12를 눌러 확인하세요.");
  // $("#moviePoster").attr("id", "logo"); // 속성 다 변경 가능
}

/* 구글로 링크 변경 */
function linkFn(e) {
  e.preventDefault();
  $("#link").attr("href", "https://google.com");
}

/* 입력창 비활성화 */
function disInputFn(e) {
  e.preventDefault();
  // $("#textInput").attr("disabled", "disabled");
  // $("#textInput").attr("disabled", "");
  // $("#textInput").attr("disabled", true);
  // $("#textInput").addClass("disabled");

  $("#textInput").attr("disabled", "").addClass("disabled");
}

/* 입력창 활성화 */
function enIntFn(e) {
  e.preventDefault();
  $("#textInput").removeAttr("disabled").removeClass("disabled");
}

/*
    .attr()과 .prop() 차이
    .attr()
        - HTML 코드에 써진 속성 초기값 그대로 보임 
          속성을 설정할 때 변경 사항까지 작성해야함
    .prop()
        - 사용자와 상호 작용하며 현재 상태를 확인할 수 있음

*/
/* attr() 체크 상태 확인 */
function attrFn(e) {
  e.preventDefault();
  const checked = $("#checkbox").attr("checked");
  // attr로 속성 변경 원한다면
  // $("#checkbox").attr("checked", "checked");
  // $("#checkbox").attr("checked", true);
  // $("#checkbox").attr("checked", "");
  // 로 속성 설정을 변경하는 값까지 추가해야함
  alert(".attr() 결과 : " + (checked || "없음"));
}

/* prop() 체크 상태 확인 */
function propFn(e) {
  e.preventDefault();
  const checked = $("#checkbox").prop("checked");
  alert(".prop() 결과 : " + checked);
}

/* data-id 설정 */
function setFn(e) {
  e.preventDefault();
  $("#dataElement").attr("data-id", "12345");
  alert("data-id가 설정되었습니다.");
}

/* data-id 가져오기 */
function getFn(e) {
  e.preventDefault();
  const dataId = $("#dataElement").attr("data-id");
  alert("data-id : ", dataId || "없음");
}
