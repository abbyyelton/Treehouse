//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select box and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Add all list items to select
$("#menu a").each( function() {
  //Create an option
  var $option = $("<option></option>");
  if ($(this).parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //Set value to href
  $option.val($(this).attr("href"));
  //Set text to text
  $option.text($(this).text());
  //Append option to select
  $select.append($option);
});

$select.change( function() {
  window.location = $select.val();
});
/*//Create a button to click to go to select location
var $button = $("<button>Go</button>");
$("#menu").append($button);
$button.click( function() {
  window.location = $select.val();
});
*/
