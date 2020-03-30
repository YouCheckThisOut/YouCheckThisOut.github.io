var clicks =0;

function clickHandler() {
	clicks++;
	var numClicksSpan = document.getElementById('numClicks');

    numClicksSpan.innerHTML = clicks;
}

var button = document.getElementById('clickMe');
button.addEventListener('click', clickHandler);
