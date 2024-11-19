const cases = document.querySelectorAll(".case p");

cases.forEach((carre) => {
   carre.addEventListener("mouseenter", handleMouseEnterRemoveBlur);
   carre.addEventListener("mouseleave", handleMouseLeaveAddBlur);
   carre.addEventListener("mousedown", handleMouseDownCarrePlusGros);
   carre.addEventListener("mouseup", handleMouseUpCarrePlusPetit);


});

function handleMouseEnterRemoveBlur(event){
    
    
    event.target.style.filter = "blur(0px)";
    event.target.parentElement.style.border = "2px red solid";
    
};

function handleMouseLeaveAddBlur(event){
    event.target.style.filter = "blur(6px)";
    event.target.parentElement.style.border = "2px black solid";
    
};

function handleMouseDownCarrePlusGros(event){
    event.target.parentElement.style.width = "400px";
}

function handleMouseUpCarrePlusPetit(event){
    event.target.parentElement.style.width = "200px";
}