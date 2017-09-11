function Particle(x,y,hu,firework){
    this.pos = createVector(x,y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector(0,0);

    if (this.firework){
        // fireworkeilla on random nopeus jotta lentävät eri korkeuksille
        this.vel = createVector(0,random(-11,-7));
    }
    else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2,12));
    }
    

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function(){
        if (!this.firework){
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // tällä sai jotenkin fireworkin lentään korkeemmalle ja pehmeemmin. miksi?
        this.acc.mult(0);
    }

    this.done = function(){
        if(this.lifespan<0){
            return true;
        }
        else {
            return false;
        }
    }

    this.show = function(){
        if (!this.firework){
            strokeWeight(2);
            // lifespan = alpha eli himmenee
            stroke(random(255), hu, 255, this.lifespan);
        }
        else {
            strokeWeight(4);
            // jos tästä stroken jätti pois niin strokealphaksi jäi pysyvästi lifespan eli myös fireworkit alko vilkkumaan!
            // RGB tarvii kolme väriä. kokeilin kaikenlaista kikkailua
            stroke(random(255), hu, 255);
            
        }
        point(this.pos.x, this.pos.y);
    }
}