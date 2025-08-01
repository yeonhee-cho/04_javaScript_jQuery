$(function () {
  loadWatch();
  $("#btn").click(loadWatch);
});

function loadWatch() {
  $.get("https://www.themealdb.com/api/json/v1/1/random.php").done(function (
    data
  ) {
    const meal = data.meals[0]; // API 결과에서 첫 번째 음식 정보 가져오기

    if (meal) {
      // 음식이 존재한다면
      const youtubeUrl = meal.strYoutube; // 유튜브 링크가 들어있는 문자열 가져오기
      // replace() : 특정 문자열을 특정문자열로 변환
      // .replace("변경될 문자열","삽입할 문자열")

      let videoHTML = "";

      if (youtubeUrl) {
        const embedURL = youtubeUrl.replace("watch?v=", "embed/");
        console.log("embedURL : ", embedURL);

        videoHTML =
          // 1. ``쓰기
          // 2. iframe 태그 넣기
          ` 
              <div class="video-container">
              <iframe 
              src="${embedURL}" 
              frameborder="0" 
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture;" 
              allowfullscreen></iframe>
              </div>
              `;
      } else {
        videoHTML = "<div>영상이 존재하지 않습니다.</div>";

        $("#result").html(`${videoHTML}`);
      }
    } else {
      $("#result").html("<div>데이터를 가져오는데 실패했습니다.</div>");
    }
  });
}

// const watchURL = "https://www.youtube.com/watch?v=_RKwKjskopk";
// const iframeURL = "https://www.youtube.com/embed/_RKwKjskopk?si=Hgcf93zl4b1dhMtx"; // si=Hgcf93zl4b1dhMtx : 공유 얼마나 했는지 위치 추적
// <iframe width="560" height="315" src="https://www.youtube.com/embed/_RKwKjskopk?si=Hgcf93zl4b1dhMtx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
