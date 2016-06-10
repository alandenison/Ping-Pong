var pinger = function(number) {
  value = parseInt(number);
var result = []
  for(i=1; i<=value; i++) {

    if (i % 3 === 0) {
      result.push("ping");
    } else{
      result.push(i);
    }
  }
  alert(result);
}






$(document).ready(function() {
  $(".Ping-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var output = pinger(userInput);

    $("#result").text(output);
  });
});
