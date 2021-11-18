let x = 0;
let start = false;
let end = false;
let grow = 1;
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent('here')
  background(220);
  rectMode(CENTER);
}

function draw() {
  let degree = frameCount;
  let pframecount = frameCount;
  if(start == true && end == false){
    translate(width/2,height/2)
    let ang = radians(degree);
    x = x + grow;
    rotate(sin(ang));
    noFill()
    rect(0,0,x,x)
    if(x<=25){
      stroke(0);
    }
    else {
      let r = document.getElementById('red');
      let g = document.getElementById('green');
      let b = document.getElementById('blue');
      stroke(r.value,g.value,b.value);
    }
    if(x > height){
      x = 0;
      background(255);
    }
    console.log(start,end);
  }
  if(end == true && start ==  false){
    grow = 0;
    ang = 0
  }
  else{
    grow = 1;
    let fr = frameCount - pframecount;
    degree = fr;
    ang = radians(degree);
  }
}
function say(fun){
  if(fun > 0){
    start = true;
    end = false;
  }
  else if(fun == 0){
    start = false;
  }
}
function stop(no){
  if (no == 1){
    end = true;
    start = false;
  }
  else{
    end = false;
    start = true;
  }
}
