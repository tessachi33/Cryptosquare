$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    var userInput = $("input#userInput").val();
    var strLowerCase = userInput.toLowerCase();
    var str = strLowerCase.replace(/\s/g, '');
    var length = str.length;
    var squareRoot = Math.sqrt(length);
    var strSplit = str.split("");

  $(".cryptosquare").text(strSplit);

  $("#result").show();
  event.preventDefault();

  });
});
