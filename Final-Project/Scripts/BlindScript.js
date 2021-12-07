let sol
let sHead
let bnes;
let bwhole;
let tuoi;
let tuoifull;
let hom;
let dys;
let par;
function preload(){
  sol=loadSound("sounds/solutions.mp3");
  sHead=loadSound("sounds/Solhead.mp3");
  bnes=loadSound("sounds/bness.mp3");
  bwhole=loadSound("sounds/bnessfull.mp3");
  tuoi=loadSound("sounds/tuoi.mp3");
  tuoifull=loadSound("sounds/tuoifull.mp3");
  hom=loadSound("sounds/home.mp3");
  dys=loadSound("sounds/dyslexia.mp3")
  par=loadSound("sounds/parknison.mp3")
}
function setup(){
  //let canvas=createCanvas(windowWidth,windowHeight);
  // canvas.parent('cover');
  noCursor();
  let h=document.getElementById("first");
  h.addEventListener("mouseover",hread);
  h.addEventListener("mouseout",hnoRead);
  let d=document.getElementById("second");
  d.addEventListener("mouseover",dread);
  d.addEventListener("mouseout",dnoRead);
  let p=document.getElementById("three");
  p.addEventListener("mouseover",pread);
  p.addEventListener("mouseout",pnoRead);
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
function hread(){
  hom.play();
}
function hnoRead(){
  hom.stop();
}
function dread(){
  dys.play();
}
function dnoRead(){
  dys.stop();
}
function pread(){
  par.play();
}
function pnoRead(){
  par.stop();
}
