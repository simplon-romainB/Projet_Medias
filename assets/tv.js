// Script pour la tv commande et le changement de chaîne
var allumage = 0;
    function allumerTv() {
          if ( allumage == 0) {
            var container = document.getElementById('contenu-ecran');
            var fenetre = document.createElement('iframe');
            container.appendChild(fenetre);
            fenetre.setAttribute('frameBorder', '0');
            fenetre.setAttribute('id', 'ecran');
            fenetre.classList.add('iframePosition');
            fenetre.setAttribute('src', '../snow3.html');
            fenetre.setAttribute('border', 'none');
            fenetre.setAttribute('seamless', 'true');
            allumage = 1;
          }
          else eteindreTv();
    }
    function chaine(origine) {
        var fenetre = document.getElementById('ecran');
        fenetre.setAttribute('src', '../snow3.html');
        setTimeout(function(){fenetre.setAttribute('src', origine);},110);
        allumage = 1;
      }

    function eteindreTv() {
        var container = document.getElementById('contenu-ecran');
        var fenetre = document.getElementById('ecran');
        container.removeChild(fenetre);
        allumage = 0;
    }
