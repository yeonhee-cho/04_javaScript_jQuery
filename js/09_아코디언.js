$(function () {
  $(".faq-item").click(function () {
    /*
        순수 자바스크립트에서는 
        querySelector()를 사용했을 때는 맨 앞에 존재하는 tag나 id나 class 선택
        querySelectorAll() 를 사용했을 때는 해당하는 모든 ~~~~ tag나 id나 class 선택
        jQuery $(선택자)는 기본적으로 querySelectorAll() 상태
        페이지에 존재하는 모든 class="faq=answer" 를 선택한 상태
        $(this) = 현재 클릭된 .faq-item을 의미 / JavaScript에서 현재 이벤트가 발생한 요소

        A.not(B) : 선택된 요소들에서 특정 요소들을 제외하는 메서드
                   A에서 B를 빼겠다.
    */
    /*
        $(".faq-answer") // 1. 모든 FAQ 답변 선택
        .not($(this).children()) // 2. 현재 클릭된 항목은 제외할 것이다.
        .slideUp(); // 3. 현재 클릭된 항목을 제외하고 나머지 faq-answer 모두 닫기
    */
    $(".faq-answer").not($(this).children()).slideUp();
    /*
       jQuery는 javaScript를 사용하던 개발자가 javaScript를 사용하며 느낀 불편함을 해소하기 위하여 만든 라이브러리
       불편함 최소화 목적으로 다양한 방식으로 개발자가 원하는 기능을 동작할 수 있도록 무궁무진한 메서드 존재
    */
    $(this).children("faq-answer").slideToggle();
  });
});
