$("textarea").on("input", function() {
  if ($(".js-add-photo-button").hasClass("is-on")) {
    $("span").text(140 - 23 - $(this).val().length);
  } else {
    $("span").text(140 - $(this).val().length);
  }

  if ($(this).val().length > 0 || $(".js-add-photo-button").hasClass("is-on")) {
    $(".js-tweet-button").prop("disabled", false);
  } else {
    $(".js-tweet-button").prop("disabled", true);
  }
});

$(".js-add-photo-button").on("click", function() {
  if ($(this).hasClass("is-on")) {
    $(this)
      .removeClass("is-on")
      .text("Add Photo");
    $("span").text(140 - $("textarea").val().length);
    if ($("textarea").val().length === 0) {
      $(".js-tweet-button").prop("disabled", true);
    }
  } else {
    $(this)
      .addClass("is-on")
      .text("✓ Photo Added");
    $("span").text(140 - 23 - $("textarea").val().length);
    $(".js-tweet-button").prop("disabled", false);
  }
});
