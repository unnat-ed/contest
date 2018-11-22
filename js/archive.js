document.querySelector(".card-flip").classList.toggle("flip");
var dropdown = document.getElementsByClassName("dropdown");
var i;
$('.control').click(function () {
  $('body').addClass('search-active');
  $('.input-search').focus();
});

$('.icon-close').click(function () {
  $('body').removeClass('search-active');
});

/* 
 * Holder.js for demo image
 * Just for demo purpose
 */