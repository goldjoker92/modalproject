
var nbreBouton = 11;

let modal = document.getElementById('simpleModal1');
let closeBtn = document.getElementById('closeBtn1');


 for(var i = 1; i<=nbreBouton; i++ ){
     console.log(i);
     // prendre l element module 
    
    //prendre le boutton
    var modalBtn = document.getElementById('modalBtn'+i);
    //fermer le boutton


    //ecoute du boutton
    modalBtn.addEventListener('click',(event) => {
        const id = event.srcElement.id.substr(8);
        const src = "assets/fichierclient/index" + id + ".html";
        console.log(src);
        document.getElementById('frame').src =src;
        modal.style.display ='block';
    });

    // ecoute de boutton pour la fermeture
    closeBtn.addEventListener('click',() => {
        modal.style.display='none';
    });

    //ecoute de click exterieur
 }

 let closeOutside = document.getElementById('simpleModal1')
closeOutside.addEventListener('click',() =>{
    modal.style.display ='none';
});
