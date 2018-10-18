$(document).ready(function() {
  $("form#triangleCalculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());

  if (number1 + number2 <= number3 || number1 + number3 <= number2  || number2 + number3 <= number1) {
      $("#none").show();
  } else if (number1 === number2 && number1 === number3) {
    $("#eq").show();
  } else if (number1 != number2 && number1 != number3 && number2 != number3) {
    $("#sc").show();
  } else if (number1 === number2 || number1 === number3 || number2 === number3) {
    $("#is").show();
  }


  });
});
