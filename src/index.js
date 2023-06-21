import {diceRoll, Game, Player} from './business.js';
import './css/styles.css';

let img = document.getElementById('img');
let pigGame = new Game();

function rollResult1() {
    if (pigGame.currentPlayer === 1) {
        pigGame.players[1].tempScore = 0;
        document.getElementById("display-dice-roll").innerText = 1;
        document.getElementById("player-1-temp-score").innerText = "You hit a 1! You're temporary score has reset and now it's P2 turn"; 
        pigGame.setActivePlayer();
    } else if (pigGame.currentPlayer === 2) {
        pigGame.players[2].tempScore = 0;
        document.getElementById("display-dice-roll").innerText = 1;
        document.getElementById("player-2-temp-score").innerText = "You hit a 1! You're temporary score has reset and now it's P1 turn"; 
        pigGame.setActivePlayer();
        console.log("P2 hit 1");
    }

}

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let player1 = document.getElementById('player-1-input-name').value;
    let player2 = document.getElementById('player-2-input-name').value;
    document.getElementById('player-1-name').innerText = player1.toUpperCase();
    document.getElementById('player-2-name').innerText = player2.toUpperCase();
    let player1Object = new Player(player1);
    let player2Object = new Player(player2);
    pigGame.addPlayer(player1Object);
    pigGame.addPlayer(player2Object);
    form.setAttribute('class', 'hidden')
    let mainDiv = document.getElementById('main-div');
    mainDiv.classList.remove("invisible");
    let goalDiv = document.getElementById('goal-div');
    goalDiv.classList.remove("invisible");

});

let rollDice = document.getElementById('roll-dice');
rollDice.addEventListener('click', function() {
    let diceCurrentNumber = document.getElementById('dice-current-number');
    diceCurrentNumber.setAttribute('class','')
    let rollResult = diceRoll();

    // if (diceRoll() === 1) {
    //     img.src = 'img/die1.png';
    // } else if (diceRoll() === 2){
    //     img.src = 'img/die2.png';
    // } else if (diceRoll() === 3){
    //     img.src = 'img/die3.png';
    // } else if (diceRoll() === 4){
    //     img.src = 'img/die4.png';
    // } else if (diceRoll() === 5){
    //     img.src = 'img/die5.png';
    // } else if (diceRoll() === 6){
    //     img.src = 'img/die6.png';
    // };

    if (rollResult === 1) {
        rollResult1()
    } else {
        if (pigGame.currentPlayer === 1) {
            document.getElementById("display-dice-roll").innerText = rollResult;
            pigGame.players[1].tempScore += rollResult;
            document.getElementById("player-1-temp-score").innerText = pigGame.players[1].tempScore; 
        } else if (pigGame.currentPlayer === 2)    {
            document.getElementById("display-dice-roll").innerText = rollResult;
            pigGame.players[2].tempScore += rollResult;
            document.getElementById("player-2-temp-score").innerText = pigGame.players[2].tempScore; 
        }
    }

    
});

let winningDiv = document.getElementById('winning');
let generalDiv = document.getElementById('general-div');
let holdButton = document.getElementById('hold');
let winnerName = document.getElementById('winner-name');

holdButton.addEventListener('click', function () {
    if (pigGame.currentPlayer === 1) {
        pigGame.players[1].permScore += pigGame.players[1].tempScore;
        pigGame.players[1].tempScore = 0;
        document.getElementById("player-1-perm-score").innerText = pigGame.players[1].permScore; 
        document.getElementById("player-1-temp-score").innerText = '';
        if (pigGame.players[1].permScore >= 100){
            winnerName.innerHTML = pigGame.players[1].name;
            generalDiv.setAttribute('class', 'hidden');
            winningDiv.setAttribute('class', 'winning');
        } else {
            pigGame.setActivePlayer();
        }
    } else if (pigGame.currentPlayer === 2) {
        pigGame.players[2].permScore += pigGame.players[2].tempScore;
        pigGame.players[2].tempScore = 0;
        document.getElementById("player-2-perm-score").innerText = pigGame.players[2].permScore; 
        document.getElementById("player-2-temp-score").innerText = ''; 
        if (pigGame.players[2].permScore >= 100){
            winnerName.innerHTML = pigGame.players[2].name;
            generalDiv.setAttribute('class', 'hidden');
            winningDiv.setAttribute('class', 'winning');
        } else {
            pigGame.setActivePlayer();
        }
    }
    
});


let newGame = document.getElementById('new-game');
newGame.addEventListener('click', function(){
    window.location.reload();
});