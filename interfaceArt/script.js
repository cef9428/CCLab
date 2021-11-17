let x = 0;
let r = document.getElementById('red');
let g = document.getElementById('green');
let b = document.getElementById('blue');
let start = false;
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('here')
  background(220);
  rectMode(CENTER);
}

function draw() {
  console.log(r.value,g.value,b.value);
  if(start == true){
    translate(width/2,height/2)
    let degree = frameCount;
    let ang = radians(degree);
    x = x + 1;
    rotate(sin(ang));
    noFill()
    rect(0,0,x,x)
    if(x == 50){
      stroke(r.value,g.value,b.value)
    }
    if(x > height){
      noLoop();
    }
  }

}
function say(fun){
  console.log(fun);
  if(fun = 1){
    start = true
  }
  else{
    start = false;
  }
}
