let currentPage = 1; // 현재 페이지

$(function () {
  // 처음에 포켓몬을 물러올 때
  // $("#loadBtn").click(() => {
  pokeInfo(1); // 클릭하지 않아도 자동으로 1번부터 호출 처리
  // });

  $("#prevBtn").click(() => {
    // 이전으로 돌아가는 버튼을 클릭했을 때
    if (currentPage > 1) {
      // 1페이지 초과이면
      currentPage--; // 이전 페이지로 이동하기
      pokeInfo(currentPage);
    } else {
      alert("첫 페이지입니다.");
    }
  });

  $("#nextBtn").click(() => {
    // 다음 페이지로 가기
    // 만약에 가장 마지막 페이지이면 마지막 다음 페이지입니다. alert 설정하는 것이 좋음
    // TODO
    // if (currentPage < 마지막페이지) {
    //   currentPage++;
    //   pokeInfo(currentPage);
    // } else {
    //   alert("마지막 페이지입니다.");
    // }
    currentPage++;
    pokeInfo(currentPage);
  });
});
// 파이썬의 range(시작, 끝-1) {} 처럼 숫자 배열을 만드는 함수
function range(start, end) {
  /*
        ...
        Array() : 배열 생성

        end - start + 1 = 10 - 1 + 1 = 10, 10개의 배열을 생성하겠다. 소비자가 원하는 페이지의 번호의 배열


        .keys() : 키들의 값으로 숫자를 넣겠다. 배열은 0부터 시작 [0, 1, 2, ... , 7, 8, 9]
        .map((i) => i + start) : 시작값 더하기
                    포켓몬 사이트는 0이 존재하지 않고 1부터 시작하기 때문에
                    배열은 0이지만 0번째에 https://pokeapi.co/api/v2/pokemon/1 의 값이 들어가게 되는 것

    */
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

function pokeInfo(page) {
  // 하나의 포켓몬을 개발자가 지정해서 선택한 상황
  // 1번부터 10번까지 포켓몬 가져오기
  const startId = (page - 1) * 10 + 1;
  const ids = range(startId, startId + 9);
  $("#pokemonContainer").html(""); // 페이지가 변경될 때마다 기존 데이터 없애기
  // 페이지 번호 변경 설정
  $("#pageInfo").html(`페이지 ${page}`);
  ids.map((i) => {
    $.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .done(function (data) {
        $("#pokemonContainer").html(
          $("#pokemonContainer").html() +
            `<img src="${data.sprites.other["official-artwork"].front_default}" style="width:100px">
            ` // official-artwork같이 쓰여 있어 자동 띄어쓰기 official - artwork 가 되어 이미지 검색이 어려울 경우 []안에 넣어주어 해결한다!!
        );
      })
      .fail();
  });
}
