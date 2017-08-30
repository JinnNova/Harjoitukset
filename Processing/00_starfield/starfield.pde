// array tähdistä, voisi olla myös list, mutta tämä helpompi.
// -> kun tähti menee pois ruudulta, käytetään sama tähti uudelleen mutta resetataan sen sijainti.
Star[] stars = new Star[3000];

void setup(){
  size(800, 800);
  //Täytetään taulukko tähdillä
  for (int i = 0; i < stars.length; i++){
    stars[i] = new Star();
  }
}

void draw(){
  //musta tausta
  background(0);
  //siirretään tapahtumat aivan oikeasta yläreunasta keskelle
  translate(width/2, height/2);
  //Piirretään jokainen taulukossa/arrayssa oleva tähti
  for(int i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
    //nämä funktiot löytyvät siis star luokasta
  }
}