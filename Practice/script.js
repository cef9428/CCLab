let img;
let cam;
let r;
let g;
let b;
let a;
function preload(){
  img=createImage(640,480);
}
function setup(){
  createCanvas(640,480);
  cam = createCapture(VIDEO);
  r = random(255);
  g = random(255);
  b = random(255);
  //a = random(255);
}
function draw(){
  let cutOff=document.getElementById('cutoff')
  console.log(cutOff.value)
  background('yellow');

  img.loadPixels();
  cam.loadPixels();

  for(let y=0;y<480;y++){
    for(let x=0;x<640;x++){
      let index =(y*width+x)*4;

      let red = cam.pixels[index+0];
      let green = cam.pixels[index+1];
      let blue = cam.pixels[index+2];
      // if(red<=(cutOff.value)||green<=(cutOff.value)||blue<=(cutOff.value)){
      //   red=255;
      //   green=255;
      //   blue=255;
      // }
      // else if(red>=(cutOff.value)||green>=(cutOff.value)||blue>=(cutOff.value)){
      //   red=255;
      //   green=0;
      //   blue=0;
      // }
      //let alpha = cam.pixels[index+3];


      img.pixels[index+0]=red;
      img.pixels[index+1]=green;
      img.pixels[index+2]=blue;
      img.pixels[index+3]=255;
    }
  }
  img.updatePixels();
  image(img,0,0);
}
