$(document).ready(function() {
  $("#booknow").submit(function(event) {
    event.preventDefault();
    var formName = $("input#name").val();
    var formDescription = $("input#description").val();
    var formDate = $("input#date").val();
    var formStart = $("input#start-time").val();
    var formEnd = $("input#end-time").val();

    alert(formEnd);
  });

});
