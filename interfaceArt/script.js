function setup(){
  let col = random();
  let canvas1 = createCanvas(200,200);
  let canvas2 = createCanvas(200,200);
  let canvas3 = createCanvas(200,200);
  let canvas4 = createCanvas(200,200);
  let canvas5 = createCanvas(200,200);
  let canvas6 = createCanvas(200,200);
  let canvas7 = createCanvas(200,200);
  let canvas8 = createCanvas(200,200);
  let canvas9 = createCanvas(200,200);
  canvas1.parent('one')
  canvas2.parent('two')
  canvas3.parent('three')
  canvas4.parent('four')
  canvas5.parent('five')
  canvas6.parent('six')
  canvas7.parent('seven')
  canvas8.parent('eight')
  canvas9.parent('nine')
}
function draw(){
  background(0);
  circle(width/2,height/2,50);
}
