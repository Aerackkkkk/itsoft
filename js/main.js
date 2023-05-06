// function hideLoader() {
//   $('#loading').hide();
// }

// $(window).ready(hideLoader);

// // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
// setTimeout(hideLoader, 2 * 1000);


// for sticky navigation gar
window.onscroll = function() {navbarPos()};

var navbar = document.getElementById("navbar-container");
var sticky = navbar.offsetTop;

function navbarPos() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}