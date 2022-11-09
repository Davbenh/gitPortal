const cards = document.querySelectorAll('.memory-card');
const gameBoard = document.getElementById('gameBoard')
const stopwatchSpan = document.getElementById('stopwatch');
var list = document.getElementById('users');
var bestTime = document.getElementById('bestTime');
var usernameSpan = document.getElementById('usernameSpan');
let counter = document.querySelector(".moves");
var scoreElt = document.querySelector("#score");


cards.forEach(card => card.addEventListener('click', flipCard));



let userName
let hasFlippedCard = false;
let lockBoard = false;
let startTime = false;
let firstCard, secondCard;
let flippedCouplesCount = 0;
let hh = 0;
let mm = 0;
let ss = 0;
var score =0 ;

let TOTAL_COUPLES_COUNT = 6;

// Check if a username is stored in localStorage
if (localStorage.getItem('username') === null) {
  var usernameInput = prompt('Enter your name!');

  if (usernameInput === '' || usernameInput === null) {
    localStorage.setItem(
      'username',
      `User${Math.floor(
        Math.random() * (Math.floor(99999) - Math.ceil(10000) + 1) + 10000
      )}`
    );
    usernameSpan.innerText = `Hello ${localStorage.getItem('username')}!`;
  } else {
    localStorage.setItem('username', usernameInput);
    usernameSpan.innerText = `Hello ${localStorage.getItem('username')}!`;
  }
} else {
  usernameSpan.innerText = `Hello ${localStorage.getItem('username')}!`;
}



function changeUser() {
  var usernameInput = prompt('Enter your name!');

  if (usernameInput === '' || usernameInput === null) {
    localStorage.setItem(
      'username',
      `User${Math.floor(
        Math.random() * (Math.floor(99999) - Math.ceil(10000) + 1) + 10000
      )}`
    );
    usernameSpan.innerText = `Hello ${localStorage.getItem('username')}!`;
    } else {
     localStorage.setItem('username', usernameInput);
    usernameSpan.innerText = `Hello ${localStorage.getItem('username')}!`;
   }
 }



function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    firstCard = this;
    hasFlippedCard = true;
   return;
 }

 if (!startTime) {
  startTime = true;
  stopwatchFunc();
}

 secondCard = this;
 hasFlippedCard = false;

 checkForMatch();
}

function checkForMatch() {
 if (firstCard.dataset.framework === secondCard.dataset.framework) {
    flippedCouplesCount++;
    score = score + 10 ;
    localStorage.setItem("score", score);
    scoreElt.innerHTML = score;

   disableCards();
   if (TOTAL_COUPLES_COUNT === flippedCouplesCount) {
    startTime = false;
    
   }
   return;
 }

 unflipCards();
}

function disableCards() {
 firstCard.removeEventListener('click', flipCard);
 secondCard.removeEventListener('click', flipCard);
 
 resetBoard();
}



function unflipCards() {
  lockBoard = true;

 setTimeout(() => {
   firstCard.classList.remove('flip');
   secondCard.classList.remove('flip');
   lockBoard = false;
   resetBoard();
  }, 1500);
  if (score > 0) {
    score -= 2;
  }
}

function resetBoard() {
  [firstCard, secondCard, hasFlippedCard, lockBoard] = [null, null, false, false];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function stopwatchFunc() {
  if (!startTime) return;

  ss = parseInt(ss);
  mm = parseInt(mm);
  hh = parseInt(hh);

  ss += 1;

  if (ss === 60) {
    ss = 0;
    mm += 1;
  }

  if (mm === 60) {
    ss = 0;
    mm = 0;
    hh += 1;
  }

  if (ss < 10 || ss === 0) {
    ss = '0' + ss;
  }

  if (mm < 10 || mm === 0) {
    mm = '0' + mm;
  }

  if (hh < 10 || hh === 0) {
    hh = '0' + hh;
  }

  stopwatchSpan.innerText = `${hh}:${mm}:${ss}`;
  setTimeout('stopwatchFunc()', 1000);
}
function addUser(){
  var username =document.getElementById('username').value;

  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(username + '' + email));
  list.appendChild(entry);
}
