$(".animsition").animsition( {
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$(".header").sticky({
  getWidthFrom: ".container",
  responsiveWidth: true
});

$(".header").on("sticky-start", function() {
  $(".description").html("We build <strong>great</strong> apps");
});

$(".header").on("sticky-end", function() {
  $(".description").html("We build apps");
});

$("#work-for-us").sticky( {topSpacing: 50,
  getWidthFrom: ".container",
  responsiveWidth: true});

$("#work-for-us").on("sticky-start", function() {
  $(this).append('<a href="mailto:someone@example.com"> email us</a>');
});

$("#work-for-us").on("sticky-end", function() {
  $(this).html("Want us to work on your project?");
});
