// Gets the modal (loads on the main webpage)
var modal = document.getElementById('modalPorfolioUpdate');

// Gets the button that opens the modal (loads on the main webpage)
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// onClick button opens the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// this is the 'x' in the top corner and closes the modal
span.onclick = function() {
    modal.style.display = "none";
}

// This shuts the modal if the user clicks anywhere else on the page.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
