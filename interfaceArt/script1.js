// Start by clicking on the box in the top left
//q = Black, w = White, e = Blue, r = Red, t = Green, y = Purple,
//u = Pink, i = indigo, o = orange, p = random color
// up arrow = increase stroke size, down arrow = decrease stroke size
// Box in top right shows current color
let currX = 0;
let currY = 0;
let prevX = 0;
let prevY = 0;
let size = 10;
let col = (0,0,0);
let co;
let cl;
let cr;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('1');
  background(255);

}

function draw() {
  // This would be redundant as mouseX and Y are the current position.
  // This is intended to demonstate the method intuitively.
  currX = mouseX;
  currY = mouseY;
// color guide box
  noStroke();
  rect(0,0,50,50);
  fill(col);
  if (mouseIsPressed){
  strokeWeight(size)
  stroke(col);
  line(prevX, prevY, currX, currY);
  // console.log("prev: " + prevX + "," + prevY);
  // console.log("curr: " + currX + "," + currY);
  }
  // store the current position to prevX and prevY
  // and they will be used as a previous position in the next frame.
  prevX = currX;
  prevY = currY;
 }
// function to change color with key press
function keyPressed(){
  // varriables for random colo
  let co = (random(0,255));
  let cl = (random(0,255));
  let cr = (random(0,255));
  if(key == 'q'){
      col = "black"
    }
  else if (key == 'w'){
      col = "white"
    }
  else if (key == 'e'){
      col = "blue"
    }
  else if (key == 'r'){
      col = "red"
    }
  else if (key == 't'){
      col = "green"
    }
  else if (key == 'y'){
      col = "purple"
    }
  else if (key == 'u'){
      col = "pink"
    }
  else if (key == 'i'){
      col = "indigo"
    }
  else if (key == 'o'){
      col = "orange"
    }
  else if (key == 'p'){
    col = color(co,cl,cr)
  }
  if(keyCode == UP_ARROW){
      size = (size + 2)
    }
  else if(keyCode == DOWN_ARROW){
      size = (size - 2)
  }
  if(keyCode == BACKSPACE){
    background(255);
    noStroke();
    rect(0,0,50,50);
    fill(col);
}
}
