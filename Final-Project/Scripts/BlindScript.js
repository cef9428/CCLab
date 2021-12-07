let sol
let sHead
let bnes;
let bwhole;
let tuoi;
let tuoifull;
function preload(){
  sol=loadSound("sounds/solutions.mp3");
  sHead=loadSound("sounds/Solhead.mp3");
  bnes=loadSound("sounds/bness.mp3");
  bwhole=loadSound("sounds/bnessfull.mp3");
  tuoi=loadSound("sounds/tuoi.mp3");
  tuoifull=loadSound("sounds/tuoifull.mp3");
}
function setup(){
  //let canvas=createCanvas(windowWidth,windowHeight);
  // canvas.parent('cover');
  noCursor();
  let solu=document.getElementById("solutions")
  solu.addEventListener("mouseover",sread);
  solu.addEventListener("click",sreadFull);
  solu.addEventListener("mouseout",snoRead);
  let bn=document.getElementById("bnes");
  bn.addEventListener("mouseover",bread);
  bn.addEventListener("click",breadFull);
  bn.addEventListener("mouseout",bnoRead);
  let ti=document.getElementById("bOnI");
  ti.addEventListener("mouseover",tread);
  ti.addEventListener("click",treadFull);
  ti.addEventListener("mouseout",tnoRead);


}
function draw(){
  background(0);
}
function sreadFull(){
  sol.play();
}
function sread(){
  sHead.play();
}
function snoRead(){
  sHead.stop();
}
function bread(){
  bnes.play();
}
function bnoRead(){
  bnes.stop();
}
function breadFull(){
  bwhole.play();
}
function tread(){
  tuoi.play();
}
function tnoRead(){
  tuoi.stop();
}
function treadFull(){
  tuoifull.play();
}
