//globaalit muuttujat alkuun:
var symbolSize =  28;
var streams = [];

function setup(){
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(10);

    var x = 0;
    for(var i = 0; i <= width / symbolSize; i++){
        var stream = new Stream();
        stream.generateSymbols(x,random(-1000,0));
        streams.push(stream);
        x += symbolSize;
    }
    textSize(symbolSize);
}

function draw(){
    // draw on functio jota kutsutaan loopissa, 60 frames per second
    background(10,150); // halutaan piirtää background uusiksi joka framessa
    streams.forEach(function(stream){
        stream.render();
    });
}

function Symbol(x,y,speed,first){
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    // random whole number = round(random(väli))
    // Tämä päättää kuinka usein symboli vaihtuu (every N:th frame) N = 5..20
    this.switchInterval = round(random(5,20));
    this.first = first;

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

    // SYMBOLIN NÄYTTÄMIS-FUNKTIO (POISTETTU)

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

//tehdään yhden symbolin sijasta streameja
function Stream(){
    this.symbols = [];
    this.totalSymbols = round(random(5,30));
    this.speed = random(5,15);

    // Streamin oma funktio symbolien generoimiseen
    this.generateSymbols = function(x,y){
        var first = round(random(0,3)) == 1;

        //täytetään Streamin symbols array symboleilla
        for(var i = 0; i <= this.totalSymbols; i++){
            symbol = new Symbol(x, y, this.speed, first);
            symbol.setToRandomSymbol();
            // pusketaan jokainen symboli arrayyn elämään
            this.symbols.push(symbol);
            // halutaan asettaa jokainen symboli edellisen yläpuolelle
            y -= symbolSize;
            first = false;
        }
    }

    // Streamin vastuulle myös symbolien renderöinti
    this.render = function(){
        // FOR EACH JEE! -> koska jokainen elementti on symbol, pitää this:it vaihtaa symboliksi
        this.symbols.forEach(function(symbol) {
        	//tekstin väri
            if(symbol.first){
    	        fill(180,255,180);	
    	    }
            else {
                fill(0,255,70);
    	    }
            
            text(symbol.value, symbol.x, symbol.y);
            // Let's make it rain :D
            symbol.rain();
            symbol.setToRandomSymbol();
        //huom. for each todellakin javascriptissa loppuu näin ja alusta näyttäisi "puuttuvan" yksi ) merkki sentakia. :o
        });
    }
}