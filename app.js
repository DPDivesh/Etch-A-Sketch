container = document.querySelector('#pixelSketchContainer');
/*
square = document.createElement("div");
//squarePixel= container.append(square);
console.log(square);
//make this be players input
let givenSquares = 16;
const containerArea = 250000;
computedWidth = Math.sqrt(containerArea/(givenSquares * givenSquares));
/*console.log(computedWidth);

for (i=0; i<16; i++){
  //console.log(i);
  for(j=0; j<16; j++){
    //console.log(j,i);
    //console.log(i, j);
    square = document.createElement("div");
    square.classList.add("squarePixel");
    
    square.style.width ="31.25px" ;
    container.append(square);
  
  }
}

*/
/*
console.log(document.getElementById("myRange"));
sliderChange = document.getElementById("myRange");
*/
// number of div values console.log(document.getElementsByTagName("div").length)


const containerArea = 250000;


function getVal(e){
  container = document.querySelector('#pixelSketchContainer');
console.log(e);
container.innerHTML="";
squareDisplay = document.querySelector(".updatingValue");
  squareDisplay.innerHTML = (e+" x "+e);
  console.log(squareDisplay);

  gridSize(e);
}


function gridInitializer(){

console.log(document.getElementById("pixelSketchContainer").offsetWidth);
console.log(containerArea);
  givenValue = document.querySelectorAll("input");
  givenSquares = givenValue[1].value;
  console.log(givenSquares);

  squareDisplay = document.querySelector(".updatingValue");
  squareDisplay.innerHTML = (givenSquares +" x "+givenSquares);
  console.log(squareDisplay);

  gridSize(givenSquares);
}

function gridSize(givenSquares){
computedWidth = Math.sqrt(containerArea/(givenSquares * givenSquares));
  console.log(computedWidth);
  for (i=0; i<givenSquares; i++){
    //console.log(i);
    for(j=0; j<givenSquares; j++){
      //console.log(j,i);
      //console.log(i, j);
      square = document.createElement("div");
      square.classList.add("squarePixel");
      square.style.width =computedWidth +"px" ;
      container.append(square);
 
    }
  }
}


gridInitializer();