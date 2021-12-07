let btn;
function setup(){
  let can = createCanvas(windowWidth, 200);
  can.parent('frame');
  btn=new MoveButton(width/2,height/2);
}
function draw(){
  background(0, 23, 31);
  btn.update();
  btn.display();
}
class MoveButton{
  constructor(startX,startY){
    this.x=startX;
    this.y=startY;
  }
  update(){
    if(mouseIsPressed&&mouseX>=this.x&&mouseX<=this.x+50&&mouseY>=this.y&&mouseY<=this.y+30){
      this.x+=random(20,40)*floor(random(-1,2));
      this.y+=random(20,40)*floor(random(-1,2));
    }
    if (this.y>height||this.y<height-200) {
      this.y=20;
    }
  }
  display(){
    fill(255);
    rect(this.x,this.y,50,30);
    fill(0);
    text("Home",this.x+10,this.y+20);
  }
}
