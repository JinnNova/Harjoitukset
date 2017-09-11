var fireworks =[];
var gravity;

function setup(){
    createCanvas(800,600);
    gravity = createVector(0, 0.1);
    
    stroke(255);
    strokeWeight(4);
    background(30,30,30);

}
function draw(){
    background(30,30,30,45);
    // randomisti noin kerran kymmenessä framessa luodaan uusi firework
    if (random(1) < 0.1){
        fireworks.push(new Firework());
    }
    for (var i = fireworks.length-1; i >= 0; i--){
        fireworks[i].update();
        fireworks[i].show();
        if(fireworks[i].done()){
            fireworks.splice(i,1);
        }
    }
    //Testaa arrayn kokoa: console.log(fireworks.length);


}