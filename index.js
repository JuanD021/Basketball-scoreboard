let scoreHome = document.getElementById('score-home');
let scoreGuest = document.getElementById('score-guest');

function add1Point(team) {
	let result = 0;
	if (team === 'home') {
		result = Number(scoreHome.textContent) + 1;
		scoreHome.textContent = result;
	}
	if (team === 'guest') {
		result = Number(scoreGuest.textContent) + 1;
		scoreGuest.textContent = result;
	}
}

function add2Point(team) {
	let result = 0;
	if (team === 'home') {
		result = Number(scoreHome.textContent) + 2;
		scoreHome.textContent = result;
	}
	if (team === 'guest') {
		result = Number(scoreGuest.textContent) + 2;
		scoreGuest.textContent = result;
	}
}

function add3Point(team) {
	let result = 0;
	if (team === 'home') {
		result = Number(scoreHome.textContent) + 3;
		scoreHome.textContent = result;
	}
	if (team === 'guest') {
		result = Number(scoreGuest.textContent) + 3;
		scoreGuest.textContent = result;
	}
}