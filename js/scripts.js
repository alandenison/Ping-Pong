var pinger = function(number) {
  value = parseInt(number);
  var result = []
  for(i=1; i<=value; i++) {
    if (i % 3 === 0 && i % 15 != 0) {
      result.push("ping" + "<br>");
    } else if (i % 5 === 0 && i % 15 != 0){
      result.push("pong" + "<br>");
    } else if (i % 15 === 0) {
      result.push("pingpong" + "<br>");
    }
    else {
      result.push(i + "<br>");
    };
  };
  return(result);
}

$(document).ready(function() {
  $(".Ping-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var result = pinger(userInput);
    $("#result").append(result);
  });
  $("#reset").click(function() {
    $("#result").text("");
  });
});
