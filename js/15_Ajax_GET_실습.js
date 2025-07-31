// jQuery 이벤트 처리와 기능 명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능);
  $("#btn2").click(userInfo);
  $("#btn3").click(getRandom);
  $("#btn4").click(getComment);
  $("#btn5").click(errorFn);
}); // 아이디가 btn1인 버튼을 클릭했을 때 문제1번기능 함수에 담긴 기능 사용

// 1. 기본 텍스트 데이터 가져오기
// https://jsonplaceholder.typicode.com/posts/1
function 문제1번기능() {
  $.get(
    "https://jsonplaceholder.typicode.com/posts/1", // url주소
    // url 주소를 가져오는데 성공!
    function (data) {
      $("#result1").html(`
        <div class="success">
            <strong>게시물 제목 : </strong> ${data.title}<br>
            <!-- 게시물 내용 body 가져오기 -->
            <strong>게시물 내용 : </strong> ${data.body}
        </div>
        `);
    }
  );
}

// 2. 사용자 정보 표시하기
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/{userId}
function userInfo() {
  const userId = $("#userId").val(); // 사용자가 작성한 값

  $.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    // 1. 데이터를 무사히 가져오는 것을 성공했고
    .done(function (data) {
      // 데이터 가져올 수 있도록 접속하는데 성공했다면!
      if (!data.id || !data) {
        $("#result2").html(`
            <div class="error">해당 사용자를 찾을 수 없습니다.</div>
            `);

        return; // 데이터가 없으므로 function 아래 기능을 사용하지 못하도록 돌려보내기!
      }

      $("#result2").html(
        `
        <div class="success">
            <!-- username 닉네임아이디 name 이름 -->
            <strong>이름: </strong>${data.name}<br />
            <strong>이메일: </strong>${data.email}<br />
            <strong>전화번호: </strong>${data.phone}<br />
        </div>
        `
      );
    })
    // 2. 아예 주소로 접근 자체가 불가능한 에러 상태일 때
    .fail(function () {
      // url 접근자체가 불가능한 상황
      $("#result2").html(`
    <div class="error">
        해당 사용자를 찾을 수 없습니다. (404 error 발생)
        주소 자체 접속이 안되는 상황
    </div>
    `);
    });
}

// 3. 랜덤 명언 가져오기
function getRandom() {
  // 1. get을 이용해서 데이터 가져올 주소 설정
  // https://api.quotable.io/random
  // http://api.quotable.io/random
  $.get("http://api.quotable.io/random")
    .done(function (data) {
      $("#result3").html(`
                  <div class="success">
                      <blockquote>${data.content}</blockquote>
                      <strong>${data.author}</strong>
                  </div>
              `);
    }) // 데이터 가져오는데 문제가 없을 경우
    .fail(
      // 데이터 주소 접속 실패했을 경우
      $("#result3").html(
        `
        <div class="error">
            명언을 가져오는데 실패했습니다.
        </div>
        `
      )
    );
}

// 4. 댓글 .length 개를 성공적으로 가져왔다 띄워주기
// https://jsonplaceholder.typicode.com/posts/1/comments

function getComment() {
  $.get("http://jsonplaceholder.typicode.com/posts/1/comments")
    .done(function (data) {
      console.log(data.id);

      $("#result4").html(`
                <div class="success">
                    댓글 ${data.length} 개를 성공적으로 불러왔습니다.<br>
                    <!-- index 번호를 이용하여 첫 번째 댓글 가져오기 -->
                    첫 번째 댓글 : ${data[0].body} 
                </div>
                `);
    })
    .fail(() => {
      // 데이터 주소 접속 실패했을 경우
      $("#result4").html(
        `
        <div class="error">
            댓글을 가져오는데 실패했습니다.
        </div>
        `
      );
    });
}

// 5. 에러 처리하기
// https://jsonplaceholder.typicode.com/posts/999999
function errorFn() {
  $.get("https://jsonplaceholder.typicode.com/posts/999999")
    .done(function (data) {
      console.log(data);
      $("#result5").html(`
          <div class="success">
              데이터를 성공적으로 가져왔습니다.
          </div>
        `);
    })
    .fail(
      // 에러가 발생했을 때도 매개변수 파라미터 자리에 data라는 변수이름을 사용해도 되지만
      // 개발자간의 규칙으로 err나 xhr과 같은 명칭을 사용해주는 것이 바람직함
      function (xhr) {
        $("#result5").html(`
          <div class="error">
              에러발생! <br>
              <strong>상태 코드 : </strong> ${xhr.status}<br>
              <strong>에러 메세지 : </strong> ${xhr.statusText}<br>
          </div>
        `);
      }
    );
}
