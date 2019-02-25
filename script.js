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

// Fonctionnalité 6
let getCards = document.getElementsByClassName('card')//[0];
let getView = document.getElementsByClassName('btn-success')//[0];
let getImg = document.getElementsByClassName('card-img-top')//[0];
let getText = document.getElementsByClassName('card-text')//[0];
let contentCard = [];

/*
getCards.addEventListener('mouseover', function(){
  if (contentCard = 'normal'){
    getImg.style.width = "20%";
    getText.textContent = '';
    contentCard = 'reduce';
  } else if (contentCard = 'reduce'){
    getImg.style.width = "100%";
    getText.textContent = '';
    contentCard = 'normal';
  }
})
*/

for (let i = 0; i < getCards.length; i++) {
  contentCard.push(getCards[i].getElementsByClassName("card-text")[0].textContent)
}

for (let i = 0; i < getView.length; i++){
if (getImg[i].style.width === "20%") {
  getView[i].addEventListener('mouseover', function(){
    getImg[i].style.width = '';
    getText[i].textContent = contentCard[i];
  });
  } else {
    getView[i].addEventListener('mouseover', function(){
      getText[i].textContent = '';
      getImg[i].style.width = "20%";
    });
  }
};

// Fonctionnalité 7 
let cardToMove = document.getElementsByClassName('col-md-4');
let row = document.getElementsByClassName('row')[1];
let greyArrow = document.getElementsByClassName('btn-secondary')[0];

greyArrow.addEventListener('click', function() {
  row.insertBefore(cardToMove[cardToMove.length-1], cardToMove[0]);
});

// Fonctionnalité 8
let blueArrow = document.getElementsByClassName('btn-primary')[0];

blueArrow.addEventListener('click', function(e) {
  e.preventDefault();
  row.insertBefore(cardToMove[cardToMove.length-1], cardToMove[0].nextSibling);
});

// Fonctionnalité 9






