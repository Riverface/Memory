import "./../media/1.png";
import "./../media/1.wav";

import "./../media/2.png";
import "./../media/2.wav";

import "./../media/3.png";
import "./../media/3.wav";

import "./../media/4.png";
import "./../media/4.mp3";

import "./../media/5.png";
import "./../media/5.wav";

import "./../media/bg.mp3";
import './../css/styles.css';

import {Deck, Card} from "./deck.js";
$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready
  $("#generate").click(function(){
    var deck = new Deck(6);
    deck.Generatepool();
    console.log("divider");
    console.log("oioip", deck);
    console.log("divider");
    deck.addIDs();
    deck.cards = deck.Shuffle();
    $("#game").html(deck.Print());
    deck.AddButtons();
    $("#generate").hide();
    console.log(deck);
  });

});
