//metaballsissa/blobeissa värjätään distancen mukaan, mutta ei distance keskustasta vaan blobeista

int index;
float distance, colo, sum;

// blobit arrayyn
Blob[] blobit = new Blob[9];

void setup(){
  size(600, 600);
  //rainbows all the wayyy
  colorMode(HSB);
  for(int i = 0; i < blobit.length; i++){
    blobit[i] = new Blob(random(width), random(height));
  }

}

void draw(){
 background(50);
 loadPixels();
 for(int x=0; x < width; x++) {
   for(int y=0; y < height; y++){
     index = x + y * width;
     sum = 0;
     //halutaan piirtää jokaiselle blobille värijuttu
     for(Blob b : blobit){
       distance = dist(x, y, b.pos.x, b.pos.y);
       sum += 110 * blobit[0].r / distance;
     } 
     pixels[index] = color(sum);
     //vaihtoehto1: color(x,0,y);
     //vaihtoehto2: color(distance); - etäisyyden mukaan väri
   }
 }
 updatePixels();
 
 // piirretään kaikki blobit
 for(Blob b : blobit){
   b.update();
   //b.show(); ei tarvita enää, näyttää pallojen reunat jos tarvii
 }
}