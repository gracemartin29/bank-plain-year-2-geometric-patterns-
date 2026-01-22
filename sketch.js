// This is the sketch.js file.
// Press 's' to export the SVG.
// Note that p5.js is used in 'global mode'. 

p5.disableFriendlyErrors = true; // hush
let bDoExportSvg = false; 

function setup(){
  // These canvas dimensions are 8.5"x11" at 96 dpi
  createCanvas(816, 1056); 
}

function keyPressed(){
  if(key == 's'){ 
    console.log('s pressed');
    //bDoExportSvg = true; //
    endRecordSvg();

  }
}

function draw(){
  console.log("drawing");
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg(this, "myOutput.svg");
  }
  

  // Draw stuff here, such as:
  frameRate(0);

  for(let x = 75; x < width; x += 200){
    let randomy = random(0, height);
    //circle 
    fill(255)
    for (let diameter = 150; diameter > 0; diameter = diameter - 15){
      circle(x, randomy, diameter);
      circle(x, random(0, height), diameter)
    } 

    //triangles
    let x1 = 20;
    let y1 = 10;
    let x2 = 10;
    let y2 = 30;
    let x3 = 30
    let y3 = 30;

    for (let scale = 15; scale > 1; scale -= 1){
        triangle(scale*x1, scale*y1, scale*x2, scale*y2, scale*x3, scale*y3);
    } 
    
    //square
    fill(255);
    for (let diameter = 150; diameter > 0; diameter = diameter - 15){
      square(x, randomy, diameter);
      square(x, random(0, height), diameter)
    } 
  }

  // if (bDoExportSvg){
  //   endRecordSvg();
  //   bDoExportSvg = false;
  // } //
}