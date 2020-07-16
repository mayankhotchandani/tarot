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
  new card1(
    "The Chariot",
    `When the Tarot Chariot card refers to you as a person, it shows you being impressive and successful. You have the ability to get where you want to go. Remember that the trick to accomplish lasting success is to be modest about it, and that's not always easy.`,
    "ch"
  ),
  new card1(
    "Strength",
    `If the Tarot Strength card has a position in the divination spread referring to you, then you tend to utilize strength before considering other solutions. You have it, so you hurry to make use of it. That's really a weakness. It may be temporary, upon meeting a problem that frustrates you to begin with, or it is the way you tend to react. In any case, consider when strength of any kind is appropriate and when it is not. Quite often it is not, even when it seems to be needed.`,
    "st"
  ),
  new card1(
    "The Hermit",
    `If the Tarot Hermit card has a position in the divination spread referring to you, it means you tend to isolate yourself from others - either just in the present situation or as a constant personality trait. You should know which one it is. You avoid company and interference in the lives of others. You don't want to pick sides or make choices, at least not before you have had time to contemplate matters profoundly. Others may react with outspoken impatience, but that will not change your mind. Actually, it only makes you more committed to listening to your own mind instead of their words.`,
    "he"
  ),
  new card1(
    "The Wheel of Fortune",
    `If the Tarot Wheel of Fortune card has a position in the divination spread referring to you, it suggests that you have a tendency to risk too much with too little preparation. You want to wing it, whatever problem it is you are facing. That kind of improvisation can sometimes lead to really good solutions, but the opposite is just as possible. You should choose carefully when you want to leave things to chance.
  `,
    "we"
  ),
  new card1(
    "Justice",
    `If the Tarot Justice card has a position in the divination spread referring to you, it means you have to make a judgment about a person or a situation - or a combination thereof. It's not a pleasant task, but necessary. You should remind yourself that justice is difficult to reach, because truth is elusive. We just don't know all, and therefore we are rarely fit to judge. So, don't hurry to your conclusion. Try to be lenient if there is any reasonable doubt involved, and there almost always is.`,
    "ju"
  ),
  new card1(
    "The Hanged Man",
    `If the Tarot Hanged Man card has a position in the spread referring to you, it means you are the one readily making any sacrifice needed - either in the present situation, or as a constant personality trait. You have no fear of becoming the martyr, so to speak. Others will admire you for it (without telling either you or anyone else), but they will also urge you on to make your sacrifice, whenever the situation is such that there is something to gain from it - for all or just for them. Don't make your sacrifice for any little thing.
  `,
    "hm"
  ),
  new card1(
    "Death",
    `If the Tarot Death card has a position in the divination spread referring to you, it may very well be a serious warning about your health or some other very serious problem already striking you. If you can change the route you are on, you should. It is a warning. It may also mean that you can cause problems, even serious harm, to others.`,
    "de"
  ),
  new card1(
    "Temperance",
    `If the Tarot Temperance card position in the divination spread refers to you, it means you have ceased to act and learned patience - for the thing at hand or for good. Time will tell. It can also mean that you find yourself unable to act, although you feel the need. Something holds you back. It may be irritating, but still it can be a good thing. Haste should be avoided in most cases.`,
    "te"
  ),
  new card1(
    "The Devil",
    `If the Tarot Devil card's position in the divination spread refers to you, it is because you have done away with many of your inhibitions and act upon your lusts and longings, even when others might be upset or even condemn it. You are sort of devilish - be it for long or just for the moment, depending on the position of the card and the question you might have asked in the divination. Well, have fun while it lasts. It should be invigorating`,
    "dev"
  ),
  new card1(
    "The Tower",
    `If the Tarot Tower card has a position in the divination spread referring to you, it means you have a mentality that is bound for disappointment and utter failure. You need to change. You want to be drastic about things that demand patience and care. Most things do, at least the important ones. You might have reached the end of your patience after a long time of setbacks, but still your urge for decisive and forceful action is a mistake. Even if it is difficult, you need to calm down before you do something far too rash.
  `,
    "to"
  ),
  new card1(
    "The Star",
    `If the Tarot Star card has a position in the divination spread referring to you, then you are caught in a serenity that some would call a coma. You halt to reconsider just about everything. That is refreshing and sometimes absolutely necessary. But don't get stuck in it. You still have a life to live. It's a vacation, not a vocation.`,
    "sta"
  ),
  new card1(
    "The Moon",
    `If the Tarot Moon card has a position in the divination spread referring to you, it means that you are kind of a victim of longing. That can be temporary or something constant in you, depending on where the card appears and what question was asked. You should be able to decide which one it is. Urges in you surface, and there is little you can do about it. If you follow them, they grow, and if you refuse them they still grow. It can be frustrating, but it does indeed make you feel alive. others, though, may find you overly sentimental or obsessed.`,
    "mo"
  ),
  new card1(
    "The Sun",
    `If the Tarot Sun card has a position in the divination spread referring to you, it means you are in a position where you can accomplish great things, without even trying that hard. You might hurry forward beyond what is wise, just because you can. Take care. Just because you can do what you want doesn't guarantee you do what is good for you.`,
    "su"
  ),
  new card1(
    "Judgement",
    `If the Tarot Judgement card has a position in the divination spread that refers to you, which is rare, you are indeed the one making the final decision on the matter at hand. Still, it's not that you have much of a choice. You may even decide against your own will. It's just that you must do what the situation calls for. There is no other way. So, although you have the final say, it's like you have no say at all. You just know what decision has to be made.`,
    "jud"
  ),
  new card1(
    "The World",
    `If the Tarot World card has a position in the divination spread that refers to you, it means you are willing to risk it all for an opportunity coming along. You want to go for it, without hesitation. That's fun and can be rewarding, but it can also lead to unexpected disadvantages - though it may take quite long before they are revealed. You should really be wary of your own eagerness. Don't bite off more than you can chew. But sure, dare to take a bite!`,
    "wo"
  ),
];
function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("drawP").onclick = function () {
  var index = getRandom(22);
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
