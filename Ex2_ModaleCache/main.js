const bouton = document.querySelector("#Bouton");

const block = document.querySelector(".block");

bouton.addEventListener("click", handleClickApparaitTexte);

function handleClickApparaitTexte(event){
    block.style.visibility= "visible";
    document.body.style.backgroundColor = "grey";
    event.stopPropagation();

}

document.addEventListener("click", handleClickNormal);

function handleClickNormal(event){
    // console.log(event.target != block)
     if(event.target != block && event.target != block.firstElementChild){
        block.style.visibility = "hidden";
        document.body.style.backgroundColor = "white";
     }
}