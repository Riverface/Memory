
export function Deck(maxpairs) {
  this.images = [
    "/../media/1.png",
    "/../media/2.png",
    "/../media/3.png",
    "/../media/4.png",
    "/../media/5.png"
  ];
  this.names = [
    "Cowboy",
    "Wayne",
    "Father",
    "GRAND DAD",
    "Le batteur"
  ];
  this.sounds = [
    "/../media/1.wav",
    "/../media/2.wav",
    "/../media/3.wav",
    "/../media/4.mp3",
    "/../media/5.wav"
  ];

  this.cards = [

  ];

  this.maxpairs = maxpairs;

}

Deck.prototype.Generatepool = function() {
  //i = iterator
  //
  for (var i = 0; i < this.maxpairs; i++) {
    var randum = Math.floor(Math.random() * 5);
    this.cards.push(new Card(this.names[randum], this.images[randum], this.sounds[randum], randum+1));
    console.log(new Card(this.names[randum], this.images[randum], this.sounds[randum], randum+1));
    this.cards.push(new Card(this.names[randum], this.images[randum], this.sounds[randum], randum+1));
  }
console.log(this);
};

Deck.prototype.Print = function(){
var printing = "";

this.cards.forEach(function(curcard){

printing += curcard.Print();

});
return printing;
}
Deck.prototype.Shuffle = function() {
  console.log(this);
  var unshuffled = this.cards;
  var shuffled = [];
  var randum;
  for (var i = 0; i < unshuffled.length; i++) {
    randum = Math.floor(Math.random() * this.cards.length);
    shuffled.push(unshuffled[randum]);
    
  }

  return shuffled;
}

export function Card(name, image, sound, variety) {
  this.name = name;
  this.image = image;
  this.sound = sound;
  this.variety = variety;
  // this.id;
}
Card.prototype.Print = function() {
  console.log(this.id);
  var printer = "<div class='card' data-variety='"+ this.variety + "' id='card"+ this.id + "'><div class='cardback' id='cardback"+this.id+"'> This is the back</div><div class='cardfront'>" +
  "<div id='cardfront"+this.id+"'><img class='cardimage'" +
  " src='" + this.image +
  "' alt='"+ this.name +"'></img><audio volume='0.01' id='cardaudio"+this.id+"' src = '"+this.sound+"'></audio></div></div></div>";
return printer;
}
 
Deck.prototype.AddButtons = function(){
  this.cards.forEach(function(thiscard){
    $("#cardfront"+thiscard.id).click(function(){
    $("#cardaudio"+thiscard.id)[0].play();
    $("#cardfront"+thiscard.id).hide();
    });
  });
}

Deck.prototype.addIDs = function(){
  console.log(this);
  // var curit = 1;
  
  this.cards.forEach(function(thiscard,curit){
    thiscard.id = curit;
    console.log(curit,thiscard.id);
  });
  console.log("DIVIDER");
  console.log(this);
  console.log("DIVIDER");
}