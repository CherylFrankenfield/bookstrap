$(document).ready(function() {
  $("form#booknow").submit(function(event) {
    event.preventDefault();
    var formName = $("input#name").val();
    var formDescription = $("input#description").val();
    var formDate = $("input#date").val();
    var formStart = $("input#start-time").val();
    var formEnd = $("input#end-time").val();

    $(".name-output").text(formName);
    $(".description-output").text(formDescription);
    $(".date-output").text(formDate);
    $(".start-output").text(formStart);
    $(".end-output").text(formEnd);
    $("#outputform").show();
  });
});
