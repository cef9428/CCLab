let img;
let imageArray = [];
let horseIndex = 0;
let horseX = 100;
function preload(){
  console.log('hello')
// img = loadImage('assets/images/horse1.jpg')
  for (let i = 1; i < 12; i++) {
    let path = "assets/images/horse"+i+".jpg";
    let img = loadImage(path);
    imageArray.push(img);
  }
}
function setup(){
  createCanvas(800,500);
}
function draw(){
  background(0);
  image(imageArray[horseIndex],horseX,0,200,150)
  //filter(BLUR, 3)
  horseIndex++;
  horseX +=10;
  if (horseIndex>10) {
    horseIndex = 0;
  }
  // image(img,horseX,0,200,150);
  // horseX +=10;
  if(horseX>width){
    horseX=-200;
  }
}
