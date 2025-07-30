// bookTitle
// author
// 검색초기화
// result
$(function () {
  $("#도서검색").click(function () {
    // JSON 파일에서 도서 데이터 가져오기
    $.get("../json/books.json", function (data) {
      // data에서 length를 활용해서 총 몇 개의 도서가 존재하는지 확인

      // while문이나 for문 대신 총 갯수 가져오는 방법
      // 객체.keys(data.books).length
      // 객체는 length를 사용할 때 단독으로 사용할 수 없고, keys value 키들이나 값들을 모아서 갯수 확인
      // 배열은 length를 바로 확인할 수 있음
      const totalBooks = Object.keys(data.books).length;

      console.log("Object.keys(data.books)", Object.keys(data.books));
      console.log(
        "Object.keys(data.books).length",
        Object.keys(data.books).length
      );

      $("#result").html(`
        <div> 총 ${totalBooks} 개의 도서가 존재합니다.</div>
        `);

      // 1. bookTitle로 도서 값 val() 가져오기
      const bookTitle = $("#bookTitle").val();
      // 2. author로 저자 값 val() 가져오기
      const author = $("#author").val();

      // 입력하지 않았을 경우 체크
      console.log("bookTitle", bookTitle, "author", author);

      if (bookTitle == "" || author == "") {
        $("#result").html("찾으시려는 도서명과 저자를 입력하세요");
      } else {
        if (data.books[bookTitle]) {
          // 책제목이 존재한다면
          console.log("책제목이 존재한다면");

          if (data.books[bookTitle].author === author) {
            // JSON 데이터에 저장된 저자와 소비자가 검색한 저자가 일치하는 항목이 존재한다면
            console.log(
              "JSON 데이터에 저장된 저자와 소비자가 검색한 저자가 일치하는 항목이 존재한다면"
            );
            $("#result").removeClass("error");
            $("#result").addClass("success");
            $("#result").html(`
                  <div class="book-info">
                      <h3>도서찾기 성공!</h3>
                      <p><strong>제목 : </strong> ${bookTitle}</p>
                      <p><strong>저자 : </strong> ${author}</p>
                      <p><strong>가격 : </strong> ${data.books[bookTitle].price}</p>
                  </div>
                  `);
            // 도서 검색 버튼 숨기기
            $("#도서검색").hide();
            // 검색 초기화 버튼 보이기
            $("#검색초기화").show();
          } else {
            // 없을 경우
            $("#result").html(
              `${bookTitle} 책의 저자가 ${author}과 일치하는 책이 존재하지 않습니다.`
            );
          }
        } else {
          // 책 제목이 존재하지 않는다면
          $("#result").html(`${bookTitle}과 일치하는 책이 존재하지 않습니다.`);
        }
      }
    });
  });

  $("#검색초기화").click(function (e) {
    e.preventDefault();
    $("#도서검색").show();
    $("#검색초기화").hide();
    $("#bookTitle").val("");
    $("#author").val("");
    $("#result").html("검색 초기화가 되었습니다.");
  });
});
