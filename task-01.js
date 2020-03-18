"use strict";
const notes = {
  do: document.querySelector("#do"),
  re: document.querySelector("#re"),
  mi: document.querySelector("#mi"),
  fa: document.querySelector("#fa"),
  sol: document.querySelector("#sol"),
  lja: document.querySelector("#la"),
  si: document.querySelector("#si"),
  dodo: document.querySelector("#dodo")
};
const notesAudio = {
  do: function soundClick() {
    var audio = new Audio();
    audio.src = "noty-do.mp3";
    audio.autoplay = true;
    notes.do.style.backgroundColor = getRandomColor();
  },
  re: function soundClick() {
    var audio = new Audio();
    audio.src = "re.mp3";
    audio.autoplay = true;
    notes.re.style.backgroundColor = getRandomColor();
  },
  mi: function soundClick() {
    var audio = new Audio();
    audio.src = "mi.mp3";
    audio.autoplay = true;
    notes.mi.style.backgroundColor = getRandomColor();
  },
  fa: function soundClick() {
    var audio = new Audio();
    audio.src = "fa.mp3";
    audio.autoplay = true;
    notes.fa.style.backgroundColor = getRandomColor();
  },
  sol: function soundClick() {
    var audio = new Audio();
    audio.src = "sol.mp3";
    audio.autoplay = true;
    notes.sol.style.backgroundColor = getRandomColor();
  },
  lja: function soundClick() {
    var audio = new Audio();
    audio.src = "lja.mp3";
    audio.autoplay = true;
    notes.lja.style.backgroundColor = getRandomColor();
  },
  si: function soundClick() {
    var audio = new Audio();
    audio.src = "si.mp3";
    audio.autoplay = true;
    notes.si.style.backgroundColor = getRandomColor();
  },
  dodo: function soundClick() {
    var audio = new Audio();
    audio.src = "noty-do.mp3";
    audio.autoplay = true;
    notes.dodo.style.backgroundColor = getRandomColor();
  }
};
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

notes.do.addEventListener("click", notesAudio.do);
notes.re.addEventListener("click", notesAudio.re);
notes.mi.addEventListener("click", notesAudio.mi);
notes.fa.addEventListener("click", notesAudio.fa);
notes.sol.addEventListener("click", notesAudio.sol);
notes.lja.addEventListener("click", notesAudio.lja);
notes.si.addEventListener("click", notesAudio.si);
notes.dodo.addEventListener("click", notesAudio.dodo);
