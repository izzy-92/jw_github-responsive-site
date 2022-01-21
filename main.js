// Toggle Button Event
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });
  // 뷰포트의 사이즈 변경 시 실행
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      // Off Toggle
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  // 켜진 토글메뉴가 화면에 보이지 않는 메소드 생성
  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
  

})(window, document)