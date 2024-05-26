let cardsArray=[
     {
          'name':"html",
          'img':"image/html.png"
     },
     {
          'name':"css",
          'img':"image/css.png"
     }, {
          'name':"js",
          'img':"image/javascript.png"
     }, {
          'name':"react",
          'img':"image/react-js.png"
     }, {
          'name':"nodejs",
          'img':"image/node-js.png"
     }, {
          'name':"mongoDB",
          'img':"image/mongoDBB.png"
     },
];

const parentdiv=document.querySelector("#card-section")
const scoreElement = document.getElementById('score');
let score = 0;

//step:2 to dublicate each card
const gamecard=cardsArray.concat(cardsArray)
console.log(gamecard);

//step:3 this method create a new shuffled array instead of modifying the original one.
let shufledchild=Array.from(gamecard).sort(()=> 0.5-Math.random());

//step:5
let clickcount=0;
let firstcard="";
let secondcard="";

const card_matches=()=>{
let card_selected=document.querySelectorAll(".card-selected")

card_selected.forEach((curElm)=>{
     curElm.classList.add("card_match")
     curElm.classList.remove("card-selected");
})

score++;
scoreElement.textContent = score;
}

//step:7
const reset_match=()=>{
     clickcount=0;
     firstcard="";
     secondcard="";

     const card_matches=()=>{
          let card_selected=document.querySelectorAll(".card-selected")
          
          card_selected.forEach((curElm)=>{
               curElm.classList.add("card-selected")
          })
}
}

//step:4
parentdiv.addEventListener("click",(event)=>{
 let curcard=event.target;
 if(curcard.id ==="card-section"){return false}

 clickcount++;
 if(clickcount<3){
     if(clickcount===1){
     firstcard=curcard.parentNode.dataset.name;
 curcard.parentNode.classList.add("card-selected")


 }else{
     secondcard=curcard.parentNode.dataset.name;
 curcard.parentNode.classList.add("card-selected")

 }

 if(firstcard !=="" && secondcard !==""){
     if(firstcard===secondcard){
          // curcard.classList.add("card_match")
          setTimeout(() => {
               card_matches()
               reset_match()
          }, 1000);
        
     }else{
          setTimeout(() => {
               reset_match()
          }, 1000);
     }
 }
}
})



//step:1 create div using js
for (let i = 0; i < shufledchild.length; i++) {
let childDiv=document.createElement("div")     
childDiv.classList.add('card')
childDiv.dataset.name=shufledchild[i].name
// childDiv.style.backgroundImage=`url(${shufledchild[i].img})`


let frontdiv=document.createElement("div")     
frontdiv.classList.add('front_card')

let backdiv=document.createElement("div")     
backdiv.classList.add('back_card')

backdiv.style.backgroundImage=`url(${shufledchild[i].img})`


parentdiv.appendChild(childDiv)

childDiv.appendChild(frontdiv)
childDiv.appendChild(backdiv)

}


const refreshBtn = document.querySelector(".btn")
function handleClick() {
     window.location.reload();
      }