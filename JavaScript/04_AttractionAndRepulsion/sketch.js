var attractor;

function setup(){
    createCanvas(1200, 800);
    attractor = createVector(200,200);
}

function draw(){
    background(10);
    stroke(255);
    strokeWeight(2);
    point(attractor.x, attractor.y);
}