//globaalit muuttujat alkuun:
var symbol;

function setup(){
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(10);
    // luodaan symboli olio
    symbol = new Symbol( width / 2, height / 2 );
    // kutsutaan symbolin omaa funktiota jolla generoidaan siis random symboli
    symbol.setToRandomSymbol();
}
function draw(){
    // draw on functio jota kutsutaan loopissa, 60 frames per second

    symbol.render();
}

function Symbol(x,y){
    this.x = x;
    this.y = y;
    this.value;

    // SYMBOLINHAKU-FUNKTIO
    // Käytetään matrixiin katakanaa, katakana unicode block alkaa kohdasta 0x30A0 = 12448 decimalina
    this.setToRandomSymbol = function(){
    	// Random katakana stringiksi ja asetetaan valuemuuttujaan
        this.value = String.fromCharCode(
        	// lisätään 12448:iin random luku 0-96 välillä koska katakanoja on 96
        	0x30A0 + round(random(0,96))
        );
    }

    // SYMBOLIN NÄYTTÄMIS-FUNKTIO 
    this.render = function(){
        //tekstin väri, vähän sinistä vihreän sekaan
        fill(0,255,70);
        text(this.value, this.x, this.y);
    }
}