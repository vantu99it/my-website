var test = $(".venobox").venobox();
// đóng ảnh
$(document).on("click", ".closeme", function (e) {
  test.VBclose();
});
