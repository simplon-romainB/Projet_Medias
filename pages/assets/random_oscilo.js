// TOFIXED
// plus de 30 recurence de getElementbyId
/*---------------- osciloscope ----------------*/
//var piste = document.getElementById('audioOscilo').setAttribute('src',  './mp3/rehab.mp3');


  // tableau des données piste
  var PlayList = [
    {track: 1, artist: "Massive Attack", album: "Mezzanine", title:"Man Next Door", src: "../music/man_next_door.mp3", imgsrc: "../img/mezzanine.png" }, // 0
    {track: 2, artist: "Michael Jackson", album: "Thriller", title:"Wanna Be Startin' Somethin'", src: "../music/wanna_be_startin_somethin.mp3", imgsrc: "../img/thriller.png" }, // 1
    {track: 3, artist: " Kool & the Gang", album: "Light of Worlds", title:"Summer Madness", src: "../music/summer_madness.mp3", imgsrc: "../img/lights.jpg" } // 2
  ];

console.log(PlayList);


/*---------------- AUDIO API----------------*/
//Access-Control-Allow-Credentials: true; TOFIXED
var audio = new Audio();
audio.src = PlayList[0].src;
console.log(audio.src);
audio.controls = true;
audio.loop = false;

document.getElementById('titre').innerHTML= PlayList[0].title;
document.getElementById('artiste').innerHTML=PlayList[0].artist;
document.getElementById('album').innerHTML=PlayList[0].album;
//audio.crossorigin = "anonymous";

