$(function () {
  $("#addBtn").click(addData);
  $("#searchBtn").click(searchData);
  $("#showAllBtn").click(showAllData);
  $("#clearAllBtn").click(clearAllData);
});

/* 데이터 추가 */
function addData(e) {
  e.preventDefault();
  const name = $("#name").val().trim();
  const age = $("#age").val().trim();
  const email = $("#email").val().trim();

  // 기존에 저장된 데이터가 존재하는지 확인 없으면 빈 배열 데이터 가져오기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  /*
    Date.now() = ms초로 변환
    new Date().toLocaleString("ko-KR"); 한국 현재 시간 기준 문자열로 저장
  */
  const newUser = {
    name: name,
    age: age,
    email: email,
    createAt: new Date().toLocaleString("ko-KR"), // 현재 시간 저장, 가입한 날짜는 소비자가 선택할 권한이 없으므로 html에 존재하지 않음
  };

  // newUser 변수이름은 소비자가 작성한 데이터를 가지고 있는 변수이름

  // userList 로컬스토리지에 유저정보들을 보유하고 추후 새로운 데이터를 저장할 변수 이름

  userList.push(newUser); // 기존 userList에 새로운 유저 추가한 상태!
  // 로컬스토리지가 아닌 javaScript 내에서만 저장하겠다 되어있는 상태

  // javaScript 내에 추가된 데이터를 로컬스토리지에 저장
  // 로컬스토리지에 저장할 때 배열 -> 문자열 형태로 저장
  // 사람들의 개별 컴퓨터에 데이터를 저장하거나 특정 작업을 진행하는 것을
  // 브라우저가 못하도록 방지하지만 즐겨찾기와 같이 글자 데이터를 최소한 저장할 수 있도록
  // 문자열 OK 했기 때문에 문자열만 가능!
  // JSON.stringify 를 이용해서 배열을 문자열로 변환
  localStorage.setItem("userList", JSON.stringify(userList));
  alert("로컬스토리지에 저장되었습니다.");
}

/* 검색하기 */
function searchData(e) {
  e.preventDefault();
  const searchValue = $("#searchValue").val().trim();

  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 배열 내부에 검색한 값이 존재하는가?
  /*
    userList.filter((data) => data.name === searchValue)
    userList에서 전달 받은 목록 중에서 
    .filter() : 걸러낼 것이다.
    data : data라는 변수 이름에 userList 에서 가져온 정보를 하나씩 담아서
    data.name === searchValue : data 내부에 이름과 소비자가 검색한 value와 일치하는 것만 
    searchResult 변수 이름에 담고 있겠다
  */
  const searchResult = userList.filter((data) => data.name === searchValue);

  let html = `<h3>검색결과</h3>`;
  if (searchResult.length > 0) {
    // 검색 결과를 보여줄 것
    /*
      filter 내부에 작성된 data는 filter에서 소비자가 검색한 데이터와 일치하는지 확인하기 위해 사용
      map 내부에 작성된 data는 검색 완료된 //TODO
    */
    html += searchResult
      .map(
        (data) => `
          <div class="item-row">
            <strong>${data.name}님</strong><br>
            나이: ${data.age}<br>
            이메일: ${data.email}<br>
            가입일자: ${data.createAt}<br>
          </div>`
      )
      .join("");
  } else {
    html += `존재하지 않는 회원입니다.`;
  }
  $("#searchResult").html(html);
}

/* 모든 데이터 보기 */
function showAllData(e) {
  e.preventDefault();
  // 로컬스토리지에서 저장된 유저 목록 가져오기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");
  console.log("유저 목록 : ", userList);

  let html = `
  <h3> 저장된 사용자 목록(총 ${userList.length}명) </h3>
  `;

  // for문을 사용하되, userList 값을 모두 [i]로 가져올 것!
  for (let i = 0; i < userList.length; i++) {
    html = `
        ${userList[i].name} 님<br>
        ${userList[i].age} 세<br>
        ${userList[i].email}<br>
        가입일자 : ${userList[i].createAt}<br>
    `;
  }
  $("#allData").html(html);
}

/* 모든 데이터 삭제 */
function clearAllData(e) {
  e.preventDefault();

  // 정말로 모든 사용자를 삭제하시겠습니까 물어본 후 userList 를 [] 만들기
  if (confirm("정말로 모든 사용자를 삭제하시겠습니까?")) {
    // localStorage.removeItem("userList"); => 로컬스토리지 내에서 특정 키만 삭제
    // localStorage.clear(); =>  로컬스토리지 내부에 존재하는 모든 데이터 삭제
    localStorage.removeItem("userList");
    alert("모든 데이터가 삭제되었습니다.");
  }
}
