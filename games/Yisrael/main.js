// const cards = ["a","a","b","b","c","c"]

function shufle(cards){
    for(i in cards){
       const runindx= Math.floor(Math.random() * cards.length);
       const temp = cards[i];
       cards[i] = cards[runindx]
       cards[runindx] = temp;
    }
}
// shufle(cards);
// console.log(cards);

let Harry = null;
let Malfoy = null;

const container = document.getElementById("container")
let cards = [
    {
        card: 'Quaffle',
        imgUrl: './Quaffle1.jpg'
    },
    {
        card: 'Snitch',
        imgUrl: './Golden Snitch.jpg'
    },
    {
        card: 'Bludgers',
        imgUrl: './bludgers1.webp'
    },
    {
        card: 'Quaffle',
        imgUrl: './Quaffle1.jpg'
    },
    {
        card: 'Snitch',
        imgUrl: './Golden Snitch.jpg'
    },
    {
        card: 'Bludgers',
        imgUrl: './bludgers1.webp'
    },
    
]


shufle(cards);
cards.map(data =>{
    let img = document.createElement('img')
    img.src = data.imgUrl;
    img.style.margin = "25px";
    img.classList.add("count")
    img.vlaue = data.card
    container.append(img)
    

})

function addcard(vlaue){
    console.log(vlaue);
}

let cooise1 = null;
let cooise2 = null;
choose(cooise1,cooise2)




function choose(a,b){
    a==b? alert("you win 10 points")&&character+10:
    alert("oponents turn");
}


// לבצע בדיקת התאמה בין שתי הבחירות 

// אם הבחירות מתאימות להדפיס מצויין!!! זיכית את ביתך ב 10 נקודות 

// להשאיר את הקלפים שנבחרו גלויים ולנטרל אותם ולהמשיך בבחירה של קלפים נוספים


// אם הבחירות לא תואמות אז להסתיר את הקלפים והתור עובר ליריב

// המשחק ירוץ כל עוד יש קלפים שעוד לא בוצעה להם התאמה

// היריב אם מספר הנקודות הגבוהה יותר יוכרז כמנצח 

//  ליצור כפתור שחק שוב שבלחיצתו תופעל פונקצייה המסדרת את הקלפים באופן רנדומלי ומוסתר על הלוח


