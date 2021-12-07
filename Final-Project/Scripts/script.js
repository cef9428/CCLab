let mic;
let i=0;
let start=0;
let rip=[];
let dia;
function preload(){
  mySound = loadSound("sounds/test2.mp3")
}

function setup(){
  //let canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(userStartAudio);
  background(255);
  // dia=mySound.getPeaks();
  //console.log(dia.length);
  // for(let i=0;i<dia.length;i++){
  //   let posX=map(dia[i],0,0.5,0,width);
  //   let posY=map(dia[i],0,0.5,0,height);
  //   let thicc=map(dia[i],0,0.5,5,15);
  //   let col=map(dia[i],0,0.5,0,100);
  //   rip.push(new Ripple(posX,posY,thicc,col,100,100))
  // }
  colorMode(HSB,100)
  //rip= new Ripple(width/2,height/2,10,50,100,100);

  // mic = new p5.AudioIn();
  // mic.start();

};


function draw(){
  dia=mySound.getPeaks();
  // background(0);
  // noFill();
  // stroke(50,100,50);
  // strokeWeight(20);
  // circle(width/2,height/2,80)
  // for(let i=0;i<dia.length;i++){
  //   rip[i].update();
  //   rip[i].display();
  // }
  if(start>=1){

//   // console.log(dia.length);
//   //while(i<dia.length){
  i++;
  console.log(dia[i]);
  let size = map(dia[i], -0.01, 0.08, 10, width);
  let weight = map(dia[i], 0, 0.5, 5, 15);
  let s = map(dia[i], 0, 0.16, 0, 100);
  let b = map(dia[i], 0, 0.16, 0, 100);
  let h = map(weight, 5, 15, 20, 100);
    for(let i=0;i<dia.length;i++){
      noFill();
      strokeWeight(weight);
      stroke(h,s,b);
      circle(width/2, height/2, size);
    }
}
  // }
  // let level = mic.getLevel();
  // console.log(level)


}
function mousePressed(){
  mySound.play();
  start++;
}
class Ripple{
  constructor(startX,startY,big,h,s,b){
    this.x=startX;
    this.y=startY;
    this.size=big;
    this.hue=h;
    this.sat=s;
    this.bri=b;
  }
  update(){
    this.size++;
    this.sat=this.sat-(this.size/50);
    this.bri=this.sat;
  }
  display(){
    noFill();
    strokeWeight(this.size);
    stroke(this.hue,this.sat,this.bri);
    circle(this.x,this.y,10);
  }
}
