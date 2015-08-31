$("button").prop("disabled", true); 

$("textarea").on("input", function() {
  $("span").text(140-
    $("this").val().length); 

  if ($(this).val().length > 0) {
    $("button").prop("disabled", false); 
  } else {
    $("button").prop("disabled", true); 
  }
}); 