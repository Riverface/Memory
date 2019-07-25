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

import "./../media/6.png";
import "./../media/6.wav";

import "./../media/7.png";
import "./../media/7.wav";

import "./../media/8.png";
import "./../media/8.wav";

import "./../media/9.png";
import "./../media/9.wav";

import "./../media/10.png";
import "./../media/10.wav";

import "./../media/bg.mp3";
import './../css/styles.css';
import './../media/Laff.wav';
import './../media/Nice.wav';
import './../media/WOW.mp3';

import {Deck, Card} from "./deck.js";
$(document).ready(function() {
  console.log("BBBBBBBBBBB");
  // Stuff to do as soon as the DOM is ready
  $("#generate").click(function(){
    console.log("AAAAAAAAAAAAAAA");
    var deck = new Deck($("#pairs").val());
    deck.GameReady();
    console.log(deck);
  });

});
