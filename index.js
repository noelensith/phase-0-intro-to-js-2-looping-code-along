// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}
wrapGifts(gifts);*/
const cards = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(cards) {
    //create empty array then push message to array while interpolate cards [array] 
    //into suprise array, return array
    const surprise = []
    for (let i = 0; i < cards.length; i++)
        surprise.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    return surprise;

}

console.log(writeCards(cards))
//use while loop 
function countDown() {
    let countdown = 10
    while (countdown >= 0) {
        console.log(countdown--)
    }
}