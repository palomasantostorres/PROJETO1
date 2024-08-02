function setup() {
  createCanvas(1000, 800);
  background("#B02772");

}
 
function draw() {
 
  fill("black");
  stroke ("blue");
  if (mouseIsPressed)
  rect(mouseX,mouseY,50,70);
}
