//gloabal variables
let cardsPack = document.querySelectorAll('.cards');
let divElement = document.getElementById("board");
let headerText = document.getElementsByClassName('header');
let newElement = document.createElement("div");
const cardsColor8 = ["red", "blue", "green", "yellow", "red", "blue", "green", "yellow"]
const cardsColor16 = ["red", "blue", "green", "yellow", "DeepPink", "purple", "SpringGreen", "LightBlue", "red", "blue", "green", "yellow", "DeepPink", "purple", "SpringGreen", "LightBlue"]
let clickedOne, clickedTwo, selectedcards, clicketOneAt, clickTwoAt, clickedCount = 0,
    totalMatch = 0;



function btnHeadinOff() {
    headerText[0].innerHTML = ' ברוך הבא! <br>אנא בחר כמות קלפים לחלוקה';
}

function btnHeadinOn() {
    headerText[0].innerHTML = 'אנא בחר שני קלפים';
}

function removeCards() { //removig the cards(cards and cardSelected class)
    let cardsR = document.querySelectorAll('.cards');
    cardsR.forEach(cards => {
        cards.remove();

    })
    let cardsS = document.querySelectorAll('.cardSelected');
    cardsS.forEach(cardSelected => {
        cardSelected.remove();

    })
}

function shuffle(arr) { //shuffeling the cards
    let currentIndex = arr.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        const temp = arr[currentIndex]
        arr[currentIndex] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    return arr;
}

function deal(x) { // this function is the main dealer

    for (i = 0; i < x; i++) {
        let newElement = document.createElement("div");
        divElement.appendChild(newElement)
        newElement.classList.add('cards')
    }
    totalMatch = 0
    cardsPack = document.getElementsByClassName('cards');
    shuffle(cardsColor16);
    shuffle(cardsColor8);
    for (i = 0; i < x; i++) {
        cardsPack[i].id = "card" + i;
        cardsPack[i].setAttribute("onclick", "clickFirst(this)")
        if (x == 8) {
            cardsPack[i].setAttribute("data-face", cardsColor8[i]);
        } else {
            cardsPack[i].setAttribute("data-face", cardsColor16[i]);
        }
    }
}

function clickedEffect(cardId) { // when card clicked - set the color to background and remove image
    cardId.style.border = "2px solid white ";
    cardId.style.backgroundColor = cardId.getAttribute("data-face")
    cardId.style.backgroundImage = "none";
}

function bgReset(x) { // reset cards  style 
    x.removeAttribute('style');
}


function clickFirst(cardId) { // first function for first card clicked
    headerText[0].innerHTML = "אנא בחר קלף נוסף"
    clickedOne = cardId;
    clickedOneAt = cardId.getAttribute("data-face");
    clickedEffect(cardId)

    for (i of cardsPack) {
        i.setAttribute("onclick", "clickSecond(this)");
    }
    cardId.removeAttribute("onclick");
}

function clickSecond(cardId) { // second card click function

    clickedTwo = cardId;

    clickedTwo.setAttribute("onclick", " ")
    clickedTwoAt = cardId.getAttribute("data-face");
    clickedEffect(cardId)
    if (clickedOneAt == clickedTwoAt) {
        clickedOne.className = "cardSelected";
        clickedTwo.className = "cardSelected";
        clickedOne.style.opacity = 0.5;
        clickedTwo.style.opacity = 0.5;
        headerText[0].innerHTML = "כל הכבוד! מצאת זוג!"
        totalMatch++;
        setTimeout(() => {
            headerText[0].innerHTML = "אנא בחר שני קלפים נוספים"
        }, 1000)
        attLoop()
        selectedcards = document.querySelectorAll('.cardSelected');
        if (cardsPack.length == 0) {
            setTimeout(() => { headerText[0].innerHTML = "ניצחת! כל הכבוד!"; }, 1001)
        }

    } else {
        headerText[0].innerHTML = "אין התאמה, אנא בחר שני קלפים "
        setTimeout(() => {
            attLoop()
            bgReset(clickedOne);
            bgReset(clickedTwo);

        }, 800)
    }

}

function attLoop() {
    for (i of cardsPack) {
        i.removeAttribute("onclick");
        i.setAttribute("onclick", "clickFirst(this)");
    }
}

function dealBtn(x) { // activated by pressing the buttons for deal 8 or 16 cards
    if (cardsPack.length == 0) {
        removeCards()
        deal(x);
    } else {

        let newDealAlert = confirm('האם אתה בטוח שברצונך לחלק מחדש את הקלפים?')
        if (newDealAlert == true) {
            removeCards()
            deal(x);
        } else {
            clickSecond(cardId)
        }
    }
}