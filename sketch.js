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
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw(){
  background(255); 
  if (bDoExportSvg){
    beginRecordSvg(this, "myOutput.svg");
  }

  // Draw stuff here, such as:
  let centerx = width/2;
  let centery = height/2;

  /*for (let diameter = 150; diameter > 0; diameter = diameter - 15){
    circle(centerx, centery, diameter);
  }
*/
  for(let x = 75; x < width; x += 200){
    for (let diameter = 150; diameter > 0; diameter = diameter - 15){
      circle(x, centery, diameter);
    }
  }





  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}
