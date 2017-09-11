function Firework(){
	this.hu = random(255);
    this.firework = new Particle(random(width),height,this.hu,true);
    this.exploded = false;
    this.particles = [];

    this.done = function(){
        if(this.exploded && this.particles.length == 0){
            return true;
        }
        else {
            return false;
        }
    }

    this.update = function(){
    	// Päivitetään vain jos firework on olemassa. olisi monta eri tapaa tehdä tämä, varmasti helpompia.
    	if (!this.exploded){
            this.firework.applyForce(gravity);
            this.firework.update();

            // Jos fireworkin Y velocity on positiivinen tai 0 (eli liikkuisi alaspäin tai olisi paikallaan, niin räjähdetään)
            if(this.firework.vel.y >= 0){
            	// Lakataan piirtämästä fireworkkia koska se on räjähtänyt
                this.exploded = true;
                this.explode();
            }
        }
        for (var i = this.particles.length-1; i >= 0; i--){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            // done = oma funktio
            if (this.particles[i].done()){
            	// Splice on javascript funktio joka tuhoaa jotakin arraysta
                this.particles.splice(i,1);
            }
        }
    }
    this.explode = function(){
    	for (var i = 0; i < 100; i++){
    		// particle luodaan siihen pisteeseen jossa firework oli
    		var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
            this.particles.push(p);
    	}
    }

    this.show = function(){
    	// Sama juttu. näytetään firework vaan jos se on olemassa.
    	if (!this.exploded){
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++){
            this.particles[i].show();
        }
    }
}