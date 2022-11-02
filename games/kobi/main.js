const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F'];

let score = 0;
let scoreA = 0;
let scoreB = 0;
let counter = 0;

let val1 = document.querySelector("#player1")
console.log(val1.value)
let val2 = document.querySelector("#player2")
console.log(val2.value)

document.getElementById("score").innerText =`Your score: ` + score.toString();
function shufle(cards) {

    for (cardIdx in cards) {
        const rndIndx = Math.floor(Math.random() * cards.length);

        const temp = cards[cardIdx];
        cards[cardIdx] = cards[rndIndx];
        cards[rndIndx] = temp;
    }
}
let firstCard = null;

function cardClicked(e) {
    if (firstCard == null) {
        e.target.innerText = cards[e.target.id]
        firstCard = e.target
        return;
    }
    else {
        if (firstCard.innerText == cards[e.target.id] && firstCard.id !== e.target.id) {
            e.target.innerText = cards[e.target.id]
            // setTimeout(() => { alert("Very good") }, 700);

            firstCard.innerText = ""
            document.getElementById(firstCard.id).className = "empty"
            document.getElementById(firstCard.id).removeEventListener("click", cardClicked)
            setTimeout(() => {
                e.target.innerText = ""
                document.getElementById(e.target.id).className = "empty"
                document.getElementById(e.target.id).removeEventListener("click", cardClicked)

            }, 500)
            score = score + 10;
            document.getElementById("score").innerText = `Your score: ` +  score.toString()
            firstCard = null;
        }
        else {
            e.target.innerText = cards[e.target.id]
            firstCard.innerText = ""
            setTimeout(() => { e.target.innerText = "" }, 500)
            firstCard = null;
        }
    }
}

function removeCard(crd, idx) {
    e.target.innerText = ""
    document.getElementById(e.target.id).className = "empty"
    document.getElementById(e.target.id).removeEventListener("click", cardClicked)
}

function createCard(crd, idx) {
    const cardElement = document.createElement("div");
    cardElement.id = idx;
    cardElement.className = "card";
    cardElement.addEventListener("click", cardClicked)

    return cardElement;
}

let bordEle = document.getElementById("bord")
function init() {
    shufle(cards);

    for (idx in cards) {
        const a = createCard(cards[idx], idx);
        bordEle.appendChild(a);

    }
    idx = 0;
}

init();

function newShufle() {
        while (bordEle.firstChild) {
            bordEle.removeChild(bordEle.firstChild);
            score = 0;
        }
    setTimeout(() => {
        init();
        document.getElementById("score").innerText =`Your score: ` + score.toString();
    }, 1000)
}
document.getElementById("click").addEventListener("click", newShufle)