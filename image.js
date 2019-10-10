var img;
function preload() {
  img = loadImage("sponge.png");
}

function setup() {
  createCanvas (400,400)
}

function draw() {
  background(0,255,0);
  fill(0,0,255);
  ellipse(50,50,80,80);
  
  fill(255,0,0)
  rect(300,300,50,50);
  
  image(img,0,0);

}
