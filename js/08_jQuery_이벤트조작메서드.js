$(function () {
  // #add버튼을 클릭했을 때
  $("#add").click(() => {
    // #boxArea .append("<div class="box">박스</div>")
    $("#boxArea").append('<div class="box">박스</div>');
  });

  // #del 버튼을 클릭 했을 때
  $("#del").click(() => {
    // $(".box:last").remove()
    $(".box:last").remove();
  });
});
