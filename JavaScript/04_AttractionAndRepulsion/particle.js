function Particle(x,y){
    this.pos = createVector(x,y);
    // prev pos viivaa varten
    this.prev = createVector(x,y);
    this.vel = p5.Vector.random2D();
    // initial velocity on enemmän random
    this.vel.setMag(random(1,4));
    this.acc = createVector();
    // createVector vector ilman argumentteja on 0,0

    this.update = function(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        //acceleration pitää aina resettaa kun lasketaan uus force
        this.acc.mult(0);
    }

    this.show = function(){
        stroke(255);
        strokeWeight(2);
        // point viivaksi (alku,loppu)
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;
    }
    this.attracted = function(target){
    	// direction = target - this.pos (sub on miinus koska - ei toimi vectoreihin js:ssä)
        var force = p5.Vector.sub(target, this.pos);
        var dsquared = force.magSq();
        dsquared = constrain(dsquared,25,50);

        // nopeus ?
        var G = 40; //6.67408;
        var strength = G / dsquared;
        force.setMag(strength);
        // lasketaan uus force kaikista attractoreista
        this.acc.add(force);
    }
}