playOneByOne()

function playOneByOne(){
// >> RECUPERER LA VALEUR DU LECTEUR DEFAULT DABORD
// tableau des données piste
var PlayList = [
	{track: 1, artist: "Massive Attack", album: "Mezzanine", title:"Man Next Door", src: "./music/man_next_door.mp3", imgsrc: "./img/mezzanine.png" }, // 0
	{track: 2, artist: "Michael Jackson", album: "Thriller", title:"Wanna Be Startin' Somethin'", src: "./music/wanna_be_startin_somethin.mp3", imgsrc: "./img/thriller.png" }, // 1
	{track: 3, artist: " Kool & the Gang", album: "Light of Worlds", title:"Summer Madness", src: "./music/summer_madness.mp3", imgsrc: "./img/lights.jpg" } , // 2
	];

console.log("\n#1 INSERER PISTE UN PAR UN DANS CHAQUE PLAYER");
//parcourir la playlist et insérer petit à petit
/*var tagAudio = Array.from(document.getElementById('boxmusic').getElementsByClassName('track')); // Array.from transforme un Array-like en vrai tableau[]
var tagImg = Array.from(document.getElementById('boxmusic').getElementsByClassName('imgsrc'));*/


var tagAudio = Array.from(document.getElementById('boxmusic').getElementsByTagName('audio'));
var tagImg = Array.from(document.getElementById('boxmusic').getElementsByClassName('imgsrc'));
// écrire du texte dans les différents balbutiements
var text;
function setText(el,text){
	el.innerHTML = text;
}
// PISTES DE MA PLAYLST == et suppression de l'index
insertProp();
function insertProp(){
	for (var p = 0 ; p < PlayList.length, p < tagAudio.length, p < tagImg.length; p++) {
	// parourir le tableau de piste
	var pisteObj = PlayList[p]; // objet complet
	var piste = PlayList[p].src; // source
	var image = PlayList[p].imgsrc; //FIXME
	var hOp = PlayList[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	//console.log("var piste => numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);

	/// remplacer l'image de la piste
	/// /!\ si l'on veut une playliste alléatoire mettre le code de pist_random.js
	console.log("\n#A INSERER LA JACKET DE L'ALBUM :", image);
	tagImg[p].setAttribute('src', image);
	delete PlayList[p].imgsrc;
	console.log("TAG IMAGE après supression OK :",pisteObj);

	console.log("\n#B INSERER LA SOURCE DE L'AUDIO", piste);
	tagAudio[p].setAttribute('src', piste);
	delete PlayList[p].src;
	console.log("TAG AUDIO après suppression OK",pisteObj);

	// recuperer tous les propriété du tableau d'objet
	console.log("\n# PROPRIETE DU TABLEAU D'OBJET PISTE");
	var props ="";
	for (prop in pisteObj){
		props += prop +  " => " + pisteObj[prop] + "\n";
		console.log(props);
		var tagLiClass = document.getElementsByClassName(prop)[p];
		if (tagLiClass !== undefined|| tagLiClass !== null ) {
			console.log('RECUPERER la classe de LI équivalent à la propriété', tagLiClass);
			classe = tagLiClass.getAttribute('class');
			console.log(classe, " est un ",typeof(classe)) ;
			setText(tagLiClass, pisteObj[prop]);
		};
		console.log("piste pisteObj avant ended", pisteObj, tagAudio[p]);

	// lire la chanson suivante
	var currentSongIndex;
		for (var i = 0; i < tagAudio.length; i++) {
			tagAudio[i].addEventListener("play", function(){
				currentSongIndex = tagAudio.indexOf(this);
			});

			tagAudio[i].addEventListener("ended", function(){
				tagAudio[currentSongIndex].currentTime = 0;
					console.log(currentSongIndex);
					var next = tagAudio[currentSongIndex + 1] ? tagAudio[currentSongIndex + 1] : tagAudio[0];
					next.play();
					console.log('pendant',tagAudio[i]);
			});
			// jouer la musique suivante au click
			tagAudio[i].addEventListener("click", function(){
				if(tagAudio[currentSongIndex].played){
					console.log('CLICK!!!');
					currentSongIndex = tagAudio.indexOf(this).pause;
				}
				else if (currentSongIndex.paused){ // IMPOSSIBLE
					var clickNext = tagAudio.indexOf(this);
						clickNext.play();
					}
			});
			console.log('apres',tagAudio[i]);
		}
		// end of on progress
		console.log("piste ", p,"----", piste, image ,"----------------- Loop ", p+1);
		document.getElementsByTagName('li');
		};
	};
	};

// SCRIPT OSCILLO
var controlers = document.getElementsByClassName('btns');
function audioPlay() {
		// création de Next
	var playBtn = document.createElement('button');
		playBtn.type = 'button';
		playBtn.class = 'btn';
		controlers.appendChild(playBtn);
		setText(playBtn, ">");
       console.log(tagAudio);
       var button = document.getElementById("play");
       if (tagAudio.paused) {
         tagAudio.play();
          button.textContent = "||";
       } else {
         tagAudio.pause();
          button.textContent = ">";
       }
    }
// PASSER à une autre video:
// Quand la piste est finie (piste.ended)
// je charge l'autre piste piste(i+1).load()

}
