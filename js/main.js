//active menu
var btnContainer = document.getElementById("nav-menu");

var btns = btnContainer.getElementsByClassName("nav__link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
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
var offsetSkill = 650;
$(function () {
  const menuItem = document.querySelectorAll(".skill__per");
  const menuLength = menuItem.length;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offsetSkill) {
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

// sidebar
// kéo xuống khoảng cách 500px thì xuất hiện add class fix
var introduce = 950;
var skill = 1420;
var project = 2800;
var contact = 2801;
$(function () {
  $(window).scroll(function () {
    var elementIntroduce = document.getElementById("nav__introduce");
    var elementSkill = document.getElementById("nav__kill");
    var elementProject = document.getElementById("nav__project");
    var elementContact = document.getElementById("nav__contact");
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() < introduce) {
      elementIntroduce.classList.add("active");
      elementSkill.classList.remove("active");
      elementProject.classList.remove("active");
      elementContact.classList.remove("active");
    } else if ($(this).scrollTop() > introduce && $(this).scrollTop() < skill) {
      elementIntroduce.classList.remove("active");
      elementSkill.classList.add("active");
      elementProject.classList.remove("active");
      elementContact.classList.remove("active");
    } else if ($(this).scrollTop() > skill && $(this).scrollTop() < project) {
      elementIntroduce.classList.remove("active");
      elementSkill.classList.remove("active");
      elementProject.classList.add("active");
      elementContact.classList.remove("active");
    } else {
      elementIntroduce.classList.remove("active");
      elementSkill.classList.remove("active");
      elementProject.classList.remove("active");
      elementContact.classList.add("active");
    }
  });
});
