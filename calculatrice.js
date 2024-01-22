let numero = document.getElementById("num");
let action = document.getElementById("action");
let supp = document.getElementById("supprimer");

var resultat = document.getElementById("ecran");


function afficher(valeur){

    

    if (resultat.textContent == 0){
        resultat.textContent = valeur;
    }
    else {
        resultat.textContent += valeur;
    }
  

}
 function calculer(){
    resultat.textContent = eval(resultat.textContent)
 }



function supprimer(){
    resultat.textContent = 0
}

