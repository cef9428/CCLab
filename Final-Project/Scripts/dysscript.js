let scra;
let me;
let newArray=[];
let otherArray=[];
let sca;
let sa;
let s;
let l=0;
let j=0;
let dt;
let dat;
let d;
let t;
let da;
function setup(){


}
function draw(){
  scra=document.getElementById("fu").textContent;
  me = split(scra,"");
  sca=document.getElementById("fu").addEventListener('mouseover',myfunc);
  s=document.getElementById("fu").addEventListener("mouseout",myfunc2);
  dt=document.getElementById("DT").textContent;
  d = split(scra,"");
  dat=document.getElementById("DT").addEventListener('mouseover',mydfunc);
  t=document.getElementById("DT").addEventListener("mouseout",mydfunc2);
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
  if(l>=1){
  sa=document.getElementById("fu").textContent=scra.toString();  
  }
  // else{
  //   console.log('no');
  // }

}
function mydfunc(){
  if(j<1){
    j++;
    for(let i=0;i<d.length;i++){
    let f = floor(random(0,d.length));
    otherArray.push(d[f]);
    }
    da=document.getElementById("DT").textContent=otherArray.join('');
    console.log(dt);
  }
  else{
    console.log('no');
  }
}
function mydfunc2(){
  //alert('help');
    da=document.getElementById("DT").textContent=dt.toString();
  // else{
  //   console.log('no');
  // }

}

// function woo(){
//   let scram=split(scra," ");
//   scra.textContent=scram;
//
// }
