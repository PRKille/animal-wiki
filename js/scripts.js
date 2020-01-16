$(document).ready(function () {
  $("form").submit(function (event) {
    var animal = parseInt($("#kind").val());

    if (animal === 1) {
      $("#cat, #lion").hide();
      $("#dog").show();
    } else if (animal === 2) {
      $("#dog, #lion").hide();
      $("#cat").show();
    } else if (animal === 3) {
      $("#dog, #cat").hide();
      $("#lion").show();
    } else {
      alert("How did you do that?");
    }

    event.preventDefault();
  });
});