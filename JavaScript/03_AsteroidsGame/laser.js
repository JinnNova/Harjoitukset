function Laser(shippos, heading) {
    this.pos = createVector(shippos.x, shippos.y);
    this.vel = p5.Vector.fromAngle(heading);
    this.vel.mult(8);

    this.update = function() {
        this.pos.add(this.vel);
    }
    this.render = function() {
    	// ilman pushia ja poppia stroke weight laitetaan KAIKKEEN (asteroidit, alus jne)
    	push();
    	stroke(255);
    	strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    this.hits = function(asteroid){
        // dist() on p5 funktio
        var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        if (d < asteroid.r) {
            console.log("HIT");
        }
    }
}