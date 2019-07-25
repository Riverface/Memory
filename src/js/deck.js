export function Deck(pairs) {
  this.images = [
    "./media/1.png",
    "./media/2.png",
    "./media/3.png",
    "./media/4.png",
    "./media/5.png",
    "./media/6.png",
    "./media/7.png",
    "./media/8.png",
    "./media/9.png",
    "./media/10.png"
  ];
  this.names = [
    "Cowboy<br><br> Cryptworlds",
    "Wayne<br><br> Hylics",
    "Father<br><br>Toilet in Wonderland",
    "GRAND DAD<br><br>GRAND DAD",
    "Le batteur<br><br>OFF",
    "Phillip<br><br>Space Funeral",
    "Naul<br><br>Petscop",
    "Madotsuki<br><br> (yume nikki",
    "Gingiva <br><br> Gingiva",
    "Shoe <br><br>Ticket"
  ];
  this.sounds = [
    "./media/1.wav",
    "./media/2.wav",
    "./media/3.wav",
    "./media/4.mp3",
    "./media/5.wav",
    "./media/6.wav",
    "./media/7.wav",
    "./media/8.wav",
    "./media/9.wav",
    "./media/10.wav"
  ];

  this.cards = [

  ];
  this.clickstate = true;
  this.pairs = pairs;
  this.curvariety = 0;
  this.prevcard = new Card();
  this.correctcount = 0;
}
export function Card(name, image, sound, variety) {
  this.name = name;
  this.image = image;
  this.sound = sound;
  this.variety = variety;
  // this.id;
}

Deck.prototype.Generatepool = function () {
  //i = iterator
  //
  for (var i = 0; i < this.pairs; i++) {
    var randum = Math.floor(Math.random() * this.names.length);
    var randpos = Math.floor(Math.random() * this.cards.length);
    this.cards.splice(randpos, 0, new Card(this.names[randum], this.images[randum], this.sounds[randum], randum + 1));
    randpos = Math.floor(Math.random() * this.cards.length);
    this.cards.splice(randpos, 0, new Card(this.names[randum], this.images[randum], this.sounds[randum], randum + 1));
  }

};
Deck.prototype.GameReady = function (pairs) {
  this.Generatepool(pairs);
  this.addIDs();
  $("#game").html(this.Print());
  this.AddButtons();
  this.CardHide();
  $("#generate").hide();
  $("#pairs").hide();
}
Card.prototype.Print = function () {

  var printer = "<div class='card' id='card" +
    this.id + "' data-variety='" +
    this.variety + "' id='card" +
    this.id + "'><div class='cardback' id='cardback" +
    this.id + "'> </div>" +
    "<div id='cardfront" + this.id +
    "' class='cardfront'><img class='cardimage'" +
    " src='" + this.image +
    "' alt='" + this.name +
    "'></img><audio volume='0.001' id='cardaudio" + this.id +
    "' src = '" + this.sound + "'></audio><div class='name'>" +
    this.name + "</div></div></div></div>";
  return printer;
}
Deck.prototype.Print = function () {
  var printing = "";

  this.cards.forEach(function (curcard) {

    printing += curcard.Print();

  });
  return printing;
}
Deck.prototype.Feedback = function (input, thiscard) {
  var currentdeck = this;
  if (input == "same") {
    currentdeck.preventclicktoggle();
    $("#cardaudio" + thiscard.id).prop("volume", 0.1);
    $("#Nice")[0].play();
    $("#Nice").prop("volume", 0.1);
    $("#cardfront" + thiscard.id).show();
    $("#cardback" + thiscard.id).hide();
    $("#Nice")[0].onended = function () {
      currentdeck.correctcount++;
      $("#count").html("correct: "+ currentdeck.correctcount);
      currentdeck.preventclicktoggle();
      $("#card" + thiscard.id).hide();
      $("#card" + currentdeck.prevcard.id).hide();
      currentdeck.WinCheck();

    }
    $("#cardaudio" + thiscard.id)[0].play();
    currentdeck.curvariety = 0;
  } else if (input == "different") {


    $("#cardaudio" + thiscard.id).prop("volume", 0.1);
    $("#cardaudio" + thiscard.id)[0].play();

    currentdeck.curvariety = 0;
    $("#Laff").prop("volume", 0.1);
    $("#Laff")[0].play();
    $("#cardfront" + thiscard.id).show();
    $("#cardback" + thiscard.id).hide();
    $("#cardback" + currentdeck.prevcard.id).hide();
    currentdeck.preventclicktoggle();

    $("#Laff")[0].onended = function () {
      $("#cardfront" + currentdeck.prevcard.id).hide();
      $("#cardback" + currentdeck.prevcard.id).show();
      $("#cardfront" + thiscard.id).hide();
      $("#cardback" + thiscard.id).show();
      currentdeck.preventclicktoggle();
    }
  } else if (input == "turn1") {
    currentdeck.preventclicktoggle();
    $("#cardaudio" + thiscard.id).prop("volume", 0.1);
    $("#cardaudio" + thiscard.id)[0].play();
    $("#cardaudio" + thiscard.id)[0].onended = function () {
      $("#cardfront" + thiscard.id).show();
      $("#cardback" + thiscard.id).hide();
      currentdeck.preventclicktoggle();
    }
    currentdeck.prevcard = Object.assign(currentdeck.prevcard, thiscard);
    currentdeck.curvariety = currentdeck.prevcard.variety;
  }
}
Deck.prototype.AddButtons = function () {
  var currentdeck = this;
  this.cards.forEach(function (thiscard) {
    $("#cardback" + thiscard.id).click(function () {
      currentdeck.Feedback(currentdeck.VarietyCheck(thiscard), thiscard);
    });

  });
}
Deck.prototype.preventclicktoggle = function () {
  var curdeck = this;
  if (curdeck.clickstate == true) {
    curdeck.cards.forEach(function (thecard) {

      $("#cardback" + thecard.id).css("pointer-events", "none");

    });
    curdeck.clickstate = false;
  } else if (curdeck.clickstate == false) {

    curdeck.cards.forEach(function (thecard) {

      $("#cardback" + thecard.id).css("pointer-events", "all");



    });
    curdeck.clickstate = true;
  }

}

Deck.prototype.addIDs = function () {

  // var curit = 1;

  this.cards.forEach(function (thiscard, curit) {
    thiscard.id = curit;

  });



}
Deck.prototype.CardHide = function () {
  this.cards.forEach(function (thiscard) {
    $("#cardfront" + thiscard.id).hide();
  });
}

Deck.prototype.VarietyCheck = function (thecard) {
  var currentdeck = this;

  if (currentdeck.curvariety == thecard.variety) {
    return "same";
  } else if (this.curvariety == 0) {
    return "turn1";
  } else {
    return "different";
  }

}
Deck.prototype.WinCheck = function () {
  this.escapebool = false;
  var currdeck = this;
  this.cards.forEach(function (thecard) {

    if ($("#card" + thecard.id).is(":hidden") == true) {
      currdeck.escapebool = true;

    } else if ($("#card" + thecard.id).is(":visible") == true) {
      currdeck.escapebool = false;
      return false;
    }

  });

  if (currdeck.escapebool == true) {
    $("#wow").prop("volume", 0.1);

    $("#wow")[0].play();
    $("#count").append("<br>You win!");
  }

}