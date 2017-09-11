var firework;

function setup(){
    createCanvas(800,600);
    stroke(255);
    strokeWeight(4);
    // particle ( x , y ) niikun määriteltiin particle.js:ssä
    firework = new Particle(random(width),height);
}
function draw(){
    background(51);
    firework.update();
    firework.show();

}