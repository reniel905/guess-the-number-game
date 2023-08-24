let range1 = document.getElementById('range1-btn');
let range2 = document.getElementById('range2-btn');
let range3 = document.getElementById('range3-btn');

let userGuess = document.getElementById('user-guess-holder');

let numberHolder = document.getElementById('random-number-holder');

let reroll = document.getElementById('reroll-guess-btn');

let exit = document.getElementById('exit-btn');

var range = 0;

let gameUI = document.getElementById('ui');
let mainMenu = document.getElementById('menu');

var score = 0;

let scoreHolder = document.getElementById('score');

let attemptHolder = document.getElementById('attempt');

let guessButton = document.getElementById('enter-guess-btn');

let randomNumber;

let attemptCounter;

function reRoll() {

    console.log('running');
    randomNumber = Math.floor((Math.random() * range) + 1);
    console.log(randomNumber);
    numberHolder.innerHTML = '?';
    attemptHolder.innerHTML = 'Chance/s Left: ' + attemptCounter;
    guessButton.disabled = false;
    reroll.style.display = "none";
    userGuess.value = "";


}


range1.addEventListener('click', function () {

    gameUI.style.display = "flex";
    mainMenu.style.display = "none";

    attemptCounter = 2;
    range = 10;

    reRoll();

    guessButton.addEventListener('click', function () {

        if (randomNumber == userGuess.value) {

            numberHolder.innerHTML = randomNumber;
            window.alert("You've got the correct answer!");
            score++;
            scoreHolder.innerHTML = 'Score: ' + score;
            guessButton.disabled = true;
            reroll.style.display = "contents";
            userGuess.value = "";

        } else if (randomNumber > userGuess.value) {

            attemptCounter--;
            attemptHolder.innerHTML = "Chance/s Left: " + attemptCounter;
            reroll.style.display = "none";
            window.alert('hint: go higher');
            userGuess.value = "";

        } else if (randomNumber < userGuess.value) {

            attemptCounter--;
            attemptHolder.innerHTML = "Chance/s Left: " + attemptCounter;
            reroll.style.display = "none";
            window.alert('hint: go lower');
            userGuess.value = "";

        }

        if (attemptCounter == 0) {

            numberHolder.innerHTML = randomNumber;
            guessButton.disabled = true;
            reroll.style.display = "none";
            userGuess.value = "";

        }

    });
});

range2.addEventListener('click', function () {

    gameUI.style.display = "flex";
    mainMenu.style.display = "none";

    attemptCounter = 5;
    range = 50;

    reRoll();

    guessButton.addEventListener('click', function () {

        if (randomNumber == userGuess.value) {

            numberHolder.innerHTML = randomNumber;
            window.alert("You've got the correct answer!");
            score++;
            scoreHolder.innerHTML = 'Score: ' + score;
            guessButton.disabled = true;
            reroll.style.display = "contents";
            userGuess.value = "";

        } else if (randomNumber > userGuess.value) {

            attemptCounter--;
            attemptHolder.innerHTML = "Chance/s Left: " + attemptCounter;
            reroll.style.display = "none";
            window.alert('hint: go higher');
            userGuess.value = "";

        } else if (randomNumber < userGuess.value) {

            attemptCounter--;
            attemptHolder.innerHTML = "Chance/s Left: " + attemptCounter;
            reroll.style.display = "none";
            window.alert('hint: go lower');
            userGuess.value = "";

        }

        if (attemptCounter == 0) {

            numberHolder.innerHTML = randomNumber;
            guessButton.disabled = true;
            reroll.style.display = "none";
            userGuess.value = "";

        }

    });

});
range3.addEventListener('click', function () {

    gameUI.style.display = "flex";
    mainMenu.style.display = "none";

    attemptCounter = 10;
    range = 100;

    reRoll();

    guessButton.addEventListener('click', function () {

        if (randomNumber == userGuess.value) {

            numberHolder.innerHTML = randomNumber;
            window.alert("You've got the correct answer!");
            score++;
            scoreHolder.innerHTML = 'Score: ' + score;
            guessButton.disabled = true;
            reroll.style.display = "contents";
            userGuess.value = "";

        } else if (randomNumber > userGuess.value) {

            attemptCounter--;
            attemptHolder.innerHTML = "Chance/s Left: " + attemptCounter;
            reroll.style.display = "none";
            window.alert('hint: go higher');
            userGuess.value = "";

        } else if (randomNumber < userGuess.value) {

            attemptCounter--;
            attemptHolder.innerHTML = "Chance/s Left: " + attemptCounter;
            reroll.style.display = "none";
            window.alert('hint: go lower');
            userGuess.value = "";

        }

        if (attemptCounter == 0) {

            numberHolder.innerHTML = randomNumber;
            guessButton.disabled = true;
            reroll.style.display = "none";
            userGuess.value = "";

        }

    });
});

exit.addEventListener('click', function () {

    if (window.confirm("Are you sure you want to exit? Your total score is " + score) == true) {

        location.reload();
    }
});

reroll.addEventListener('click', reRoll);