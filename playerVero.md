<div id="mp3">
  <div id="ecran">
    <!--  Lecteur de Véro  -->
    <!-- FIXME remplacer background img par rien -->
    <div id="boxmusic">
        <div class="musiclist">
          <!-- first player -->
          <div  class="container-piste" id="p-1">
            <div class="image">
              <img class="imgsrc" src="./img/mezzanine.png">
            </div>
            <ul class="player-container">
              <li class="title">title</li>
              <li class="album">album </li>
              <li class="artist">artiste</li>
              <!-- <li id="temps">time<span>00:00</span></li>-->
              <li class="controlers">
                <form class="btns" method="get" onsubmit="playOneByOne(); return false"></form>
              </li>
              <!-- player default -->
              <li class="media_player">
                <audio class="track" src="./mp3/" type="audio/mpeg" controls></audio>
              </li>
            </ul>
          </div>
          <!-- second player -->
          <div  class="container-piste" id="p-2">
            <div class="image">
              <img class="imgsrc" src="./img/thriller.png">
            </div>
            <ul class="player-container">
              <li class="title">title</li>
              <li class="album">album </li>
              <li class="artist">artiste</li>
              <!-- <li id="temps">time<span>00:00</span></li>-->
              <li class="controlers">
                <form class="btns" method="get" onsubmit="playOneByOne(); return false"></form>
              </li>
              <!-- player default -->
              <li class="media_player">
                <audio class="track" src="./mp3/" type="audio/mpeg" controls></audio>
              </li>
            </ul>
          </div>

          <!-- third player -->
          <div  class="container-piste" id="p-3">
            <div class="image">
              <img class="imgsrc" src="./img/lights.jpg">
            </div>
            <ul class="player-container">
              <li class="title">title</li>
              <li class="album">album </li>
              <li class="artist">artiste</li>
              <!-- <li id="temps">time<span>00:00</span></li>-->
              <li class="controlers">
                <form class="btns" method="get" onsubmit="playOneByOne(); return false"></form>
              </li>
              <!-- player default -->
              <li class="media_player">
                <audio class="track" src="./mp3/" type="audio/mpeg" controls></audio>
              </li>
            </ul>
          </div>

        </div>
      </div>
    <!-- Fin lecteur Véro -->
  </div>
  <div id="volume"></div>
  <div id="touch"></div>
  <div id="lecture"></div>
</div>
