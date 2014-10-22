/*-----------------------------------------------------------------------------
 * Variables
 * ----------------------------------------------------------------------------
 */
var snake;
var snakeLength;
var snakeSize;
var snakeDirection;
var context;
var screenWidth;
var screenHeight;
/*-----------------------------------------------------------------------------
 * Function Callers- tell functions to activate.
 * ----------------------------------------------------------------------------
 */
gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 200);
/*-----------------------------------------------------------------------------
 * Functions- tell website what to do and can be used whenever.(these are game ones)
 * ----------------------------------------------------------------------------
 */

function gameInitialize(){
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    
    document.addEventListener("keydown", keyboardHandler);
   
}
/*-----------------------------------------------------------------------------
 * Function Caller that repeats the calls.
 * ----------------------------------------------------------------------------
 */

function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();
}
/*-----------------------------------------------------------------------------
 * Continuation of game Functions
 * ----------------------------------------------------------------------------
 */
function gameDraw() {
    context.fillStyle = "rgb(26,46,145)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
    
}
/*-----------------------------------------------------------------------------
 * snake Functions
 * ----------------------------------------------------------------------------
 */
function snakeInitialize(){
    snake = [];
    snakeLength = 4;
    snakeSize = 40;
    snakeDirection = "down";
    foodSize = 20;
    
    for (var index = snakeLength - 1; index >= 0; index--){
    snake.push({
        x: index,
        y: 0
    });
}
    
}



function snakeDraw(){
    for (var index = 0; index < snake.length; index++){
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate(){
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    if(snakeDirection === "down") {
        snakeHeadY++;
    }
    
    if(snakeDirection === "right") {
        snakeHeadX++;
    }
    
    if(snakeDirection === "left") {
        snakeHeadX--;
    }
    
    if(snakeDirection === "up") {
        snakeHeadY--;
    }
    
   
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
    }
    /*-------------------------------------------------------------------------
     * Food Functions
     * ------------------------------------------------------------------------
     */
    function foodInitialize(){
        food = {
            x: 0,
            y: 0
        };
        setFoodPosition();                          
    }
    
    function foodDraw(){
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, foodSize, foodSize);
    }
    
    function setFoodPosition(){
        var RandomX = Math.floor(Math.random() * screenWidth);
        var RandomY = Math.floor(Math.random() * screenHeight);
        
        food.x = RandomX;
        food.y = RandomY;
    }
    
    /* ------------------------------------------------------------------------
     * Input Functions
     * ------------------------------------------------------------------------
     */
    function keyboardHandler(event) {
        console.log(event);
        
        if(event.keyCode == "39") {
          snakeDirection = "right";
        }
        
      if(event.keyCode == "40") {
          snakeDirection = "down";
      }
        
    }