$(function () {
  displayProduct();

  $("#deleteBtn").click(deleteProducts);
});

function displayProduct() {
  // 기존 배열 목록 가져오기
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");

  console.log(productList);

  // product-grid 내부에
  // map 형태로 내부에 코드 추가
  /*
    <div class="product-card">
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${Number(
        product.price
        ).toLocaleString()}원</p>
    </div>
    </div>
  */

  const productHTML = productList
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" />
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${Number(
                  product.price
                ).toLocaleString()}원</p>
            </div>
        </div>
    `
    )
    .join(""); // map 뒤에 자동으로 붙는 , 지우기

  $("#product-grid").html(productHTML);
}

function deleteProducts(e) {
  e.preventDefault(); // a의 href로 이동하는 기본 동작 방지

  // 사용자에게 정말 삭제할 것인지 최종 확인
  // alert 오직 확인, prompt 입력창과 확인 버튼, confirm 확인 취소 버튼 확인 true 취소 false
  /*
  let cf = confirm("정말 모든 제품을 삭제하시겠습니까?")
  if(cf){
  }
  */

  if (confirm("정말 모든 제품을 삭제하시겠습니까?")) {
    // confirm 에서 확인을 눌렀을 경우
    // localStorage에 productList에서 데이터만 제거
    localStorage.removeItem("productList");

    // 화면을 자동 F5(새로고침) 하여 변경사항을 반영
    alert("모든 상품이 삭제되었습니다.");
    location.reload(); // 현재 페이지 새로고침 window. 생략 가능 // window.location.reload();
  }
}
