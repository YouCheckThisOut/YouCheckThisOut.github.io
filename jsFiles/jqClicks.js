var clicks = 0;

function clickHandler() {
  clicks++;
  var numClicksSpan = $('#numClicks');
  if (clicks == 1)
    numClicksSpan.html('once');
  else
    numClicksSpan.html(clicks + ' times');
}

$('#clickMe').click(clickHandler);