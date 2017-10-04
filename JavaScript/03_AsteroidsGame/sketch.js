var ship;
function setup(){
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
}

function draw(){
    background(10);
    ship.render();
    ship.turn();
    ship.update();
}

function keyPressed(){
    if (keyCode == RIGHT_ARROW){
        ship.setRotation(0.1);
    }
    else if (keyCode == LEFT_ARROW){
        ship.setRotation(-0.1);
    }
    else if (keyCode == UP_ARROW){
        ship.boost();
    }
}

function keyReleased(){
    ship.setRotation(0);
}

function Ship(){
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    // P5 ei käsittele asteina vaan radiantteina joten 90 astetta on PI / 2
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector(0,0);

    this.update = function(){
        this.pos.add(this.vel);
    }

    this.boost = function(){
        var force = p5.Vector.fromAngle(this.heading);
        this.vel.add(force);
    }

    this.render = function(){
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        noFill();
        stroke(255);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    }

    this.setRotation = function(a){
        this.rotation = a;
    }

    this.turn = function(){
        this.heading += this.rotation;

    }
}