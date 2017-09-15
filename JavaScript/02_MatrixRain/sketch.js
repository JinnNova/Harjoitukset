//globaalit muuttujat alkuun:
var symbol;
var symbolSize =  60;

function setup(){
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(10);
    // luodaan symboli olio
    symbol = new Symbol( width / 2, 0, random(5,10) );
    // kutsutaan symbolin omaa funktiota jolla generoidaan siis random symboli
    symbol.setToRandomSymbol();
    textSize(symbolSize);
}
function draw(){
    // draw on functio jota kutsutaan loopissa, 60 frames per second
    background(10); // halutaan piirtää background uusiksi joka framessa
    symbol.render();
}

function Symbol(x,y,speed){
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    // random whole number = round(random(väli))
    // Tämä päättää kuinka usein symboli vaihtuu (every N:th frame) N = 5..20
    this.switchInterval = round(random(5,20));

    // SYMBOLINHAKU-FUNKTIO
    // Käytetään matrixiin katakanaa, katakana unicode block alkaa kohdasta 0x30A0 = 12448 decimalina
    this.setToRandomSymbol = function(){
    	// frameCount on P5.js variable joka pitää kirjaa framejen määrästä
    	// % = modulo, antaa jakojäännöksen
    	// ELI: Aina kun framecount on jaollinen luvulla 2-20 niin suoritetaan symbolinvaihto
    	// -->> asettaa uuden symbolin siis every N:th frame!
        if(frameCount % this.switchInterval == 0){
            // Random katakana stringiksi ja asetetaan valuemuuttujaan
            this.value = String.fromCharCode(
                // lisätään 12448:iin random luku 0-96 välillä koska katakanoja on 96
                0x30A0 + round(random(0,96))
            );
        }

    }

    // SYMBOLIN NÄYTTÄMIS-FUNKTIO 
    this.render = function(){
        //tekstin väri, vähän sinistä vihreän sekaan
        fill(0,255,70);
        text(this.value, this.x, this.y);
        // Let's make it rain :D
        this.rain();
        this.setToRandomSymbol();
    }

    // jos y koskettaa pohjaa niin resetataan se (ei tarvi looppeja koska draw on loop)
    this.rain = function(){
        //if(this.y >= height){
        //    this.y = 0;
        //}
        //else {
        //    this.y += this.speed;
        //}
        // YLLÄ OLEVA IF-ELSE NÄTIMMIN:
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
}