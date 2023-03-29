let offset=26
let arrayOfColors=["red","blue", "green", "orange", "yellow", "purple"]

function setup() {
  createCanvas(400, 400);
  noLoop()
}

function draw() {
  background(220);
  for (let addCircle=0; addCircle<15; addCircle++){
    fill(random(arrayOfColors))
    addSprite(offset,offset,1)
  }
 
       
}
function addSprite(x,y,size){
translate (x,y)
scale(size)
  ellipse (0,0,15)
}
