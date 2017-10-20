let particles =[];

function setup(){
    createCanvas(1200, 800);
    //että alussa on valmiiksi tausta tumma
    background(30);
    let p = new Particle();
    particles.push(p);

}

function draw(){
    background(10,4);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }

}

class Particle {
    constructor(){
        this.x = 600;
        this.y = 600;
        this.velx = random(-1,1);
        this.vely = random(-5,-1);
    }

    update(){
        this.x += this.velx;
        this.y += this.vely;
    }

    show(){
        stroke(255);
        fill(255,10);
        ellipse(this.x,this.y,16);
    }
}