const bouton = document.querySelector(".btnCarousel");
const Gauche = document.querySelector("#divLeft");
const Droite = document.querySelector("#divRight");

const images = {
    "1" : "./images/1.jpg",
    "2" : "./images/2.jpg",
    "3" : "./images/3.jpg",
};


let tableau = Object.entries(images);

let currentIndex = 0;  // L'index de l'image actuelle, initialisé à 0 pour la première image

let img = document.querySelector(".imgCarousel");

// Initialisation de l'image visible


img.src = tableau[currentIndex][1];  // Affiche la première image au chargement




bouton.addEventListener("click", handleClickShowImage);
Gauche.addEventListener("click", handleClickChangeImageGauche);
Droite.addEventListener("click", handleClickChangeImageDroite);

function handleClickShowImage(){
    img.style.visibility = "visible";
}



function handleClickChangeImageGauche(){
    if(currentIndex === 0){
        currentIndex = tableau.length - 1;
    } else {
        currentIndex -= 1;
    }
    img.src = tableau[currentIndex][1];
    
 }

function handleClickChangeImageDroite(){
     if(currentIndex === tableau.length){
            currentIndex = 0;
     } else {
            currentIndex += 1;
     }
    img.src = tableau[currentIndex][1];
        
 }
    





