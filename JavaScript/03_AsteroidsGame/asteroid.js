
// Asteroid constructor function
function Asteroid() {
    this.pos = createVector(random(width), random(height));
    this.r = 50;

    this.render = function() {
    	push();
    	stroke(255);
    	noFill();
        translate(this.pos.x, this.pos.y);
        //ellipse(0,0, this.r * 2);

        beginShape();
        for (var i = 0; i < 10; i++) {
        	// TWO_PI = 360 astetta, map = p5 functio
        	// tarvitaan trigonometriaa
            var angle = map(i,0,10,0,TWO_PI);
            var x = this.r * cos(angle);
            var y = this.r * sin(angle);
            vertex(x,y);
        }
        // CLOSE = P5 funktio jolla shape sulkeutuu eikä jää rakoa
        endShape(CLOSE);

        pop();
        // push ja pop koska asteroideja on paljon ja halutaan että ne ovat toisistaan riippumattomia (translate p5 juttu)
    }
}