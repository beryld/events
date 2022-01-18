const _initTime = Date.now();




function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

function clickOnSquare(event) {
  const clicky = event.target.classList[1];
  // console.log(event);
  // console.log(clicky);
  // console.log(event.target);
  // console.log(event.target.classList)

  const containerSection = document.querySelector(".displayedsquare-wrapper");
  const newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare");
  containerSection.append(newDiv); // here we created the div we have to give a color

  const color = event.target.classList[1]; //we have the color in 'color'
  newDiv.classList.add(color);

  //Log color of boxes infos  & space bar hit infos
  const infoContainer = document.querySelector("h2");
  const newPtag = document.createElement("p");
  newPtag.textContent =
    "[" + getElapsedTime() + "]" + "Created a new " + color + " square";
  const backColor = document.createElement('p');
  
  backColor.textContent = "background color is : " + document.body.style.backgroundColor;
  infoContainer.append(backColor)
  infoContainer.append(newPtag);

  console.log(getElapsedTime());

  // second part : Alert color second square 

  const displayedsquares = document.querySelectorAll(".displayedsquare");
  for (let displayedsquare of displayedsquares) {
    displayedsquare.addEventListener("click", clickOnSquare2);

    function clickOnSquare2(event) {
      const clicky2 = event.target.classList[1];
      window.alert("Color is : " + clicky2);
      console.log(getElapsedTime());
    }
  }


}

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
  actionsquare.addEventListener("click", clickOnSquare);
}

console.log(actionsquares);


  //third part is keypress


document.body.onkeyup = function pressed(e){
    if(e.code== 'Space' ){
        const r2 = ` ${Math.floor(Math.random() * 256)}`; /* Second method for rgb random */
        const g2 = ` ${Math.floor(Math.random() * 256)}`;
        const b2 = ` ${Math.floor(Math.random() * 256)}`;
        console.log('touchhhbar')
        document.body.style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")" 
    }
  }