// Thanks to Daniel Shiffman for this tutorial on "Simple particle system" in Javascript and p5.js

let particles =[];

function setup(){
    createCanvas(1200, 800);
    //että alussa on valmiiksi tausta tumma
    background(30);

}

function draw(){
    background(10,140);
    let p = new Particle();
    particles.push(p);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
        // we have to clear up the used particles
        if(particles[i].finished()) {
            particles.splice(i,1);
        }
    }

}

class Particle {
    constructor(){
        this.x = 600;
        this.y = 600;
        this.velx = random(-1,1);
        this.vely = random(-5,-1);
        this.alpha = 255;
    }

    finished() {
        // true or false
        return this.alpha < 0;
    }

    update(){
        this.x += this.velx;
        this.y += this.vely;
        this.alpha -= 5;
    }

    show(){
        noStroke();
        //stroke(255);
        fill(255,this.alpha);
        ellipse(this.x,this.y,16);
    }
}
