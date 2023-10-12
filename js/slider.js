var datanum = 0;
var $popimg = $('#popimg');
var imgclone = $('.light-img').clone();
$('document').ready(function () {
  $('.light-img').click(function () {
    datanum = $(this).data('num');
    var imgsrc = $(this).attr('src');
    $('#popup').fadeIn(800);
    $popimg.attr('src', imgsrc);
    $('#popup').css('display', 'block');
  });
});

$('#prev').click(function () {
  --datanum;
  if (datanum < 0) {
    datanum = imgclone.length - 1;
  }
  $popimg.slideDown(3000);
  $popimg.attr('src', imgclone[datanum].src);
});
$('#next').click(function () {
  ++datanum;
  if (datanum > 9) {
    datanum = imgclone.length - 10;
  }
  $popimg.attr('src', imgclone[datanum].src);
});

$('#close').click(function () {
  $('#popup').css('display', 'none');
});
