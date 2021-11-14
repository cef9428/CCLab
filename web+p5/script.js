//alert('working');
let slider = document.getElementById('slider');
let circWidth = document.getElementById('width');
console.log(slider.value)
function setup(){
  let canvas = createCanvas(200,200);
  canvas.parent("here");
  background(0);
}
function draw(){
  background(0);
  fill('dimgrey');
  circle(slider.value,height/2,circWidth.value);

}
