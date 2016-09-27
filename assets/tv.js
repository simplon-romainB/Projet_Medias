// Script pour la tv commande et le changement de chaîne
/*
var allumage = 0;
    function allumerTv() {
          if ( allumage == 0) {
            var container = document.getElementById('contenu-ecran');
            var fenetre = document.createElement('iframe');
            container.appendChild(fenetre);
            fenetre.setAttribute('frameBorder', '0');
            fenetre.setAttribute('id', 'ecran');
            fenetre.classList.add('iframePosition');
            fenetre.setAttribute('src', 'assetsTV/snow3.html');
            fenetre.setAttribute('border', 'none');
            fenetre.setAttribute('seamless', 'true');
            allumage = 1;
          }
          else eteindreTv();
    }
    function chaine(origine) {
        var fenetre = document.getElementById('ecran');
        fenetre.setAttribute('src', 'assetsTV/snow3.html');
        setTimeout(function(){fenetre.setAttribute('src', origine);},110);
        allumage = 1;
      }

    function eteindreTv() {
        var container = document.getElementById('contenu-ecran');
        var fenetre = document.getElementById('ecran');
        container.removeChild(fenetre);
        allumage = 0;
    }
*/
var allumage = 0;
var containerTexte = document.getElementById('bas-ecran');
var description = document.getElementById('description');
var conclusion = document.getElementById('conclusion');
var explications = document.createElement('div');
    function allumerTv() {
          if ( allumage == 0) {
            var container = document.getElementById('contenu-ecran');
            var fenetre = document.createElement('iframe');
            container.appendChild(fenetre);
            fenetre.setAttribute('frameBorder', '0');
            fenetre.setAttribute('id', 'ecran');
            fenetre.classList.add('iframePosition');
            fenetre.setAttribute('src', './assetsTV/snow3.html');
            fenetre.setAttribute('border', 'none');
            conclusion.appendChild(explications); //FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE
            description.innerHTML = "Choisissez une chaîne !" ; //FIXME A ETE MODIFIE
            allumage = 1;
          }
          else eteindreTv();
    }
    function chaine(origine) {
        var fenetre = document.getElementById('ecran');
        fenetre.setAttribute('src', './assetsTV/snow3.html');
        setTimeout(function(){fenetre.setAttribute('src', origine);},110);
        allumage = 1;
          if (origine == 'assetsTV/rotation.html') {
            conclusion.appendChild(explications); ///FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = "trois videos qui échangent leur place sur un click !" ;//FIXME A ETE MODIFIE!!
          }
          else if (origine == 'assetsTV/videobackground.html') {
            conclusion.appendChild(explications); //FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = 'Ce genre de présentation, un texte sur fond de video, devient un element de design très présent actuellement' ;
          }
          else if (origine == 'assetsTV/lightbox.html') {
            conclusion.appendChild(explications);//FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = "un effet de lightbox  (un plugin assez courant) créé en quelques lignes de JS" ;
          }
          else if (origine == 'assetsTV/lecteuralea.html') {
            conclusion.appendChild(explications); //FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = "Un lecteur de videos aléatoires, qui recommencera après avoir épuisé notre (petit) stock de videos !" ;//FIXME A ETE MODIFIE!!
          }
      }
    function eteindreTv() {
        var container = document.getElementById('contenu-ecran');
        var fenetre = document.getElementById('ecran');
        container.removeChild(fenetre);
        allumage = 0;
        conclusion.appendChild(explications); //FIXME A ETE MODIFIE!!
        explications.innerHTML = "" ; //FIXME A ETE MODIFIE!!
        //FIXME la fenêtre ne se referme pas haha
        
    }
