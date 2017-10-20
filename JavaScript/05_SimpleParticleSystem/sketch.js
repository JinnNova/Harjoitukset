let p;

function setup(){
    createCanvas(1200, 800);
    //että alussa on valmiiksi tausta tumma
    background(30);
    p = new Particle();

}

function draw(){
    background(10,4);
    p.show();

}

class Particle {
    constructor(){
        this.x = 600;
        this.y = 600;
    }

    show(){
        stroke(255);
        fill(255,10);
        ellipse(this.x,this.y,16);
    }
}