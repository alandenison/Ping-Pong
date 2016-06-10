var pinger = function(number) {
  value = parseInt(number);
  alert(value)
  var result = ""
  for(i=0; i<=value; i++) {
    alert(i);
  }
}






$(document).ready(function() {
  $(".Ping-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var output = pinger(userInput);

    $("#result").text(output);
  });
});
