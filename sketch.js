var movingrect, fixedrect;


function setup() {
  createCanvas(1200, 800);
  movingrect = createSprite(400, 100, 50, 50);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect.debug = true;
  fixedrect.debug = true;
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.velocityY = 5
  fixedrect.velocityY = -5
}

function draw() {
  background(255, 255, 255);

  console.log(movingrect.x - fixedrect.x);
  if (movingrect.x - fixedrect.x < (fixedrect.width / 2 + movingrect.width / 2) &&
    fixedrect.x - movingrect.x < (fixedrect.width / 2 + movingrect.width / 2)) {

    movingrect.velocityX *= -1;
    fixedrect.velocityX *= -1;

  }


  if (movingrect.y - fixedrect.y < (fixedrect.height / 2 + movingrect.height / 2) &&
    fixedrect.y - movingrect.y < (fixedrect.height / 2 + movingrect.height / 2)) {
    movingrect.velocityY *= -1;
    fixedrect.velocityY *= -1;
  }
  drawSprites();
}