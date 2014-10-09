var snake;
var snakeLength;
var snakeSize;

var context;
var screenwidth;
var screenheight;

gameInitialize();
gameDraw();

function gameinitialize() {
   var canvas = docuement.getelementid("game-screen");
   context = canvas.getcontext("2d");
   
   screenWidth = window.innerWidth;
   screenHeight = window.innerHeight;
   
   canvas.width = screenWidth;
   canvas.height = screenHeight;
}

function gameloop() {
    
}

function gamedraw() {
    context.fillStyle = "rgb(114, 0, 255)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialize() {
  snake = [];
  snakeLength = 15;
  snakeSize = 20;
  
  for() {
      
  }
  }

function snakeDraw() {
    
}

function snakeUpdate() {
    
}