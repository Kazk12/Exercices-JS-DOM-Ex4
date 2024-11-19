// Quadrillage coloré :
// Créez 9 cases de taille identique.
// Au clic sur une case, la couleur de la case change.
// Si je clic sur la case à nouveaux, elle change encore de couleur.
// Le nombre de couleurs différentes doit être de minimum 5.
// Le clic d'une case ne doit pas changer la couleur de ses voisines.



// const couleurs = ["blue", "red", "yellow", "purple", "black"];

// couleurs.forEach((couleur) => {
//     // console.log(couleur);
    
// } );

// const blocks = document.querySelectorAll(".tile");

// blocks.forEach((block) => {
//     block.style.background-colo.replacer=color(); 
// });



function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return rndCol;
  }
  
  const container = document.querySelector("#container");
  
  container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = bgChange();
  });