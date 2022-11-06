// Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
let playerLives = 8;

// Link text
playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
    {imgSrc: "./Images/Broom.png", Name: "Broom"},
    {imgSrc: "./Images/Dobby.jfif", Name: "Dobby"},
    {imgSrc: "./Images/Invisibility cloack.jpg", Name: "Invisibility cloack"},
    {imgSrc: "./Images/Owl.jpg", Name: "Owl"},
    {imgSrc: "./Images/Phoenix.png", Name: "Phoennix"},
    {imgSrc: "./Images/Quaffle.jpg", Name: "Quaffle"},
    {imgSrc: "./Images/Snitch.jpg", Name: "Snitch"},
    {imgSrc: "./Images/Sorting hat.jfif", Name: "Sorting hat"},
    {imgSrc: "./Images/Broom.png", Name: "Broom"},
    {imgSrc: "./Images/Dobby.jfif", Name: "Dobby"},
    {imgSrc: "./Images/Invisibility cloack.jpg", Name: "Invisibility cloack"},
    {imgSrc: "./Images/Owl.jpg", Name: "Owl"},
    {imgSrc: "./Images/Phoenix.png", Name: "Phoennix"},
    {imgSrc: "./Images/Quaffle.jpg", Name: "Quaffle"},
    {imgSrc: "./Images/Snitch.jpg", Name: "Snitch"},
    {imgSrc: "./Images/Sorting hat.jfif", Name: "Sorting hat"},
]

// Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(()=> Math.random()-0.5);
    return cardData;
}
randomize();

// card generator function
const cardGenerator = () => {
    const cardData = randomize();
    // Generate the HTML
    cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back'; 
    // attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute('name', item.Name);
    // Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e)=>{
        card.classList.toggle("toggleCard");
        checkCards(e);
    });
    });
};
// check cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    // logic
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name')=== 
        flippedCards[1].getAttribute('name'))
        {
        console.log("Match");
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
        })
        }
    else{
        console.log("Wrong");
        flippedCards.forEach((card)=>{
            card.classList.remove('flipped');
            setTimeout(() => card.classList.remove('toggleCard'), 1000);
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        playerLives === 0? restart("Try again ;("):null;
    }
}
// check if we won the game
if(toggleCard.length === 16){
    restart("You win!!! :)");
}
};
// restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards =document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove("toggleCard");
        // randomize
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.Name);
        section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 8;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();













