//kamera ei liiku, illuusio liikkumisesta kun "noisemappi" "liikkuu".
//Tutorial for this at Coding train by Daniel Shiffman
int cols, rows;
int scale = 20;
int w = 900;
int h = 900;
float flying = 0;
float[][] terraingridZ;

void setup(){
  size(400,400,P3D);
  cols = w / scale;
  rows = h / scale;
  terraingridZ = new float[cols][rows];

}

void draw(){
  background(0);
  stroke(255);
  noFill();
  // draw everything relative to the center of the window
  translate(width/2,height/2);
  rotateX(PI/3);
  // siirretään vielä puoliruutua vasemmalle?
  translate(-w/2,-h/2);
  
  //illuusio liikkeestä
  flying -= 0.06;
  
  // työnnetään gridi täyteen perlin noisea
  float yoff = flying;
  for(int y = 0; y < rows; y++){
    float xoff = 0;
    for(int x = 0; x < cols; x++){
      terraingridZ[x][y] = map(noise(xoff,yoff), 0, 1, -85, 85);
      xoff +=0.2;
    }
    yoff += 0.1;
  }
  
  //piirretään maailma
  for(int y = 0; y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for(int x = 0; x < cols; x++){
      vertex(x*scale, y*scale, terraingridZ[x][y]);
      vertex(x*scale, (y+1)*scale, terraingridZ[x][y+1]);
    }
    endShape();
  }
  
}