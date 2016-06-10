var pinger = function(number) {
  value = parseInt(number);
var result = []
  for(i=1; i<=value; i++) {
    if (i % 3 === 0 && i % 15 != 0) {
      result.push("ping");
    }else if (i % 5 === 0 && i % 15 != 0){
      result.push("pong");
    } else if (i % 15 === 0) {
      result.push("pingpong");
    }
    else{
      result.push(i);
    }
  }
  return(result);
}






$(document).ready(function() {
  $(".Ping-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var result = pinger(userInput);

    $("#result").text(result);
  });
});
