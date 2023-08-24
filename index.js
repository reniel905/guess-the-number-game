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
    attemptHolder.innerHTML = ' Lives Left: ' + attemptCounter;
    guessButton.disabled = false;

}


range1.addEventListener('click', function () {

    gameUI.style.display = "flex";
    mainMenu.style.display = "none";

    attemptCounter = 1;
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

        } else {

            attemptCounter--;
            attemptHolder.innerHTML = 'Lives Left: ' + attemptCounter;

            if (attemptCounter == 0) {

                numberHolder.innerHTML = randomNumber;
                guessButton.disabled = true;
                reroll.style.display = "none";

            }

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

        } else {

            attemptCounter--;
            attemptHolder.innerHTML = 'Lives Left: ' + attemptCounter;
            reroll.style.display = "none";

            if (attemptCounter == 0) {

                numberHolder.innerHTML = randomNumber;
                guessButton.disabled = true;
                reroll.style.display = "none";

            }

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

        } else {

            attemptCounter--;
            attemptHolder.innerHTML = 'Lives Left: ' + attemptCounter;
            reroll.style.display = "none";

            if (attemptCounter == 0) {

                numberHolder.innerHTML = randomNumber;
                guessButton.disabled = true;
                reroll.style.display = "none";

            }

        }

    });
});

exit.addEventListener('click', function () {

    if (window.confirm("Are you sure you want to exit? Your total score is " + score) == true) {

        location.reload();
    }
});

reroll.addEventListener('click', reRoll);