var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
window.addEventListener("load", initMp3Player, true);
function initMp3Player(){
  console.log("audio == "+ audio);
  document.getElementById('audio_box').appendChild(audio).setAttribute('id', 'audioOscilo');
  window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser_render');
  ctx = canvas.getContext('2d');
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  playRandom();
  frameLooper();
};
function frameLooper(){
  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
  window.requestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff6666";
  bars = 100; // nombre de bars sur l'abscisse
  for (var i = 0; i < bars; i++){
    bar_x = i * 10;
    bar_width = 8; // largeur des bars
    bar_height = -(fbc_array[i]/2);
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  };
};
/*---------------- PLAYRANDOM----------------*/
function playRandom(){
  // recuperer la SOURCE du MP3 default
  var playTrack = document.getElementById('audioOscilo');
  console.log(playTrack);

  // cacher / supprimer le control -- player
  playTrack.removeAttribute("controls");

  /*---------------- PARTIE A RECRIRE SELON TERME DOC PRECEDENT -----------------*/
  // recuperation de UL
  var mediaPlayer = document.getElementById('controlers');
  piste = document.getElementById('btns');

  /*---------------- ECRIRE TEXTE ----------------*/
  // écrire du texte dans les différents balbutiements
  function setText(el,text) {
    el.innerHTML = text;
  };

  /*---------------- BTN  PRECECDENT ----------------*/

  // création de Next
  var prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  mediaPlayer.appendChild(prevBtn);
  setText(prevBtn, "<");

  prevBtn.addEventListener("click", prev);

  function prev(){
    var trackPlayed = document.getElementById('audioOscilo').getAttribute('src')
    var prevTrack;

    // comparaison de l'Attribut HTML et de la propriété du tableau
    for (var i = 0; i < PlayList.length; i++) {
      //console.log("track joué = ",trackPlayed, PlayList[i].src);
      if(trackPlayed == PlayList[i].src){
        // Si la piste en Lecture est 0 (Needed me) on retourne la dernier piste de la PlayList (Jonny)
        if (trackPlayed == PlayList[0].src){
          prevTrack = PlayList[PlayList.length-1].src;

          //console.log("Needed Me > Johnny= " + PlayList[PlayList.length-1].src, prevTrack);
          //console.log(prevTrack);
          //console.log(i, "5 l'index de ", prevTrack);
          document.getElementById('audioOscilo').setAttribute('src', prevTrack);

          // remplacer les valeur
          document.getElementById('titre').innerHTML= PlayList[PlayList.length-1].title;
          document.getElementById('artiste').innerHTML=PlayList[PlayList.length-1].artist;
          document.getElementById('album').innerHTML=PlayList[PlayList.length-1].album;
        }
        // Si la piste est différent à l'index[0] (Needed me)
        else if ((trackPlayed != PlayList[0].src)){
          prevTrack = PlayList[i-1].src;

          //console.log(prevTrack);
          //console.log(i, "autre l'index de ", prevTrack);
          document.getElementById('audioOscilo').setAttribute('src', prevTrack);

          // remplacer les valeur
          document.getElementById('titre').innerHTML= PlayList[i-1].title;
          document.getElementById('artiste').innerHTML= PlayList[i-1].artist;
          document.getElementById('album').innerHTML= PlayList[i-1].album;
          console.log(PlayList[i-1].title);
        }
        console.log(i, " et track prev =", prevTrack);
        break;
      };
    };

  };
  /*---------------- PLAY & PAUSE BTN  ----------------*/
  var playBtn = document.createElement('button');
  playBtn.type = 'button';
  mediaPlayer.appendChild(playBtn);
  setText(playBtn, "play");
  // ECOUTEUR DE 'EVENEMENT'
  playBtn.addEventListener("click", player);

  /*---------------- PLAY & PAUSE BTN  ----------------*/
  function player() {
    if (playTrack.paused) {
      setText(playBtn,"pause");
      playTrack.play();
    } else {
      setText(playBtn,"play");
      playTrack.pause();
    };
  };
  /*---------------- SON / MUET /---------------*/
  var muteBtn = document.createElement('button');
  muteBtn.type = 'button';
  mediaPlayer.appendChild(muteBtn);
  setText(muteBtn,"mute");
  muteBtn.addEventListener("click", muter);
  function muter() {
    if (playTrack.volume == 0) {
      setText(this,"mute");
      playTrack.volume = 1;
    } else {
      setText(this,"unmute");
      playTrack.volume = 0;
    };
  };
  var randomBtn = document.createElement('button');
  randomBtn.type = 'button';
  mediaPlayer.appendChild(randomBtn);
  setText(randomBtn, "random");
  randomBtn.addEventListener("click", randomer);
  function randomer() {
    for (var id = 0; id < PlayList.length; id++) {
      var index = Math.floor(Math.random()*PlayList.length);
      var randomSrc = PlayList[index].src;
      console.log(index, " l'index de ", randomSrc);
    }

    // Remplacer la ressource SRC par nouvelle SRC RANDOM
    document.getElementById('audioOscilo').setAttribute('src', randomSrc);
    document.getElementById('titre').innerHTML= PlayList[index].title;
    document.getElementById('artiste').innerHTML= PlayList[index].artist;
    document.getElementById('album').innerHTML= PlayList[index].album;
    console.log(PlayList[index].title, "\n------");
  };
  /*---------------- NEXT BTN ----------------*/
    // création de Next
    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    mediaPlayer.appendChild(nextBtn);
    setText(nextBtn, ">");

    nextBtn.addEventListener("click", next); // event listen

    function next(){
      var trackPlayed = document.getElementById('audioOscilo').getAttribute('src');
      console.log(trackPlayed);
      var nextTrack;
      // comparaison de l'Attribut HTML et de la propriété du tableau
      for (var i = 0; i < PlayList.length; i++) {
        // console.log("track joué = ",trackPlayed, PlayList[i].src);
        if(trackPlayed == PlayList[i].src){
          // Si la piste en Lecture n'est pas 0 (Needed me) on retourne la dernier piste de la PlayList.(Jonny)
          if (trackPlayed == PlayList[PlayList.length-1].src){
            nextTrack = PlayList[0].src;

            document.getElementById('audioOscilo').setAttribute('src', nextTrack);
            // remplacer les valeur
            document.getElementById('titre').innerHTML= PlayList[0].title;
            document.getElementById('artiste').innerHTML=PlayList[0].artist;
            document.getElementById('album').innerHTML=PlayList[0].album;
          }
          // Si la piste est différent à l'index[0] (Needed me) alors j'incrémente
          else if ((trackPlayed != PlayList[PlayList.length-1].src)){
            nextTrack = PlayList[i+1].src;
            // ON remplace toutes les valeurs de l'audio TOFIXED ON aurait pu creer un constructeur Audio
            document.getElementById('audioOscilo').setAttribute('src', nextTrack);
            document.getElementById('titre').innerHTML= PlayList[i+1].title;
            document.getElementById('artiste').innerHTML= PlayList[i+1].artist;
            document.getElementById('album').innerHTML= PlayList[i+1].album;
          }
          // console.log(i, " et track next =", nextTrack);
          break;
        };
      };
    };
    /* -------------------------- cONTROLEUR DE BUFFER--------------------------------*/

    var bufferContainer =  document.createElement("div");
    var bufferTime = document.createElement("span");
    var progressTime = document.createElement("span");

    mediaPlayer.appendChild(bufferContainer).setAttribute('id', 'buffer-container'); // container pour mettre les timelines // enfant de mediaPlayer
    bufferContainer.appendChild(bufferTime).setAttribute('id', 'buffer'); // enfant de mediaPlayer > buffer-container
    bufferContainer.appendChild(progressTime).setAttribute('id', 'progress');// enfant de mediaPlayer > buffer-container
    var trackDuration =  playTrack.duration;
    playTrack.addEventListener('progress', buffer);
    function buffer(){
      // seekable >> lisible
      var trackReadEnd =  playTrack.seekable.end(playTrack.seekable.length -1);
      if (trackDuration > 0){
        document.getElementById('buffer').style.width = ((trackReadEnd / trackDuration)*100) + "%";
      }
    };
    playTrack.addEventListener('timeupdate', timeLine);
    function timeLine() {;
      if (trackDuration> 0) {
        document.getElementById('progress').style.width = ((playTrack.currentTime / trackDuration)*100) + "%";
      }
    };
    /* -------------------------- cONTROLEUR DE VOLUME --------------------------------*/
    ///// LES DIFFERENTS ACTIONS DES btns
    // Créer un controleur volume == "range"
    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    mediaPlayer.appendChild(volumeSlider);
    setText(volumeSlider, "volume");

    // paramétrer les attributs
    function setAttributes(el, attrs) {
      for(var key in attrs){
        el.setAttribute(key, attrs[key]);
      };
    };
    // attributs du curseur (souris) semblable muter()
    setAttributes(volumeSlider, { "type": "range", "min": "0", "max": "1", "step": "any", "value": "1" });

    // on donne une valeur à volume
    volumeSlider.addEventListener("input", function(){
      playTrack.volume = volumeSlider.value;
    });

    // sync controlers
    playTrack.addEventListener('volumechange', volumizer);
    function volumizer() {
      if (playTrack.volume == 0) {
        setText(muteBtn,"unmute");
      } else {
        setText(muteBtn,"mute");
      };
    };
    // fin de la musique
    playTrack.addEventListener('ended', finish);

    function finish() {
      //playTrack.currentTime = 0;
      next();
      playTrack.play();
    };
  };
