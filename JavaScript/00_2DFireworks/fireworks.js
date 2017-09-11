function Firework(){
    this.firework = new Particle(random(width),height);
    this.exploded = false;
    this.particles = [];

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
        for (var i = 0; i < this.particles.length; i++){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
        }
    }
    this.explode = function(){
    	for (var i = 0; i < 100; i++){
    		// particle luodaan siihen pisteeseen jossa firework oli
    		var p = new Particle(this.firework.pos.x, this.firework.pos.y);
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