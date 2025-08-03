// https://api.disneyapi.dev/character/308

let 현재페이지 = 1;
let 전체게시물 = [];

const 페이지당게시물수 = 4;

$(function () {
  getAllPosts();

  $("#prevBtn").click(() => {
    if (현재페이지 > 1) {
      현재페이지--;
      getPosts();
    } else {
      alert("첫 페이지입니다.");
    }
  });

  $("#nextBtn").click(() => {
    const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
    if (현재페이지 < 총페이지수) {
      현재페이지++;
      getPosts();
    } else {
      alert("마지막 페이지입니다.");
    }
  });
});

// 데이터 전체
function getAllPosts() {
  $.get("https://api.disneyapi.dev/character").done(function (data) {
    전체게시물 = data.data;
    getPosts();
  });
}

// 해당 페이지 게시물
function getPosts() {
  const 시작하는게시물 = (현재페이지 - 1) * 페이지당게시물수;
  const 끝인덱스 = 시작하는게시물 + 페이지당게시물수;
  const 현재페이지게시물 = 전체게시물.slice(시작하는게시물, 끝인덱스);

  // 페이지 정보 업데이트
  const 총페이지수 = Math.ceil(전체게시물.length / 페이지당게시물수);
  $("#pageNum").html(`페이지 ${현재페이지} / ${총페이지수} `);

  // TODO 페이지 7 imageUrl 404오류 확인 필요!!
  $("#result").html(
    현재페이지게시물
      .map((post) => {
        const imageCell = post.imageUrl
          ? `<img src="${post.imageUrl}" alt="${post.name}" />`
          : `<span class="no-image">해당되는 이미지가 없습니다.</span>`;

        return ` 
        <tr>
            <td>
                ${imageCell}
            </td>
            <td><p class="character-name">${post.name}</p></td>
        </tr>
        `;
      })
      .join("")
  );
}
