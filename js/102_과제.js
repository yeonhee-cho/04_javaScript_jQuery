// https://api.disneyapi.dev/character/308

let currentPage = 1;
let totalList = [];

const pageListNum = 4;

$(function () {
  getAllPosts();

  $("#prevBtn").click(() => {
    if (currentPage > 1) {
      currentPage--;
      getPosts();
    } else {
      alert("첫 페이지입니다.");
    }
  });

  $("#nextBtn").click(() => {
    const totalPageNum = Math.ceil(totalList.length / pageListNum);
    if (currentPage < totalPageNum) {
      currentPage++;
      getPosts();
    } else {
      alert("마지막 페이지입니다.");
    }
  });
});

// 데이터 전체
function getAllPosts() {
  $.get("https://api.disneyapi.dev/character").done(function (data) {
    totalList = data.data;
    getPosts();
  });
}

// 해당 페이지 게시물
function getPosts() {
  const startIndex = (currentPage - 1) * pageListNum;
  const lastIndex = startIndex + pageListNum;
  const currentPageList = totalList.slice(startIndex, lastIndex);

  // 페이지 정보 업데이트
  const totalPageNum = Math.ceil(totalList.length / pageListNum);
  $("#pageNum").html(`${currentPage} / ${totalPageNum} `);

  // TODO 페이지 7 imageUrl 404오류 확인 필요!!
  setTimeout(() => {
    $("#result").html(
      currentPageList
        .map((post) => {
          const imageCell = post.imageUrl
            ? `<img src="${post.imageUrl}" 
            alt="${post.name}"  
            onclick="openModal('${post.imageUrl}', '${post.name}')"
            />` // TODO 이미지 이름에 있는 " ' " 특수문자 오류 잡기
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
  }, 200);
}

// 이미지 클릭 시 모달창 띄우기
function openModal(imageUrl, name) {
  $("#modalOverlay").fadeIn(300);

  $("#imgDetail").html(`<img src="${imageUrl}" alt="${name}" />`);
}

// 모달 닫기
$("#closeModal").click(() => {
  $("#modalOverlay").fadeOut(300);
});

// 외부 클릭 시 모달 닫기
$("#modalOverlay").click((e) => {
  if (e.target === this) {
    $("#modalOverlay").fadeOut();
  }
});
