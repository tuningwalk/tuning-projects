let toggleButton = document.querySelector('.toggle-button')
let navbarLinks = document.querySelector('.navlinks')


toggleButton.onclick = function() { 
    navbarLinks.classList.toggle('clicked');
    toggleButton.classList.toggle('clicked')
}
