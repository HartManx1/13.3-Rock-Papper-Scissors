var button_rock = document.getElementById("r");
var button_paper = document.getElementById("p");
var button_scissors = document.getElementById("s");
var choice = document.getElementsByClassName("choice");
var newGameBtn = document.getElementById("new_game");
var roundsShow = document.getElementById("roundsShow");

var score_user_span = document.getElementById("score-user");
var score_comp_span = document.getElementById("score-comp");

var score = 0;
var user_score = 0;
var comp_score = 0;

var rundy = document.getElementById("rounds");
var test = document.querySelector(".test");
var result = document.querySelector(".result");
var result_win_lose = document.getElementById("result_win_lose")
var output = document.getElementById("output")



function wybierzSymbol(user_choice) {
    var symbols = ["rock", "paper", "scissors"];
    var choosen_number = Math.ceil(Math.random() * symbols.length) - 1;
    var choosen_symbol = symbols[choosen_number];
    porownaj(user_choice, choosen_symbol);
};

button_rock.addEventListener('click', function () {
    wybierzSymbol('rock');
});

button_paper.addEventListener('click', function () {
    wybierzSymbol('paper');
});

button_scissors.addEventListener('click', function () {
    wybierzSymbol('scissors');
});




function porownaj(u, c) {
    console.log('user choose: ' + u);
    console.log('comp choose: ' + c);

    if (u === c) {
        wyswietl('draw.', u, c);
    }

    //jako 3 ify wyswietl ze wygral komputer 
    if (u == 'rock') {

        if (c == 'scissors') {
            wyswietl('you!', u, c);
        }
        if (c == 'paper') {
            wyswietl('computer :(', u, c);
        }
    }
    if (u == 'paper') {

        if (c == 'rock') {
            wyswietl('you!', u, c);
        }
        if (c == 'scissors') {
            wyswietl('computer :(', u, c);
        }
    }
    if (u == 'scissors') {

        if (c == 'paper') {
            wyswietl('you!', u, c);
        }
        if (c == 'rock') {
            wyswietl('computer :(', u, c);
        }
    }
};

function wyswietl(kto, u, c) {
    score++;
    test.innerHTML = ('This move won: ' + kto);
    test.style.color = "grey";
    console.log('Wygrywa: ', kto);
    console.log('Ilośc rund wynosi: ', score);
    rundy.innerHTML = ("Rounds played: " + score);
    result.innerHTML = ('Your choice: ' + u + "<br>" + 'Computer choose: ' + c + "<br><br>");
    wynik(kto);
};


function wynik(winner) {
    if (winner === 'you!') {
        user_score++;
        score_user_span.innerHTML = user_score;
    }
    if (winner === 'computer :(') {
        comp_score++;
        score_comp_span.innerHTML = comp_score;
    }
    if (rounds == user_score) {
        result_win_lose.insertAdjacentHTML('beforeend', 'YOU WON THE ENTIRE GAME!!! <br>');
        result_win_lose.style.color = "black"
        buttonsDisable();
    }
    if (rounds == comp_score) {
        result_win_lose.insertAdjacentHTML('beforeend', 'You lost :(, click start game button to play again. <br>');
        result_win_lose.style.color = "black"
        buttonsDisable();
    }
};



//start game button

newGameBtn.addEventListener('click', function () {
    score = 0;
    rounds = window.prompt('How many rounds you want to play?');
    score_user_span.innerHTML = 0;
    score_comp_span.innerHTML = 0;
    result_win_lose.innerHTML = "";
    if (isNaN(rounds) || rounds <= 0) {
        roundsShow.innerHTML = 'Type correct number of rounds!';
        //buttonsDisable();

    }
    else if (rounds > 0) {
        roundsShow.innerHTML = ('Rounds to be played: ' + rounds);
        buttonsEnable();
    }
});

//blokujaca
function buttonsDisable() {
    button_rock.setAttribute('disabled', true);
    button_paper.setAttribute('disabled', true);
    button_scissors.setAttribute('disabled', true);
};


function buttonsEnable() {
    button_rock.removeAttribute('disabled');
    button_paper.removeAttribute('disabled');
    button_scissors.removeAttribute('disabled');
};




