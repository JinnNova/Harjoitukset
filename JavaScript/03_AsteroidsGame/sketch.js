var ship;
function setup(){
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
}

function draw(){
    background(10);
    ship.render();
}

function Ship(){
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    this.render = function() {
    	translate(this.pos.x, this.pos.y);
    	noFill();
    	stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    }
}