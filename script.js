const gameContainer = document.getElementById("game");
let clickOne = "";
let clickTwo = "";

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);


    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
   whatColorAmI = event.target.className;
    if (!clickOne) {
    for (let i = 0; i < COLORS.length; i++){
    if (COLORS[i] === whatColorAmI){
      event.target.style.backgroundColor = whatColorAmI;
      clickOne = whatColorAmI;
      target1 = event.target;
    } }
  } else {
  target2 = target1;
  target1 = event.target;
  clickTwo = clickOne;
  clickOne = whatColorAmI;
   for (let i = 0; i < COLORS.length; i++){
    if (COLORS[i] === whatColorAmI){
      event.target.style.backgroundColor = whatColorAmI;
      clickOne = whatColorAmI;
  }
  } 
if(!compareCards(clickOne, clickTwo)){
setTimeout(function(){
target1.style.backgroundColor = "white"
target2.style.backgroundColor = "white"
},1000);

}

clickOne = "";
clickTwo = "";
}}



function compareCards(card1, card2){
  if (card1 === card2){
return true;
  } else {
   return false;
    }
}







// when the DOM loads
createDivsForColors(shuffledColors);
