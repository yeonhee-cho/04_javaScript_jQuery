$(function () {
  loadMovies();
  $("#openLoginPopup").click(openLoginPopup);
  $("#moveRegister").click(goToSignup);
});

// 지브리 영화 데이터 가져오기
function loadMovies() {
  $.get("https://ghibliapi.vercel.app/films")
    .done(function (data) {
      //.loading .hide()
      $(".loading").hide();
      displayMovies(data);
    })
    .fail(function () {
      alert("영화를 가져오는데 실패했습니다.");
    });
}

// 영화 목록 표시
function displayMovies(movies) {
  if (movies.length === 0) {
    $(".movies").html("등록된 영화가 없어요!");
  } else {
    const movieCard = movies
      .map(
        (movie) => `
                <div class="movie">
                    <h3>${movie.title}</h3>
                    <p class="year">개봉년도: ${movie.release_date}</p>
                    <p><strong>감독:</strong> ${movie.director}</p>
                    <p><strong>제작자:</strong> ${movie.producer}</p>
                    <p>
                        <span class="detail-link" onclick="goToDetail('${
                          movie.id
                        }')">
                            ${
                              movie.description.substring(0, 50) +
                              " ... 상세보기"
                            }
                        </span> 
                    </p>
                    <img src="${movie.image}" style="max-width:100%">
                </div>
            `
      )
      .join("");
    // description.substring(0, 50) 글자 수 줄이기
    $(".movies").html(movieCard);
  }
}

// 로그인 팝업 열기
function openLoginPopup() {
  window.open("login.html", "_blank", "width=450,height=600");
}

// 회원가입 페이지로 이동
function goToSignup() {
  window.location.href = "register.html";
}

// 상세페이지로 이동
function goToDetail(movieId) {
  /* 
        개발을 진행하기 위해 index.html 화면을 보여주는 주소
        http://127.0.0.1:5500/html/index.html    ?key=value
        ? 뒤는 매개변수로 전달받은 값을 detail.html에 전달하겠다

        detail.html 로 들어가면 -> 상세페이지에서 표시할 내용이 존재하지 않습니다.

        detail.html?id=id에 해당하는 값을 작성하면 해당 데이터를 detail에서 불러올 수 있음
    */
  window.location.href = `detail.html?id=${movieId}`;
}
