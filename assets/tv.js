allumage = 0;
 containText = document.getElementById('container');
 wrapTexte = document.getElementById('wrap');
 conclusionTexte = document.getElementById('conclusion');
 containerTexte = document.getElementById('bas-ecran');
 description = document.getElementById('description');
description.style.visibility = ('visible');
 conclusion = document.getElementById('conclusion');
 explications = document.createElement('div');
    function allumerTv() {
          description.style.visibility = ('visible');
          if ( allumage == 0) {
            var container = document.getElementById('contenu-ecran');
            var fenetre = document.createElement('iframe');
            container.appendChild(fenetre);
            fenetre.setAttribute('frameBorder', '0');
            fenetre.setAttribute('id', 'ecran');
            fenetre.classList.add('iframePosition');
            fenetre.setAttribute('src', './assetsTV/snow3.html');
            fenetre.setAttribute('border', 'none');
                                                    //FIXME A ETE MODIFIE!!
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
            var description = document.getElementById('description');
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = "Voici trois videos qui échangent leur place sur un click !" ;//FIXME A ETE MODIFIE!!
          }
          else if (origine == 'assetsTV/videobackground.html') {
            var description = document.getElementById('description');
                                                                //FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = 'Ce genre de présentation, un texte sur fond de video, devient un element de design très présent actuellement' ;
          }
          else if (origine == 'assetsTV/lightbox.html') {
            var description = document.getElementById('description');//FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = "un effet de lightbox  (un plugin assez courant) créé en quelques lignes de JS" ;
          }
          else if (origine == 'assetsTV/lecteuralea.html') {
            var description = document.getElementById('description'); //FIXME A ETE MODIFIE!!
            description.classList.add('descriptionStyle'); //FIXME A ETE MODIFIE!!
            description.innerHTML = "Un lecteur de videos aléatoires, qui recommencera après avoir épuisé notre (petit) stock de videos !" ;//FIXME A ETE MODIFIE!!
          }
      }
    function eteindreTv() {
        var containText = document.getElementById('container');
        var wrapTexte = document.getElementById('wrap');
        var conclusionTexte = document.getElementById('conclusion');
        var description = document.getElementById('description');
        var container = document.getElementById('contenu-ecran');
        var fenetre = document.getElementById('ecran');
        container.removeChild(fenetre);
        description.style.visibility = ('hidden');
        allumage = 0;
        //FIXME A ETE MODIFIE!!
       //FIXME A ETE MODIFIE!!
        //FIXME la fenêtre ne se referme pas haha

    }
