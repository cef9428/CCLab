function say(what){
  let elem = document.getElementById("lyrics");
  let newElem = document.createElement("p");
  newElem.innerHTML = what;
  elem.appendChild(newElem);
  console.log(elem);
}

function makeCircle() {
let elem = document.getElementById("rect")
elem.style.borderRadius = '50px';
elem.style.background = 'green';
}
function makeRect() {
let elem = document.getElementById("rect")
elem.style.borderRadius = '0px';
elem.style.background = 'red';
}

let circleButton = document.getElementById('circle');
circleButton.addEventListener('click',makeCircle);
let rectButton = document.getElementById('rectB');
rectButton.addEventListener('click',makeRect);
