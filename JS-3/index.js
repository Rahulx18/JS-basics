let player = {
    name: "Player1",
    chip: 150
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
    let cardNum = Math.floor(Math.random() * 13) + 1;
    if (cardNum === 1) {
        return 11;
    }
    if (cardNum > 10) {
        return 10;
    }
    return cardNum;
}

function updatePlayerChip(count) {
    player.chip += count;
    playerEl.textContent = `${player.name}: $${player.chip}`;
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        updatePlayerChip(player.chip)
    } else {
        message = "You're out of the game!";
        isAlive = false;
        updatePlayerChip(-10);
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();

        if (sum > 21) {
            message = "You're out of the game!";
            isAlive = false;
            renderGame();
            updatePlayerChip(-10);
        }
    }
}


playerEl.textContent = `${player.name}: $${player.chip}`;