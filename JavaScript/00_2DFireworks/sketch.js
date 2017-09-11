var fireworks =[];
var gravity;

function setup(){
    createCanvas(800,600);
    gravity = createVector(0, 0.1);
    
    stroke(255);
    strokeWeight(4);

}
function draw(){
    background(51);
    // randomisti noin kerran kymmenessä framessa luodaan uusi firework
    if (random(1) < 0.1){
        fireworks.push(new Firework());
    }
    for (var i = 0; i < fireworks.length; i++){
        fireworks[i].update();
        fireworks[i].show();
    }


}