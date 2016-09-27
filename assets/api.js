var objvideoAPI = null
var lavideoAPI = document.getElementById("lavideo");
var commandeAPI = document.getElementById("commande");

	function ajouteVideo() {
		if (objvideoAPI == null) {
			objvideoAPI = document.createElement('video');
			objvideoAPI.style.width = '300px';
			if (objvideoAPI.canPlayType("video/webm")){
				objvideoAPI.setAttribute("src","http://simplon.16mb.com/videos/earth_640x360.mp4")
				objvideoAPI.play()
				lavideoAPI.appendChild(objvideoAPI)
				commandeAPI.textContent = "Rejoue";
			}
		} else {
			objvideoAPI.play()
		}
	}
