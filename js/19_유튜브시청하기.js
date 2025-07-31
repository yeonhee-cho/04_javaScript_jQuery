// 검색버튼 무시 바로 나오는 영화 확인
// $.get()
// https://abhi-api.vercel.app/api/search/yts?text=heat+waves
//.done()
// results 결과에

// <p> 영화제목
// <p> 영화설명
// <img> 썸네일
// <p> 주소

// 검색버튼 무시 바로 나오는 영화 확인
$.get("../json/youtube.json").done(function (data) {
  console.log(data.result);

  $("#results").html(
    `
        <div>
            <p class="title"> 영화제목 : ${data.result.title}</p><br>
            <p class="info"> 영화설명 :${data.result.description} </p><br>
            <img src="${data.result.thumbnail}"> 
            <p class="url-text"> 주소 :${data.result.url}</p>
        </div>
    `
  );
});

$(function () {
  searchButton();
});

// 검색버튼 기능
function searchButton() {
  $.get("../json/youtube.json").done(function (data) {
    const searchInput = $("#searchInput").val();

    // filter
    // search val()
    if (data.result.title == searchInput) {
      $("#result").html(
        `
        <div>
            <p class="title"> 영화제목 : ${data.result.title}</p><br>
            <p class="info"> 영화설명 :${data.result.description} </p><br>
            <img src="${data.result.thumbnail}"> 
            <p class="url-text"> 주소 :${data.result.url}</p>
        </div>
        `
      );
    }
  });
}
