var ship;
function setup(){
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
}

function draw(){
    background(10);
    ship.render();
    ship.turn(0.1);
}

function Ship(){
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    // P5 ei käsittele asteina vaan radiantteina joten 90 astetta on PI / 2
    this.heading = 0;

    this.render = function() {
        translate(this.pos.x, this.pos.y);
        rotate(this.heading);
        noFill();
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    }

    this.turn = function(angle) {
        this.heading += angle

    }
}