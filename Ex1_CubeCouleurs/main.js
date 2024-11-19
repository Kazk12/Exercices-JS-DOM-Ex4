// Quadrillage coloré :
// Créez 9 cases de taille identique.
// Au clic sur une case, la couleur de la case change.
// Si je clic sur la case à nouveaux, elle change encore de couleur.
// Le nombre de couleurs différentes doit être de minimum 5.
// Le clic d'une case ne doit pas changer la couleur de ses voisines.



const couleurs = ["blue", "red", "yellow", "purple", "black"];



const blocks = document.querySelectorAll(".tile");

blocks.forEach((bloc) => {
  bloc.addEventListener("click", handleClickChangeCouleur)
});



function handleClickChangeCouleur(event){
  let currentColorIndex = couleurs.indexOf(event.target.style.backgroundColor);
// Ici on récupere l'index du tableau couleurs si il y est dans le backgroundColor de event(block)

 
  currentColorIndex++;
 
  
  if (currentColorIndex >= couleurs.length) {
    currentColorIndex = 0;
  }
  event.target.style.backgroundColor = couleurs[currentColorIndex];
}





// const couleurs = ["blue", "red", "yellow", "purple", "black"];
// const blocks = document.querySelectorAll(".tile");

// blocks.forEach((bloc) => {
//   bloc.addEventListener("click", handleClickChangeCouleur);
// });

// function handleClickChangeCouleur(event) {
//   const target = event.target;

//   // Trouver l'indice de la couleur actuelle
//   let currentColorIndex = couleurs.indexOf(target.style.backgroundColor);

//   // Si la couleur actuelle est inconnue (par exemple au premier clic, elle est bleu), on commence à 0
//   if (currentColorIndex === -1) {
//     currentColorIndex = 0;  // Bleu par défaut si la couleur n'est pas définie
//   }

//   // Passer à la couleur suivante dans le tableau
//   currentColorIndex++;

//   // Si on est à la fin du tableau, recommencer à 0 (bleu)
//   if (currentColorIndex >= couleurs.length) {
//     currentColorIndex = 0;
//   }

//   // Appliquer la couleur suivante
//   target.style.backgroundColor = couleurs[currentColorIndex];
// }



