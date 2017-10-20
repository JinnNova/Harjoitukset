var attractors = [];
var particles = [];

function setup(){
    createCanvas(1200, 800);
    //että alussa on valmiiksi tausta tumma
    background(30);

    for (var i=0; i < 5; i++){
        particles.push(new Particle(600,400));
    }

    for (var i=0; i < 10; i++){
        attractors.push(createVector(random(width), random(height)));
    }
}

function draw(){
    background(10,4);
    stroke(255);
    strokeWeight(2);
    for (var i=0; i < attractors.length; i++){
        point(attractors[i].x, attractors[i].y);
    }

    for (var i=0; i < particles.length; i++){
        var particle = particles[i];
        for (var j=0; j < attractors.length; j++){
            particle.attracted(attractors[j]);
        }
        
        particle.update();
        particle.show();
    }

}