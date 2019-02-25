// Fonctionnalité 1 
let footEvt = document.querySelector("footer");

footEvt.addEventListener("click", function(){
  console.log("clique");
});

// Fonctionnalité 1 bis
let i = 1
footEvt.addEventListener("click", function(){
  console.log(`clic numéro ${i}`);
  i ++;
});

// Fonctionnalité 2
let hamburgerMenu = document.getElementsByClassName('navbar-toggler')[0];
let menuEvt = document.getElementById('navbarHeader');

hamburgerMenu.addEventListener('click', function(){
    menuEvt.classList.toggle("collapse");
});

// Fonctionnalité 3
let getCard1 = document.getElementsByClassName('card-text')[0];
let getEditBtn = document.querySelectorAll('.btn-outline-secondary')[0];
getEditBtn.addEventListener("click", function(){
  getCard1.style.color = "red";
});

// Fonctionnalité 4
let getCard2 = document.getElementsByClassName('card-text')[1];
let getEditBtn2 = document.querySelectorAll('.btn-outline-secondary')[1];
let colorText = 'blank';
getEditBtn2.addEventListener("click", function(){
  if (colorText === 'blank') {
    getCard2.style.color = 'green';
    colorText = 'green'
  } else if (colorText === 'green') {
    getCard2.style.color = '';
    colorText = 'blank'
  }
});

// Fonctionnalité 5
let navBar = document.getElementsByTagName('header')[0];
let getCDN = document.getElementsByTagName('link')[0];
let styleSheet = 'bootstrap';
navBar.addEventListener('dblclick', function() {
  if (styleSheet == 'bootstrap'){
    getCDN.href = '';
    styleSheet = 'none';
  } else if (styleSheet == 'none'){
    getCDN.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    styleSheet = 'bootstrap';
  }
});





