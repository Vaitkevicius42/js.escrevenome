function setup() {
    createCanvas(600, 600);
    background(color(0, 0, 0));
  
  }
  
  function draw() {
    background(0);
    stroke("purple");
    fill("pink");
  
    
  if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
  }
  }