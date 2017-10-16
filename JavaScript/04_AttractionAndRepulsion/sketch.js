var attractor;
var particle;

function setup(){
    createCanvas(1200, 800);
    //että alussa on valmiiksi tausta tumma
    background(10);

    particle = new Particle(400,200);
    attractor = createVector(600,400);
}

function draw(){
    background(10,4);
    stroke(255);
    strokeWeight(2);
    point(attractor.x, attractor.y);

    particle.attracted(attractor);
    particle.update();
    particle.show();

}