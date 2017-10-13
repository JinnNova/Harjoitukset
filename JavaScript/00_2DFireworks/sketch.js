// Thanks to Daniel Shiffman for this tutorial on "Fireworks" in Javascript and p5.js

var fireworks =[];
var gravity;

function setup(){
    createCanvas(800,600);
    //kokeilen RGBllä. sinisen eri sävyjä koska vain yksi arvo väliltä 0-255 (tarvii kolme jos RGB).
    colorMode(RGB);
    gravity = createVector(0, 0.1);
    
    stroke(255);
    strokeWeight(4);
    background(25,25,25);

}
function draw(){
    // joku bugi jos vaihtaa colormoden HSBksi. 
    // -> taustasta tuli ruskee kun korjas hue nimiset muuttujat hu:ksi ja trailit katoaa.

    //bugiko vai mikä? taustaan jää outoa pysyvää jälkeä fireworkeista.
    background(25,25,25,35);
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
