let cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}
	else { console.log("Please try again");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].suit)
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);