//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

function changeColor() {
  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  $("#newColor").css("background-color","rgb("+red+","+green+","+blue+")");
}

//When clicking on control list items
$(".controls").on( "click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //Save current color
  color = $(this).css("background-color");
});

//When new color button clicked
$("#revealColorSelect").click( function() {
  //Show color select menu
  changeColor();
  $("#colorSelect").toggle();
  //Update color span
  $("input[type=range]").change(changeColor);
  //When add color button clicked
  $("#addNewColor").click( function() {
    //Add new color to list
    var $newColorListItem = $("<li></li>");
    //Set background color of new list item
    $newColorListItem.css("background-color",$("#newColor").css("background-color"));
    //add new list item to list
    $(".controls ul").append($newColorListItem);
    //Select new color, etc
    $newColorListItem.click();
  });
});

//On mouse events on canvas
//Draw lines
$canvas.mousedown( function( e ) {
  lastEvent = e;
  mouseDown = true;
}).mousemove( function( e ){
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup( function() {
  mouseDown = false;
}).mouseleave( function() {
  $canvas.mouseup();
});
