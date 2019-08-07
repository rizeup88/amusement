$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? (Inches)"));

  if (height >= 60) {
    $('#saferides').show();
    $('#saferrides').show();

  } else if (height < 60) {
    $('#saferrides').show();
  }

  if (height >= 60) {
  	$('#saferrides').addClass("red-text");
  }
});