var font;

function preload(){
    //Font not included in github project. use your own
    font = loadFont('STJEDISE.TTF');
}
function setup(){
    createCanvas(1000,300);
    background(50);
    textFont(font);
    textSize(160);
    fill(255);
    noStroke();
    text('shiffman', 70, 210)

    var points = font.textToPoints('shiffman', 70, 210);
    console.log(points);

    for(var i=0; i < points.length; i++){
        var pt = points[i];
        stroke(0,255,0);
        strokeWeight(4);
        point(pt.x, pt.y);
    }

}
function draw(){


}