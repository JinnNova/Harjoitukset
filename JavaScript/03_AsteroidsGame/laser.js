function Laser(shippos) {
    this.pos = createVector(shippos.x, shippos.y);
    this.vel = createVector();

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
}