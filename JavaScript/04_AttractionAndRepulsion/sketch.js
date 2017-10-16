var attractor;
var particles = [];

function setup(){
    createCanvas(1200, 800);
    //että alussa on valmiiksi tausta tumma
    background(30);

    for (var i=0; i < 30; i++){
        particles.push(new Particle(400,200));
    }

    
    attractor = createVector(600,400);
}

function draw(){
    background(10,4);
    stroke(255);
    strokeWeight(2);
    point(attractor.x, attractor.y);

    for (var i=0; i < particles.length; i++){
    	var particle = particles[i];
        particle.attracted(attractor);
        particle.update();
        particle.show();
    }

}