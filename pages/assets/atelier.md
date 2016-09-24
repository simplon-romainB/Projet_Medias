```javascript
// tableau des données piste
var PlayList = [
  {track: 1, artist: "Rihanna", album: "Anti", title:"Needed Me", src: "./mp3/neededme.mp3", imgsrc: "./img/neededme.jpg" }, // 0
  {track: 2, artist: "Young Money", album: "Rise Of An Empire", title:"Senile", src: "./mp3/senile.mp3", imgsrc: "./img/senile.jpg" } , // 1
  {track: 3, artist: "Disiz la peste", album: "Le Poisson Rouge", title:"J'pète Les Plombs", src: "./mp3/jpetelesplombs.mp3", imgsrc: "./img/jpetelesplombs.jpg" }, // 2
  {track: 4, artist: "Bjork", album: "Homogenic", title:"Joga", src: "./mp3/joga.mp3", imgsrc: "./img/joga.jpg" }, // 4
  {track: 5, artist: "Yemi Alade", album: "King of Queens", title:"Johnny", src: "./mp3/johnny.mp3", imgsrc: "./img/johnny.jpg" },// 5
  //{track: 6, artist: "Midnite", album: "Unpolished", title:"Don't Move", src: "./mp3/dontmove.mp3", imgsrc: "./img/dontmove.jpg" }, // 6 NE PAS DECOMMENTER
  {track: 7, artist: "Le Peuple De L'Herbe", album: "P.H Test/Two", title:"No Escape", src: "./mp3/noescape.mp3", imgsrc: "./img/noescape.jpg" },// 7
  {track: 8, artist: "Vanessa Da Mata", album: "Good Luck ft Ben Harper", title:"Boa Sorte", src: "./mp3/boasorte.mp3", imgsrc: "./img/boasorte.jpg" }, // 8
  {track: 9, artist: "Rihanna", album: "Good Girl Gone Bad", title:"Rehab", src: "./mp3/rehab.mp3", imgsrc: "./img/rehab.jpg" },// 9
  {track: 10, artist: "Oscar Chavez", album: "Desde Mexico Para Siempre Che", title:"Hasta Siempre Comandante Che Guevara", src: "./mp3/hastasiemprecomandantecheguevara.mp3", imgsrc: "./img/hastasiemprecomandantecheguevara.jpg" }, // 10
];

console.log(PlayList);

/*---------------- AUDIO API----------------*/
//Access-Control-Allow-Credentials: true; TOFIXED
var audio = new Audio();
audio.src = PlayList[0].src;
audio.controls = true; // on paramètre le controls du médias pour pouvoir le récupérer et le designer sois-même
audio.loop = false; // DÉSACTIVER LE LOOP car c'est par défaut
//audio.crossorigin = "anonymous";

// DECALRATION DES VARIABLES QUI VONT ETRE UTILISÉS
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

// APPELLE DE LA FONCTION INIALISATRICE DU MP3
window.addEventListener("load", initMp3Player, true);


function initMp3Player(){
document.getElementById('audio_box').appendChild(audio).setAttribute('id', 'audioOscilo');

// CREATION DE L'AUDIOCONTEXT
window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;


context = new AudioContext();
analyser = context.createAnalyser();
canvas = document.getElementById('analyser_render');
ctx = canvas.getContext('2d');

// CONNEXION DE DE LA SOURCE VERS L'ANALYSEUR
source = context.createMediaElementSource(audio);
source.connect(analyser);
// on connect l'analyseur à la destination
analyser.connect(context.destination);
playRandom(); // intègre les options de lecture
frameLooper();
};

// APPELER FRAME
function frameLooper(){

// ON REQUETE SUR LE CADRE DE L'ANIMATION.
// webkit pour l'adaption des diff browsers
//
  window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60); // rappel
          };
  })();


  window.requestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // création du style
  ctx.fillStyle = "#ff6666";
  // création du diagramme en bars.
  bars = 50; // nombre de bars sur l'abscisse
  for (var i = 0; i < bars; i++){
    bar_x = i * 10;
    bar_width = 8; // largeur des bars
    bar_height = -(fbc_array[i]/2);
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  };
};
/*---------------- PLAYRANDOM----------


```
