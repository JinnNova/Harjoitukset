var ship;
var asteroids = [];
var lasers = [];

function setup(){
    //createCanvas(windowWidth, windowHeight);
    createCanvas(800, 800);
    ship = new Ship();

    // 5 asteroidia aluksi
    for (var i = 0; i < 5; i++){
        asteroids.push(new Asteroid());
    }
}

function draw(){
    background(10);

    for (var i = lasers.length-1; i >= 0 ; i--) {
        lasers[i].render();
        lasers[i].update();
        // looppi pitää tehdä takaperin ettei tarkisteta uusia asteroideja jotka on juuri generoitu osumasta. :D
        for (var j = asteroids.length-1; j >= 0 ; j--) {

            if (lasers[i].hits(asteroids[j])){
                // tehdään uusia asteroideja vaan jos r > 12, muuten asteroidi vaan katoaa
                if (asteroids[j].r > 12) {
                    var newAsteroids = asteroids[j].breakup();
                    //console.log(newAsteroids);
                    asteroids = asteroids.concat(newAsteroids);
                }
                
                asteroids.splice(j,1);
                //laaserikin pitäisi poistaa mutta jos laasereita oli arrayssa vain yksi niin 
                //TypeError: Cannot read property 'hits' of undefined, muuten toimi jos enemmän kuin 1. miten ratkastaan?
                //sattukin että yritti ihan samaa asiaa videolla :D ja sama ongelma
                lasers.splice(i,1);
                //RATKAISU! loopista pitää tulla ulos eikä jatkaa senjälkeen kun laaseri poistetaan :D
                break;
            }
        }
    }
    // piirretään ship vasta laaserien jälkeen että menee laaserien päälle :D niin ei tartte siirtää laasereiden alkulähdettä
    // ONGELMA: jostain syystä shippiin ei tahdo vaikuttaa fill eikä stroke. wat. -> jostain syystä ei vaan halunnut päivittää. toimii
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

    // vois olla foreach loop
    for (var i = 0; i < asteroids.length; i++) {
        if (ship.hits(asteroids[i])) {
            console.log("U DED");
        }
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
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

