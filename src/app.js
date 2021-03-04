const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A'.split(','),
    makeDeck() {
        this.clearDeck();
        const {deck, suits, values} = this;
        for (let suit of suits) {
            for (let value of values) {
                deck.push({suit, value})
            }
        }
        return deck;
    },
    shuffle() {
        const {deck} = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * [i + 1]);
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    clearDeck() {
        const {deck} = this;
        deck.splice(0, deck.length);
    }
}