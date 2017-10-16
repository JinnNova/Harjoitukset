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

    }
}