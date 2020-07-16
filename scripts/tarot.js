function card1(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}
var deck1 = [
  new card1(
    "The Fool",
    `If the Tarot Fool card has a position in the divination spread referring to you, it means you are the Fool - for now or for long, for good or for bad. Usually that seems bad but turns out to be good. You are able to deal with things in a carefree, improvised manner. What bothers others seems to have no effect on you. Congratulations! But if you have plans, don't expect them to be completed.`,
    "fo"
  ),
  new card1(
    "The Magician",
    `If the Tarot Magician card has a position in the divination spread referring to you, then you are the one attracted to actions that may seem both irrelevant and a bit absurd. Your approach is unconventional, to say the least, but that's exactly why it might work - to everyone's surprise. But you should avoid applying that approach to things as a matter of routine. That just won't work. Know the time and the place for it. And stay wary of what it might lead to at length. The world of magic is not predictable.`,
    "ma"
  ),
  new card1(
    "The High Priestess ",
    `If the Tarot High Priestess card has a position in the divination spread referring to you, it means you are in a position to solve problems where others would fail miserably. You have the key, even if it is not even obvious to you. Your advice should be followed, but it's not sure to happen, since people just don't see what you see. Nothing to do about that. No number of words work on those who don't listen.`,
    "hp"
  ),
  new card1(
    "The Empress",
    `If the Tarot Empress card has a position in the divination spread referring to you, it means you have the Empress qualities - be it temporarily or constantly. You are the cooling influence on any heated situation, the one trusted to find the peaceful solution even to a problem involving a lot of calamity. Others do well to follow your gentle lead, and several of them understand that.`,
    "em3"
  ),
  new card1(
    "The Emperor",
    `If the Tarot Emperor card has a position in the divination spread referring to you, though, it says that you have the power to force the outcome of your choosing, but probably not without a fight. Don't worry, you will win it.`,
    "em4"
  ),
  new card1(
    "The Hierophant",
    `If the Tarot Hierophant card has a position in the divination spread which refers to you, then you are in a position that others can't ignore. It is not exactly one of power to decide or spring into action. It's just that you can't be opposed and your preferences can't be ignored. You don't have to be modest about this strong influence, but you should. Tomorrow, in another situation, things may be very different. And people remember. To be respected is far from the same as being liked, or even admired.`,
    "hi"
  ),
  new card1(
    "The Lovers",
    `If the Tarot Lovers card has a position in the divination spread indicating you, it simply means that you are the lover - for the moment or always. You search for someone to love, or you have just found that special someone. It is not at all sure that this someone will feel the same for you, but the odds are on your side. Love is, as explained above, contagious. In any case, you will find yourself acting on that emotion, wherever it leads you.`,
    "lo"
  ),
  new card1("The Magician", ``, "ma"),
];
function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("drawP").onclick = function () {
  var index = getRandom(7);
  var currentCard = deck1[index];

  document.getElementById("displayP").innerHTML =
    '<img src="major22/' +
    currentCard.image +
    '.png"><h2>' +
    currentCard.name +
    "</h2><p>" +
    currentCard.description +
    "</p>";
};

// minor

function card(name, description, image, number) {
  this.name = name;
  this.description = description;
  this.image = image;
  this.number = number;
}

var deck = [
  new card(
    "Ace of Wands",
    `Every Ace is sort of an exclamation mark. Something important, even remarkable, will take place - in the case of Wands regarding your material circumstances. It's neither good nor bad, but very significant, indeed, affecting your relation to material matters.`,
    "aw",
    "I"
  ),
  new card(
    "Two of Wands",
    `Longing for the world and all it has to offer, although you may already have a decent share of it.`,
    "tw",
    "II"
  ),
  new card(
    "Three of Wands",
    `Missing the world and all the good things it has offered. The card of having partaken in something rewarding, but now being passed by, as if obsolete.`,
    "thw",
    "III"
  ),
  new card(
    "Four of Wands",
    `The celebration of a homecoming of sorts. Returning from the world, enriched and pleased, receiving the praise and rewards for it.`,
    "fow",
    "IV"
  ),
  new card(
    "Five of Wands",
    `Calamity that may be invigorating but can become costly. What seems easy at first turns complicated when ambitions collide.`,
    "fiw",
    "V"
  ),
  new card(
    "Six of Wands",
    `Success and great gain in material matters, making others want to join you. But don't forget to prepare for rainy days that may come.`,
    "siw",
    "VI"
  ),
  new card(
    "Seven of Wands",
    `Struggle to hold on to what you have. Others try to take it from you.`,
    "sew",
    "VII"
  ),
  new card(
    "Eight of Wands",
    `Struggle to hold on to what you have. Others try to take it from you.`,
    "eiw",
    "VIII"
  ),
  new card(
    "Nine of Wands",
    `Recovering after having been overwhelmed by too many disadvantages. You struggled hard, but everything was against you. You want to try again.`,
    "niw",
    "IX"
  ),
  new card(
    "Ten of Wands",
    `Too much to carry. Your workload is unreasonable, and still there's no certain reward ahead. Are you being used for others' profit?`,
    "tew",
    "X"
  ),

  new card(
    "Knight of Wands",
    `You have grasped the opportunity and boldly move forward. Great promises of success, as long as you just sit tightly on your saddle.`,
    "knw",
    "KNIGHT"
  ),
  new card(
    "Queen of Wands",
    `You have your possessions and know how to keep them, but do you know how to increase them? Don't settle with what you have, or it may wither.`,
    "quw",
    "QUEEN"
  ),
  new card(
    "King of Wands",
    `Wealth that is hard to keep. What's the point of prosperity if you don't trust that you can hold on to it? Envy is a poison also to the object of it.`,
    "kiw",
    "KING"
  ),
];

// function getRandom(num) {
//   var randomNumber = Math.floor(Math.random() * num);
//   return randomNumber;
// }

document.getElementById("draw").onclick = function () {
  var index = getRandom(12);
  var currentCard = deck[index];

  document.getElementById("display").innerHTML =
    '<img src="images/' +
    currentCard.image +
    '.jpg"><h2>' +
    currentCard.name +
    "</h2><h4>" +
    currentCard.number +
    "</h4><p>" +
    currentCard.description +
    "</p>";
};
