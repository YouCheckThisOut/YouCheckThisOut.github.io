
function keyPressHandler(e) {
  if (e.keyCode == 13) {
    $('#list').append('<li>'+ $('#itemField').val() + '</li>');
    $('#itemField').val('');
  }
}

$('#itemField').keyup(keyPressHandler);