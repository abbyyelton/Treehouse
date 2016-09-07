//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//Hide spoiler
$(".spoiler span").hide();
//Add button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//Show spoiler when button pressed
$("button").click(function() {
  $(this).prev().show();
  //Remove button
  $(this).remove();
});
