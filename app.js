// Animation Menu Flotante

var navbar = document.querySelector('.heading')
var button = document.querySelector('.button-menu')
var logo = document.querySelector('.logito')


var a = window.getComputedStyle(document.querySelector('.logito'), ':before');

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 800) {
    navbar.classList.add('scrolled')
    button.classList.add('menucolor')
    logo.classList.add('hola')
    a.classList.add('menucolor1')
  } else {
    navbar.classList.remove('scrolled')
    button.classList.remove('menucolor')
    logo.classList.remove('hola')
    a.classList.remove('menucolor1')
  }
}