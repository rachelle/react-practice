// Initially disable the button 
$("button").prop("disabled", true); 

// When the value of the text area changes
$("textarea").on("input", function() {
// If there's at least one character 
  $("textarea").on("input", function() {
    $("span").text(140 - $(this).val().length);
  });
    if ($(this).val().length > 0) {
      // enable the button 
      $("button").prop("disabled", false); 
    } else {
      // Else, disable the button 
      $("button").prop("disabled", true); 
    }
});