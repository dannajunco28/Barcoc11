
function preload(){

  seaIMG = loadImage("sea.png");
  shipImg1 = loadAnimation (//enlista los nombres de los png que desees);
  spriteName.addImage();


  //codigo para reiniciar el fondo

  if (sea.x <0){
      sea.x=sea.widht/2
  }

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
  
 
}