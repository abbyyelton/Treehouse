//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
var $overlay = $('<div id="overlay"></div>');
//An image to overlay
var $image = $("<img>");
//A caption to overlay
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

//Add overlay
$("body").append($overlay);


//Capture the click event on a link to an image
$("#imageGallery a").click( function( event ) {
  //Update overlay with the image linked in the link
  //Prevent from going to dead end
  event.preventDefault();

  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);


  //Show the overlay.
  $overlay.show();

});
//When overlay is clicked
$overlay.click( function() {
  //Hide the overlay
  $(this).hide();
});
