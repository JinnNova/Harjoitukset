var attractor;
var particle;

function setup(){
    createCanvas(1200, 800);
    particle = new Particle(200,400);
    attractor = createVector(200,200);
}

function draw(){
    background(10);
    stroke(255);
    strokeWeight(2);
    point(attractor.x, attractor.y);

    particle.attracted(attractor);
    particle.update();
    particle.show();

}