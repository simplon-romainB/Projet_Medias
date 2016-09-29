# Projet Médias - Version 2
* MAJ du 21/09/2016
Création index.html  
Intégration vidéo introductive  
Fondation du site  
logo
#html

<div id="set-height"></div>
<p id="time"></p>
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload">
  <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="http://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm"></source>
  <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="http://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.ogv"></source>
  <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="http://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.mp4"></source>
  <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
</video>

#css
#set-height {
  display: block;
}
#v0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
p font-family helvetica {
  font-size: 24px;
}

#js

// lower numbers = faster playback
  playbackConst = 500,
  // get page height from video duration
  setHeight = document.getElementById("set-height"),
  // select video element         
  vid = document.getElementById('v0');
  // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scollPlay(){  
var frameNumber  = window.pageYOffset/playbackConst;
vid.currentTime  = frameNumber;
window.requestAnimationFrame(scollPlay);
}

window.requestAnimationFrame(scollPlay);
