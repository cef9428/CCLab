//based off https://editor.p5js.org/MOQN/sketches/c2oTHwVqd
let char = [" ","1","0","I","o"];

let img;
let cam;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(width, height);
}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();
  let gridSize = 10;

  noStroke();
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4;

      let red = cam.pixels[index + 0];
      let green = cam.pixels[index + 1];
      let blue = cam.pixels[index + 2];

      let avg = (red + green + blue) / 3;

      let bCode = floor(
        map(avg, 0, 255, 0, char.length)
      );
      // let a = sliderR.value;
      // let c = sliderG.value;
      // let d = sliderB.value;
      fill(0,255,0);
      text(char[bCode], x, y);
    }
  }
}
