const TexteApparait = document.querySelector("#TexteApparait");

// document.addEventListener("keydown", handleKeyDownTexteApparait);




document.addEventListener( 'keydown', (event) => {
    event.preventDefault();
    if ( event.code === 'KeyB' && event.ctrlKey === true ) {
      TexteApparait.style.visibility = "visible";
    }
});

