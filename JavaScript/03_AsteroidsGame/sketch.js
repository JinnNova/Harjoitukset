var ship;
var asteroids = [];
var lasers = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();

    // 5 asteroidia aluksi
    for (var i = 0; i < 5; i++){
        asteroids.push(new Asteroid());
    }
}

function draw(){
    background(10);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

    // vois olla foreach loop
    for (var i = 0; i < asteroids.length; i++) {
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }

    for (var i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
    }

}

function keyPressed(){
    if (key == ' '){
        lasers.push(new Laser(ship.pos, ship.heading));
    }
    if (keyCode == RIGHT_ARROW){
        ship.setRotation(0.1);
    }
    if (keyCode == LEFT_ARROW){
        ship.setRotation(-0.1);
    }
    if (keyCode == UP_ARROW){
        ship.boosting(true);
    }
}

function keyReleased(){
    ship.setRotation(0);
    ship.boosting(false);
}

