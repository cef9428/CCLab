let scra;
let me;
let newArray=[];
let sca;
let sa;
let s;
let l=0;
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
  if(l<1){
    l++;
    for(let i=0;i<me.length;i++){
    let f = floor(random(0,me.length));
    newArray.push(me[f]);
    }
    sa=document.getElementById("fu").textContent=newArray.join('');
    console.log(scra);
  }
  else{
    console.log('no');
  }
}
function myfunc2(){
  //alert('help');
    sa=document.getElementById("fu").textContent=scra.toString();
  // else{
  //   console.log('no');
  // }

}

// function woo(){
//   let scram=split(scra," ");
//   scra.textContent=scram;
//
// }
