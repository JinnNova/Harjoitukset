class Star{
  float x, y, z;
  
  Star(){
    //vaihdetaan 0, width -> -width, width jotta tähdet liikkuu muuallekkin kuin oikealle ja alas
    x = random(-width, width);
    y = random(-height, height);
    z = random(width);
  }
  
  void update(){
    // numeron tilalle voi vaihtaa isomman arvon jos haluu että tähdet on nopeempia
    z = z - 7;
    // ei haluta että tähdet palaa takasin reunoilta, jos z menee alle 0 niin resetataan.
    if(z <= 0){
      //jos tässä on random niin "uusien tähtien" nopeudet on randomeita
      z = random(width);
      // jos ei päivitetä myös x y akseleita niin samat tähdet spawnaa joka kerta samoihin kohtiin
      x = random(-width, width);
      y = random(-height, height);
    }
  }
  
  void show(){
    fill(255);
    noStroke();
    
    float sx = map(x / z, 0, 1, 0, width);
    float sy = map(y / z, 0, 1, 0, height);
    
    //jos ellipse(sx,sy,8,8);, niin aina piirretään 8 x 8 kokonen tähti
    //halutaan että jos tähti kaukana nii piirretään pieni, lähellä iso
    // map = z value vaihtuu, nollasta widthiin, nollassa 6 ja widthissa 0
    //tätä voisi vielä parantaa -> jotkut tähdet ei saa suurentua ollenkaan (osa on vielä kauempana)
    float r = map(z, 0, width, 6, 0);
        ellipse(sx,sy,r,r);
  }
  
}