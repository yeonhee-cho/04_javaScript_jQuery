$(function () {
  $(".register-btn").click(addProduct);
});

function addProduct(e) {
  e.preventDefault();

  const productName = $("#productName").val();
  const productPrice = $("#productPrice").val();
  const productImage = $("#productImage").val();

  // 기존 배열 목록 가져오기
  // localStorage자체가 문자열만 취급함으로 배열([]) 또한 큰따옴표("") 로 감싸서 문자열 처리
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");

  const newProduct = {
    name: productName,
    price: productPrice,
    image: productImage,
  };

  productList.push(newProduct);
  localStorage.setItem("productList", JSON.stringify(productList));

  window.location.href = "23_제품목록.html";
}
