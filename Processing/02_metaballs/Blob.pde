class Blob{
  PVector pos;
  float r; // radius
  PVector velo;
  
  Blob(float x, float y){
    pos = new PVector(x,y);
    velo = PVector.random2D();
    velo.mult(random(2,5));
    r = 40;
  }
  
  void update(){
    pos.add(velo);
    //estetään ettei blobi hypi reunojen yli. ensin vasen ja oikea reuna
    if (pos.x > width || pos.x < 0){
      //vastakkainen suunta
      velo.x *= -1;
    }
    //sitten ylä ja alareunat
    if (pos.y > height || pos.y < 0){
      //vastakkainen suunta
      velo.y *= -1;
    }
  }
  
  void show() {
    noFill();
    stroke(255);
    ellipse(pos.x, pos.y, r*2, r*2);
    
  }
}