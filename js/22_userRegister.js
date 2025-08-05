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
  /*
    localStorage 는 문자열만 저장 가능
    JSON.parse() : JSON 형식의 문자열(String)을 javascript의 객체(Object)나 배열(Array)로 변환
                   문자열 -> 객체 배열 형태로 변환
    JSON.stringify() : javascript 의 객체(Object)나 배열(Array)을 JSON 형식의 문자열(String) 변환
                       객체 or 배열 -> 문자열 변환
    .setItem("키이름", 값) : 데이터를 저장할 때 사용
                             마치 물건에 이름표(key)를 붙여 사물함에 넣는 것과 같음
    .getItem("키이름") : setItem()으로 저장해 둔 데이터를 가져올 때 사용
                         사물함에서 이름표(key)를 보고 물건을 꺼내는 것과 같음
                         
    단순한 글자나 숫자 데이터를 저장할 때는 parse()나 stringify()를 작성할 필요 없음
    왜냐하면 문자열 형태로 하나씩 저장될 것이기 때문

    배열이나 목록은 문자열로 저장된 형태를 배열이나 리스트 형태로 변환해서
    JavaScript 내부에 활용할 것이기 때문에 변환 필요
  */
  let userList = JSON.parse(localStorage.getItem("userList") || "[]"); // 문자열 -> 배열, 리스트 형태로 변환

  // 새 회원 정보를 담을 json 형태의 배열 생성
  const newUser = {
    username: username,
    password: userPw,
  };

  // 빈 배열이나 기존 배열에 새로운 유저 정보를 추가
  // localStorage에 배열로 저장 -> userList.html에서 유저 목록을 확인하기 위한 배열 저장 형태
  /*
    userList = localStorage에 키 명칭으로 지정되어 있는 유저 목록을 담고 있는 변수 이름
    .push() = 브라우저에서 저장된 리스트가 있던지 없던지 .push() 저장한다. 뒤로 추가하여 항목을 저장
    어떤 항목? newUser
    newUser = 위에서 소비자가 작성한 값을 키: username값 : username형태를 가져와서 저장
  */
  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList)); // localStorage에 저장할 때는 배열, 리스트 -> 문자열 형태로 변환

  // localStorage에 개별 저장
  // result.html에서 개별 사용자가 본인이 회원가입을 무사히 했는지 확인하기 위한 변수이름 저장 형태
  localStorage.setItem("username", username);
  localStorage.setItem("userPw", userPw);

  // 모두 저장하고 나서 결과 페이지로 이동
  // window = 내장객체, 자바스크립트에서 모든 객체의 최상위 부모
  // window 내부에 document와 location, history와 같은 객체 존재
  // window.document, window.alert

  // window 내 컴퓨터에서 . 주소가. 링크로 되어있는 = 로 이동
  /*
    window = 실질적으로 자바스크립트 내의 모든 ~~~ 예약어를 지닌 존재
    window.alert window.document로 사용하는 것이 맞으나 사용 빈도가 높은 경우 window. 생략 // TODO

    location = 현재 페이지의 url 정보를 담은 객체
    location.reload() = 페이지 새로고침
    location.href =  현재 페이지에서 ~~로 이동
  */
  window.location.href = "22_result.html";
}

/*
  localStorage 에서 회원가입을 진행
  입력된 정보는 두가지 형태로 저장
  개별 정보 : 현재 가입한 사용자의 아이디(username)과 비밀번호(userPw)가 단일 항목 저장
  목록 정보 : 기존 회원 목록에 현재 가입한 사용자의 정보를 추가하여 전체 회원 목록(userList) 배열 형태 저장

  result.html : 가입이 완료되면 개별 가입 확인을 위해 결과 페이지로 이동
  localStorage에 저장된 개별 정보를 가져와 소비자가 작성한 데이터를 확인할 수 있도록 설정

  userList.html : 가입이 모두 완료되어 localStorage에 저장된 목록을 확인
  localStorage에 저장된 목록 정보를 가져와 사이트에 가입한 모든 회원의 아이디와 비밀번호를 화면에 표시

  크롬이나 엣지 등 부라우저의 데이터 모두 지우기를 하기 전까지 😁
*/

// setItem 하나의 아이템을 저장
// getItem 하나의 아이템을 불러올 때 java에서 많이 사용!
