//GLOBAL V
let totalPlayers;
const playersDataBase = []
const gamesData = [{
    id: 101,
    name: "Memory game 1",
    desc: "this memory game build by dudu ben hamo",
    link: "./games/101/index.html",
    imgUrl: "./gamesImages/101.jpg",
    rating: 0
}, {
    id: 102,
    name: "Memory game 2",
    desc: "this memory game build by someone",
    link: "./games/102/index.html",
    imgUrl: "./gamesImages/102.jpg",
    rating: 0
}, {
    id: 103,
    name: "Memory game 3",
    desc: "this memory game build by someone",
    link: "./games/103/index.html",
    imgUrl: "./gamesImages/103.jpg",
    rating: 0
}, {
    id: 104,
    name: "Memory game 4",
    desc: "this memory game build by someone",
    link: "./games/104/index.html",
    imgUrl: "./gamesImages/104.jpg",
    rating: 0
}, {
    id: 105,
    name: "Memory game 5",
    desc: "this memory game build by someone",
    link: "./games/105/index.html",
    imgUrl: "./gamesImages/105.jpg",
    rating: 0
}, {
    id: 106,
    name: "Memory game 6",
    desc: "this memory game build by someone",
    link: "./games/106/index.html",
    imgUrl: "./gamesImages/106.jpg",
    rating: 0
}, {
    id: 107,
    name: "Memory game 7",
    desc: "this memory game build by someone",
    link: "./games/107/index.html",
    imgUrl: "./gamesImages/107.jpg",
    rating: 0
}, ]

const popup = document.getElementById("introPopup");
const spanclose = document.getElementsByClassName("close")[0];
const pop1 = document.getElementById("pop1");
const popIntro = document.getElementById("popIntro")
const gameBoard = document.getElementsByClassName("gameBoard")[0]

gamesData.forEach((v) => {
    return gameBoard.innerHTML += `<div class="gameButton" style="background-image: url(${v.imgUrl})"><a href="${v.link}"><span class="gameInfo">
${v.name} <br>
${v.desc} <br>
דירוג: ${v.rating}
</span></a></div>`
})



function pops() { // first popup intro to ask how many players have
    popup.style.display = "block";
    popIntro.innerHTML = `               
     <p class="popText">אנא הזן את מספר השחקנים:</p>
    <label for="playersCount">מספר השחקנים</label>
    <input type="number" id="playersCount" name="playersCount" min="1" max="10" placeholder="שחקנים" value="1">
    <p id="errorInput1"></p>

    <button id="popIntroBtn" onclick=funcpop1()>המשך</button>`


}


function funcpop1() { //TAKES THE PLAYES INFO ACCORDING TO TOTALPLAYERS
    totalPlayers = document.getElementById("playersCount").value
    if (totalPlayers < 1 || totalPlayers > 10) {
        return document.getElementById("errorInput1").innerHTML = "מספר השחקנים חייב להיות בין 1-10"
    }
    let i = 0;
    popIntro.innerHTML = `
        <div id="pop1">
        <p class="popText"> אנא הזן פרטי שחקן מספר ${i+1} מתוך ${totalPlayers}</p>
        <label for="playerName">שם השחקן:</label>
        <input type="text" id="playerName" name="playerName" maxlength="15" placeholder="anonymous${i+1}">
        <p id="errorInput"></p>
        <br>
        <p class="pop1av">בחר אוואטר</p>
        <div id="avatars" class="style-5">
        
        <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/1.png" checked/>
        <img src="./images/avatars/1.png" alt=""/>
      </label>
      
      <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/2.png"/>
        <img src="./images/avatars/2.png" alt=""/>
      </label>
      
      <label class="avatars">
          <input type="radio" name="avatar" value="./images/avatars/3.png"/>
          <img src="./images/avatars/3.png" alt=""/>
        </label>
      
      <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/4.png"/>
        <img src="./images/avatars/4.png" alt=""/>
      </label>
      
      <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/5.png"/>
        <img src="./images/avatars/5.png" alt="" />
      </label>
      
      <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/6.png"/>
        <img src="./images/avatars/6.png" alt="" />
      </label>
      
      <label class="avatars">
          <input type="radio" name="avatar" value="./images/avatars/7.png"/>
          <img src="./images/avatars/7.png" alt="" />
        </label>
      
      <label class="avatars">
          <input type="radio" name="avatar" value="./images/avatars/8.png"/>
          <img src="./images/avatars/8.png" alt="" />
        </label>
      
      <label class="avatars">
          <input type="radio" name="avatar" value="./images/avatars/9.png"/>
          <img src="./images/avatars/9.png" alt="" />
        </label>
      <label class="avatars">
          <input type="radio" name="avatar" value="./images/avatars/10.png"/>
          <img src="./images/avatars/10.png" alt="" />
        </label>
        
        
        </div>
        <button id="pop1Btn" onclick=nextPlayer(${i})>המשך</button>
        </div>
        
        `;
}

