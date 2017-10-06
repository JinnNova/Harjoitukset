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
    ship.edges();
}

function keyPressed(){
    if (keyCode == RIGHT_ARROW){
        ship.setRotation(0.1);
    }
    else if (keyCode == LEFT_ARROW){
        ship.setRotation(-0.1);
    }
    else if (keyCode == UP_ARROW){
        ship.boosting(true);
    }
}

function keyReleased(){
    ship.setRotation(0);
    ship.boosting(false);
}

