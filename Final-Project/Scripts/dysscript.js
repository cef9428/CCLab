let scra;
let me;
let newArray=[];
let sca;
let sa;
let s;
function setup(){


}
function draw(){
  scra=document.getElementById("fu").textContent;
  me = split(scra,"");
  sca=document.getElementById("fu").addEventListener('mouseover',myfunc);
  s=document.getElementById("fu").addEventListener("mouseout",myfunc2);
  // console.log(me);
  // let scram = split(scra," ");
  // console.log(scram);
  //scra.addEventListener("mouseover",woo);
}
function myfunc(){
  for(let i=0;i<me.length;i++){
    let f = floor(random(0,me.length));
    newArray.push(me[f]);
  }
  sa=document.getElementById("fu").textContent=newArray.join('');
}
function myfunc2(){
  sa.textContent=scra;

}

// function woo(){
//   let scram=split(scra," ");
//   scra.textContent=scram;
//
// }