function nextPlayer(i) {
    let playerName = document.getElementById("playerName").value;
    if (playerName === ' ') {
        return document.getElementById("errorInput").innerHTML = "אנא הזן שם משתמש תקני";
    } else if (!playerName) {
        playerName = `anonymous${i+1}`;
    }
    let playerAvatar = document.querySelector('input[name="avatar"]:checked').value;
    newPlayerPush(i, playerName, playerAvatar);
    i++;
    popIntro.innerHTML = `
    <div id="pop1">
    <p class="popText"> אנא הזן פרטי שחקן מספר ${i+1} מתוך ${totalPlayers}</p>
    <label for="playerName">שם השחקן:</label>
    <input type="text" id="playerName" name="playerName"  maxlength="15" placeholder="anonymous${i+1}" >
    <p id="errorInput"></p>
    <br>
    <p class="pop1av">בחר אוואטר</p>
    <div id="avatars" class="style-5">
    
    <label class="avatars">
      <input type="radio" name="avatar" value="./images/avatars/1.png" checked/>
      <img src="./images/avatars/1.png" alt=""/>
    </label>
    
    <label class="avatars">
      <input type="radio" name="avatar" value="./images/avatars/2.png"/>
      <img src="./images/avatars/2.png" alt=""/>
    </label>
    
    <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/3.png"/>
        <img src="./images/avatars/3.png" alt=""/>
      </label>
    
    <label class="avatars">
      <input type="radio" name="avatar" value="./images/avatars/4.png"/>
      <img src="./images/avatars/4.png" alt=""/>
    </label>
    
    <label class="avatars">
      <input type="radio" name="avatar" value="./images/avatars/5.png"/>
      <img src="./images/avatars/5.png" alt="" />
    </label>
    
    <label class="avatars">
      <input type="radio" name="avatar" value="./images/avatars/6.png"/>
      <img src="./images/avatars/6.png" alt="" />
    </label>
    
    <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/7.png"/>
        <img src="./images/avatars/7.png" alt="" />
      </label>
    
    <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/8.png"/>
        <img src="./images/avatars/8.png" alt="" />
      </label>
    
    <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/9.png"/>
        <img src="./images/avatars/9.png" alt="" />
      </label>
    <label class="avatars">
        <input type="radio" name="avatar" value="./images/avatars/10.png"/>
        <img src="./images/avatars/10.png" alt="" />
      </label>
    
    
    </div>
    <button id="pop1Btn" onclick=nextPlayer(${i})>המשך</button>
    </div>
    
    `;



    if (i >= totalPlayers) {
        i = 0;
        popIntro.innerHTML = `     <p class="popText">סיימנו, אפשר להתחיל לשחק(:</p>
        <div class="gamePad"><img src="./images/gamepad.png"/></div>`
        setTimeout(() => { popup.style.display = "none"; }, 3000)

    }
}




function newPlayerPush(playerId, playerName, avatarUrl) { //PLAYERS DB CONSTRUCTOR
    let newPlayer = {
        id: playerId,
        name: playerName,
        avUrl: avatarUrl,
        totalPoints: 0
    }
    playersDataBase[playerId] = newPlayer;

}





// When the user clicks on <span> (x), close the modal
spanclose.onclick = function() {
    popup.style.display = "none";
}