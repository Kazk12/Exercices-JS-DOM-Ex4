const bouton = document.querySelector(".btnCarousel");
const Gauche = document.querySelector("#divLeft");
const Droite = document.querySelector("#divRight");

const images = {
    1 : "./images/1.png";
    2 : "./images/2.png";
    3 : "./images/3.png";
}

console.log(images);


bouton.addEventListener("click", handleClickShowImage);
Gauche.addEventListener("click", handleClickChangeImageGauche);
// Droite.addEventListener("click", handleClickChangeImageDroite);

function handleClickShowImage(event){
    document.querySelector(".imgCarousel").style.visibility = "visible";
}

function handleClickChangeImageGauche(event){
    
}