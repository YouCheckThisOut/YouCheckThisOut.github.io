function makeBold() {
    var divs = document.getElementsByClassName('highlightText2');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.color = 'blue';
        divs[i].style.fontWeight = 'bold';
    }
  }

  function restore() {
    var divs = document.getElementsByClassName('highlightText2');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.color = 'black';
        divs[i].style.fontWeight = 'normal';
    }
  }

  var mouseOverMeDiv = document.getElementById('mouseOverMe2');
  mouseOverMeDiv.addEventListener('mouseover', makeBold);
  mouseOverMeDiv.addEventListener('mouseout', restore);