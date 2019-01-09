
var nbreBouton = 11;

 for(var i = 1; i<=nbreBouton; i++ ){
     // prendre l element module 
    var modal = document.getElementById('simpleModal'+i);
    //prendre le boutton
    var modalBtn = document.getElementById('modalBtn'+i);
    //fermer le boutton
    var closeBtn = document.getElementById('closeBtn'+i);
    //ecoute du boutton
    modalBtn.addEventListener('click',openModal);
    // ecoute de boutton pour la fermeture
    closeBtn.addEventListener('click',closeModal);
    //ecoute de click exterieur
    window.addEventListener('click',clickOutside);
 }
 // FONCTION
 //fonction ouverir le modal
 function openModal(){
     modal.style.display ='block';
 }
 //fonction pour fermer le modal 
 function closeModal(){
     modal.style.display='none';
 }
 //fonction clique exterieure pour dernier modal 
 function clickOutside(e){
     if(e.target == modal){
         modal.style.display ='none';
     }
 }

