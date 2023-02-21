// active menu
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav-item a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  } else {
    menuItem[i].className = "";
  }
}

var test = $(".venobox").venobox();
// đóng ảnh
$(document).on("click", ".closeme", function (e) {
  test.VBclose();
});

// sidebar
// kéo xuống khoảng cách 500px thì xuất hiện add class fix
var offset = 450;
$(function () {
  $(window).scroll(function () {
    var element = document.getElementById("sidebar");
    if ($(this).scrollTop() > offset) {
      element.classList.add("fix");
    } else {
      element.classList.remove("fix");
    }
  });
});

// Thanh scroll
// kéo xuống khoảng cách 500px thì xuất hiện nút Top-up
var offset = 450;
// thời gian di trượt 0.75s ( 1000 = 1s )
var duration = 750;
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $("#top-up").fadeIn(duration);
    } else {
      $("#top-up").fadeOut(duration);
    }
  });
  $("#top-up").click(function () {
    $("body,html").animate({ scrollTop: 0 }, duration);
  });
});

// skill
// kéo xuống khoảng cách 500px thì xuất hiện add class fix
var offset = 650;
$(function () {
  const menuItem = document.querySelectorAll(".skill__per");
  const menuLength = menuItem.length;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      for (let i = 0; i < menuLength; i++) {
        menuItem[i].classList.add("animation");
      }
    } else {
      for (let i = 0; i < menuLength; i++) {
        menuItem[i].classList.remove("animation");
      }
    }
  });
});
