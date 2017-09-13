// This coding train tutorial by. Daniel Shiffman

var font;
var vehicles = [];

function preload(){
    //Font not included in github project. use your own
    font = loadFont('STJEDISE.TTF');
}
function setup(){
    createCanvas(1000,300);
    background(50);
    //textFont(font);
    //textSize(160);
    //fill(255);
    //noStroke();
    //text('shiffman', 70, 210)

    // parametrit: sijainti vasemmalta, ylhäältä ja fontin koko
    var points = font.textToPoints('shiffman', 70, 210, 160);
    //console.log(points);

    for(var i=0; i < points.length; i++){
        var pt = points[i];
        //VANHA KOODI, tilalle tulee vehiclet
        //pallojen väri ja koko
        //stroke(255);
        //strokeWeight(8);
        //point(pt.x, pt.y);

        var vehicle = new Vehicle(pt.x,pt.y);
        vehicles.push(vehicle);
    }

}
function draw(){
    background(50);
    //miksi alussa piirtää kaikki vasempaan ylänurkkaan ja sitten vasta sieltä alkaa vetää paikalleen? :D 
    for(var i=0; i < vehicles.length; i++){
    	var v = vehicles[i];
    	v.behaviors();
    	v.update();
    	v.show();
    }

}