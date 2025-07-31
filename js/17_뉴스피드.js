const URL = "../json/news.json";
$(function () {
  뉴스불러오기();
  $("#loadBtn").click(검색하기);
});

// select value 값으로 적당한 데이터만 검색하기 설정
// TODO input && category -> 검색이 일치하는 데이터만 조회하기
function 검색하기() {
  $.get(URL).done(function (data) {
    const selectValue = $("#categoryFilter").val();

    $("#newsContainer").html(
      data
        .filter((category) => category.category == selectValue)
        .map(
          (i) => `
            <div class="news-card">
                <div class="news-title">
                ${i.title}
                </div>
                <div class="news-content">
                ${i.content}
                </div>
            </div>
            `
        )
    );
  });
}

function 뉴스불러오기() {
  $.get(URL).done(function (data) {
    $("#newsContainer").html(
      data.map(
        (i) => `
            <div class="news-card">
            <div class="news-title">
            ${i.title}
            </div>
            <div class="news-content">
            ${i.content}
            </div>
            </div>
            `
      )
    );
  });
}
