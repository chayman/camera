var mirror;
var img;

function setup() {
  createCanvas(640,480);
  mirror =createCapture(VIDEO);
  mirror.size(320,240);
  img =createImage(640,480);
  img.loadPixels();
}

function draw() {
  mirror.loadPixels();
  for(var i=0; i< mirror.pixels.length; i+=4){
    var r = mirror.pixels[i];
    var g = mirror.pixels[i+1];
    var b = mirror.pixels[i+2];
    var a = mirror.pixels[i+3];
    
    img.pixels[i] = b;
    img.pixels[i+1] = r;
    img.pixels[i+2] = g;
    img.pixels[i+3] = a;
  }
  
  img.updatePixels();
  
  push();
  translate(img.width,0);
  scale(-1,1);
  image(img,0,0);
  pop();
  
}