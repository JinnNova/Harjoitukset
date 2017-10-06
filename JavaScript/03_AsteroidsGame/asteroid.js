
// Asteroid constructor function
function Asteroid() {
    this.pos = createVector(random(width), random(height));
    // random kokoiset asteroidit
    this.r = random(15,50);
    // jotta asteroidilla olisi 5-15 vertexiä vaihtelevasti:
    this.total = floor(random(8,15));
    this.offset = [];
    for (var i = 0; i < this.total; i++){
        this.offset[i] = random(-8,8);
    }

    this.render = function() {
        push();
        stroke(255);
        noFill();
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