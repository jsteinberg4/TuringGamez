$('#songButton').click(function (evt) {
  try {
    var input = ""; // User input
    var output = ""; // Output message

    input = $('#songChoice').val()
    console.log("User requested song: "  + input)

    // Verify that any input was received
    if(input != "") {
      output = "Searching..."
    } else {
      output = "Invalid song name."
    }

    // Set the output text
    $('#Choice').text(output)
    console.log('Output: ' + output)

  } catch (err) { // Something failed
    console.log(err);
  }
});

$(document).ready(function(){
  $(".start-game").click(function(){
    // This is to be changed once we know specific file path
    var value = "Hello-World"
    $(".wiki-text-display").text(value).show();
  });
});

// Deprecated
function getInput() {
  var inpy, output;
  inpy = document.getElementById('songChoice').value;
  console.log('Song choice: ' + inpy)
  output = 0

  if (inpy != "") {
    output = "Searching..."
  } else {
    output = "Invalid input type"
  }

  document.getElementById("Choice").innerHTML = output;
}


