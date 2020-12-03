//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload(){
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  Dog = createSprite(250,350,10,10);
  Dog.addImage(dog)
  Dog.scale = 0.2

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  Dog.addImage(happyDog);

}

  drawSprites();
  //add styles here
  textSize(12);
  fill("white");
  stroke("white");
  text("Note:Press UP_ARROW key to feed Drago Milk!",150,20);
  text("Food remaining:"+foodS,200,250)

}

//function to read values from DB
function readStock(data){
foodS = data.val();
}

//function to write values from DB
function writeStock(x){
if(x<=0){
  x = 0;
}else{
 x = x-1;
}



database.ref('/').update({
Food : x

  })

}


