function Particle(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,1);
    this.acc = createVector();
    // vector ilman argumentteja on 0,0

    this.update = function(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    this.show = function(){
        stroke(255);
        strokeWeight(2);
        point(this.pos.x, this.pos.y);
    }
    this.attracted = function(target){
    	// direction = target - this.pos (sub on miinus koska - ei toimi vectoreihin js:ssä)
        var force = p5.Vector.sub(target, this.pos);
        var dsquared = force.magSq();
        dsquared = constrain(dsquared,25,500);

        var G = 50; //6.67408;
        var strength = G / dsquared;
        force.setMag(strength);
        this.acc = force;
    }
}