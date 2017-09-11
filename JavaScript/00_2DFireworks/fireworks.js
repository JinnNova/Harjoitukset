function Firework(){
    this.firework = new Particle(random(width),height);
    this.exploded = false;

    this.update = function(){
    	// Päivitetään vain jos firework on olemassa. olisi monta eri tapaa tehdä tämä, varmasti helpompia.
    	if (!this.exploded){
            this.firework.applyForce(gravity);
            this.firework.update();

            // Jos fireworkin Y velocity on positiivinen tai 0 (eli liikkuisi alaspäin tai olisi paikallaan, niin räjähdetään)
            if(this.firework.vel.y >= 0){
            	// Lakataan piirtämästä fireworkkia koska se on räjähtänyt
                this.exploded = true;
            }
        }


    }
    this.show = function(){
    	// Sama juttu. näytetään firework vaan jos se on olemassa.
    	if (!this.exploded){
            this.firework.show();
        }
    }
}