
// Asteroid constructor function
function Asteroid(pos, r) {
    // jos funktio saa argumenttina positionin niin luodaan uus asteroidi siihen, muuten random positio!
    if (pos) {
        this.pos = pos.copy();
    }
    else {
        this.pos = createVector(random(width), random(height));
    }

    // jos saadaan r value argumenttina niin puolitetaan se
    if (r) {
        this.r = r * 0.5;
    }
    else {
        // random kokoiset asteroidit
        this.r = random(15,50);
    }
    
    this.vel = p5.Vector.random2D();
    
    // jotta asteroidilla olisi 5-15 vertexiä vaihtelevasti:
    this.total = floor(random(8,15));
    this.offset = [];
    for (var i = 0; i < this.total; i++){
        this.offset[i] = random(-8,8);
    }

    //copypastaa hyi hyi
    this.edges = function(){
        // leveydeltä
        if (this.pos.x > width + this.r){
            this.pos.x = -this.r;
        }
        else if (this.pos.x < -this.r){
            this.pos.x = width + this.r;
        }
        // korkeudelta
        else if (this.pos.y > height + this.r){
            this.pos.y = -this.r;
        }
        else if (this.pos.y < -this.r){
            this.pos.y = height + this.r;
        }
    }

    // breakup luo kaksi uutta asteroidia
    this.breakup = function() {
        var newA = [];
        newA[0] = new Asteroid(this.pos, this.r);
        newA[1] = new Asteroid(this.pos, this.r);
        return newA;
    }

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        stroke(255);
        noFill();
        //fill(10);
        translate(this.pos.x, this.pos.y);
        //ellipse(0,0, this.r * 2);

        beginShape();
        for (var i = 0; i < this.total; i++) {
            // TWO_PI = 360 astetta, map = p5 functio
            // tarvitaan trigonometriaa
            var angle = map(i,0,this.total,0,TWO_PI);
            var r = this.r + this.offset[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x,y);
        }
        // CLOSE = P5 funktio jolla shape sulkeutuu eikä jää rakoa
        endShape(CLOSE);

        pop();
        // push ja pop koska asteroideja on paljon ja halutaan että ne ovat toisistaan riippumattomia (translate p5 juttu)
    }
}