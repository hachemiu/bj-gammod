// BJ-Game.js
let cards = [];
let sum = 0;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

let player = "";

let cardsImg = [];

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startgame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + sum;
    player = prompt("Enter your name to start game");
    playerEl.textContent = player + ":";
    playerEl.style.display = "block"; //Show Player's Name
    message = "";
    if (sum <= 20) {
        message = "Do you want another card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        isAlive = false;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newcard() {
    if (isAlive === true && sum <= 20) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        cardsEl.textContent = "Cards: " + cards;
        sumEl.textContent = "Sum: " + sum;
        if (sum <= 20) {
            message = "Do you want another card?";
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!";
            isAlive = false;
        } else {
            message = "You're out of the game!";
            isAlive = false;
        }
        messageEl.textContent = message;
    }
}